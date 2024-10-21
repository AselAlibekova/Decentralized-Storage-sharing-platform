const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Web3 = require('web3'); 
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;
let web3;
let contract;

// Подключение к MongoDB
mongoose.connect('mongodb://localhost:27017/form', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Failed to connect to MongoDB', err);
});

// Схема и модель для пользователей в MongoDB
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
});
const User = mongoose.model('User', userSchema);

// Схема и модель для предложений (Supply)
const supplySchema = new mongoose.Schema({
    name: { type: String, required: true },
    space: { type: Number, required: true },
    price: { type: Number, required: true },
});
const Supply = mongoose.model('Supply', supplySchema);

// Middleware для парсинга данных форм
app.use(bodyParser.urlencoded({ extended: true }));

// Сервировка статических файлов из директории 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Установка шаблонизатора EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public')); // Убедитесь, что путь соответствует расположению ваших ejs-файлов

// Роут для главной страницы
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Регистрация пользователя
app.post('/signup', async (req, res) => {
    const { username, email, broj, pswd } = req.body;

    try {
        const newUser = new User({
            username: username,
            email: email,
            phone: broj,
            password: pswd
        });

        await newUser.save();
        res.redirect('/'); // Редирект на страницу логина после регистрации
    } catch (error) {
        console.error(error);
        res.send('Ошибка при регистрации. Попробуйте еще раз.');
    }
});

// Вход пользователя
app.post('/login', async (req, res) => {
    const { email, pswd } = req.body;

    try {
        const user = await User.findOne({ email: email });

        if (user && user.password === pswd) {
            res.redirect('/DStorage.html');
        } else {
            res.send('Неверные данные для входа. Пожалуйста, <a href="/">попробуйте еще раз</a>.');
        } 
    } catch (error) {
        console.error(error);
        res.send('Ошибка при входе. Попробуйте еще раз.');
    }
});
async function connectToMetaMask() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            // Request account access if needed
            await ethereum.request({ method: 'eth_requestAccounts' });
            const web3 = new Web3(window.ethereum);
            console.log('MetaMask is connected!');
            return web3;
        } catch (error) {
            console.error("User denied account access");
        }
    } else {
        alert('MetaMask is required to interact with the Ethereum network');
    }
}
async function buyStorage(providerId, space, price) {
    const web3 = await connectToMetaMask();  // Ensure MetaMask is connected
    const accounts = await web3.eth.getAccounts();
    const userAddress = accounts[0];  // Get user's MetaMask address
    
    
    const contract = new web3.eth.Contract(contractABI, contractAddress);

    // Рассчитываем стоимость в wei (ETH * 10^18)
    const totalCostInWei = web3.utils.toWei(price.toString(), 'ether');

    // Вызываем смарт-контракт rentStorage
    try {
        await contract.methods.rentStorage(providerId, space).send({
            from: userAddress,
            value: totalCostInWei
        });
        alert('Transaction successful!');
    } catch (error) {
        console.error("Transaction failed:", error);
        alert('Transaction failed. See console for details.');
    }
}

// Обработка добавления нового предложения
app.post('/submit-supply', async (req, res) => {
    const { name, space, price } = req.body;

    console.log('Received data:', req.body); // Добавьте эту строку

    if (!name || !space || !price) {
        return res.status(400).send('Все поля обязательны для заполнения');
    }

    try {
        const newListing = new Supply({
            name: name,
            space: space,
            price: price
        });

        await newListing.save();
        console.log('New Listing saved:', newListing);
        res.redirect('/generic');
    } catch (err) {
        res.status(500).send('Ошибка при сохранении предложения: ' + err);
    }
});


// Рендеринг страницы с объявлениями
app.get('/generic', async (req, res) => {
    try {
        const listings = await Supply.find();
        console.log('Listings fetched:', listings); // Добавьте эту строку
        res.render('generic', { listings });
    } catch (err) {
        res.status(500).send('Ошибка при получении списка предложений: ' + err);
    }
});



// Статическая страница DStorage
app.get('/DStorage.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'DStorage.html'));
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
