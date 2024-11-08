Decentralized Storage Sharing Platform Report
 ![image](https://github.com/user-attachments/assets/90917bf8-6c88-46fd-a296-a241adaeb139)
![image](https://github.com/user-attachments/assets/792f92ed-11a3-4370-8130-b58a90d9a38b)

Overview
The Decentralized Storage Sharing Platform is a web-based solution that enables users to either rent out unused storage space or purchase storage on a decentralized network. This platform leverages a range of tools and technologies, including IPFS (InterPlanetary File System), MongoDB, MetaMask, Ganache, Infura, Remix IDE, Solidity smart contracts, and Ethereum, to create a secure, transparent, and efficient system for data storage and retrieval. The platform also incorporates file encryption and fragmentation to protect user data and ensure redundancy.
Core Features
1.	Peer-to-Peer Storage Marketplace: Users can list their available storage space or browse existing offers to rent storage from other users. This peer-to-peer system eliminates the need for centralized storage providers, giving users full control over their data and storage needs.
2.	Smart Contracts for Storage Agreements and Payments: Storage contracts are managed on the Ethereum blockchain to enforce transparency and ensure fair payments. Users pay for storage based on their usage, and payments are handled automatically via Ethereum, with providers compensated based on the amount of space rented out. The smart contracts are written in Solidity and deployed using Remix and Ganache for local testing.
3.	File Encryption and Fragmentation: All files are encrypted before being uploaded, fragmented into smaller pieces, and then distributed across the IPFS network. This process enhances security, making files more resilient to data loss and unauthorized access. Infura is used to connect to the IPFS network, while each file stored on IPFS is identified by a unique CID (Content Identifier).
4.	Backend and Database Management: The platform uses MongoDB to store user and storage data, providing a reliable database solution for handling listings and user information.
5.	Wallet and Payment Integration: MetaMask is used for wallet management, allowing users to interact with the Ethereum blockchain to complete transactions securely.
________________________________________
Tools and Technologies
•	IPFS (InterPlanetary File System): A distributed system for storing and accessing files, websites, applications, and data across multiple nodes.
•	MongoDB: A NoSQL database used to store user information, storage listings, and metadata related to files.
•	MetaMask: A browser extension wallet that allows users to interact with the Ethereum blockchain and manage payments.
•	Ganache: A personal blockchain for Ethereum development, used here for local testing of smart contracts.
•	Remix IDE: An online development environment for writing, testing, and deploying Solidity smart contracts.
•	Solidity: A programming language for writing smart contracts on the Ethereum blockchain.
•	Infura: A service that provides easy access to the Ethereum and IPFS networks, used here to interact with IPFS and retrieve files via CID.
•	CID (Content Identifier): A unique identifier generated for each file uploaded to IPFS, which users can use to access their files.
________________________________________
Step-by-Step Instructions
Registration and Login
 
 ![image](https://github.com/user-attachments/assets/27cfbcd6-cac0-485c-be6d-3c84ab3a4bcb)
 ![image](https://github.com/user-attachments/assets/1df673e0-313b-4e50-a9d1-9c9ffa6395ea)
 ![image](https://github.com/user-attachments/assets/1cd6ec97-044c-45b8-93fa-7e27b8122bf3)

•	Users begin by registering on the platform with their username, email, phone number, and password.
•	After registering, users can log in to access the main features of the platform.
![image](https://github.com/user-attachments/assets/b6988faf-e558-4acc-acd0-a2488009bfbc)

1. Accessing the Platform and Initial Setup
•	Open the platform on your preferred browser.
•	You will see the landing page with options for Storage Provider (for users offering storage) and Storage Renter (for users needing storage).
![image](https://github.com/user-attachments/assets/c6114e6e-54ec-4b33-9ba7-762dcd93149b)

 3. Registering as a Storage Provider
•	Click on Provide Storage from the main menu or select Storage Provider.
•	You will be directed to a form where you can specify details about the storage space you wish to offer.
•	Fill in fields like Storage Name, Amount of Space (GB), and Price (ETH), then submit the offer.
![image](https://github.com/user-attachments/assets/710d6069-8298-4b53-8cfd-79e113c22c6d)
![image](https://github.com/user-attachments/assets/858a2909-aaba-4f56-9d7c-7f14d2211403)

 
5. Registering as a Storage Renter
•	Select Purchase Storage from the main menu or choose Storage Renter from the landing page.
•	Browse through available listings with details such as provider, available space, and price.
•	Click Select on any listing to initiate the process of renting that storage.
![image](https://github.com/user-attachments/assets/bcb49cdd-c2dd-464a-a017-048370d6b632)
![image](https://github.com/user-attachments/assets/0d2ff749-cb41-4d29-8495-eecf5154041f)

 
 7. Buying Storage with Ethereum Smart Contract
•	Upon selecting a storage offer, a MetaMask prompt will appear to connect your Ethereum wallet and confirm the transaction.
•	After confirming, the transaction will be processed on the Ethereum network, and your rented storage space will be activated.
•	This process is facilitated by a smart contract written in Solidity, which ensures secure, transparent payments.
 ![image](https://github.com/user-attachments/assets/5e926de5-120d-4d72-be27-55ff707e91c4)
![image](https://github.com/user-attachments/assets/868f409f-c894-44b5-bc79-387415f24236)


 
 

9. Uploading Files
•	After a successful transaction, a file upload form will appear.
•	Select a file to upload, and the file will be encrypted, fragmented, and stored across the IPFS network.
•	Once the upload is complete, a CID (Content Identifier) will be generated.
•	The CID is a unique identifier for your file on the IPFS network, which you can use to access or share the file.
 ![image](https://github.com/user-attachments/assets/452fe8a3-6bfe-4bed-8fb9-50363334dc96)
![image](https://github.com/user-attachments/assets/ced67a0f-3369-429a-b300-5bba36b6e9ca)

 
10. Viewing Uploaded Files
•	After uploading, a message will appear on the page confirming that your file has been uploaded successfully with encryption.
•	The CID will be displayed on the screen along with a public gateway link (https://ipfs.io/ipfs/[CID]) where you can view or download the file.
•	The platform uses Infura to connect to IPFS and retrieve files using this CID.
 ![image](https://github.com/user-attachments/assets/97ef256d-b936-4030-a9a0-bae92863b4fc)

________________________________________
Conclusion
This decentralized storage platform provides a secure and flexible solution for users seeking to store files or rent out unused storage without relying on centralized providers. With smart contracts managing payments on Ethereum, MongoDB handling backend data, and Infura providing a seamless connection to IPFS, this platform effectively combines multiple technologies to create a reliable and private storage solution.

