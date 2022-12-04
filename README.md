<p align="center">
  <img src="https://user-images.githubusercontent.com/106992775/205504160-ac08ed5c-f75f-4f78-8cd5-2e26497b9895.svg" align="center" />
  <h1 align="left">Easily track and verify land ownership on the blockchain</h1>
</p>

## Table of Contents
- [Bloktrak](#table-of-contents)
- [Description](#description)
- [Disclaimer](#disclaimer)
- [Contributors](#contributors)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Demo](#demo)
- [How it works, ELI5](#explain-like-im-5---how-it-works)
- [Technical Overview](#technical-overview)
- [Feedback](#feedback)
- [License](#license)


## Description
Land deed registry famously difficult to track in Africa, it's why the courts are filled with property litigation. Multiple registration, fraudulent sales, and suboptimal systems for transfer of land deeds mean the ownership of too many parcels of land is often left to the whims and caprices of a jury of peers.

This is why we've built BlokTrak

Bloktrak is  decentralized blockchain platform to securely register, verify, track and transfer land deeds. Its purpose is to simplify the manual process of property registration in Africa by issuing non-fungible tokens to land owners with each land's survey plan data uniquely stored in the metadata of the nft and stored on the polygon blokchain network.

Tracking land deeds on the blockchain.


## Contributors
Bloktrak is developed by a team of [Ignatius Musonda](https://www.twitter.com/ignatius), [Judith Manyo Ogar](https://www.twitter.com/ignatius), [Ebenezer Jojo Mensah](https://www.twitter.com/jojo), [Stephen Oluwasanmi](https://www.twitter.com/steve) and [Joseph Nwosu](https://www.twitter.com/joseph) for the Polygon Africa Bootcamp 2022 Hackathon.


## Features
- Register land and mint corresponding ERC721 tokens as proof of ownership
- Query blockchain for land deed ownership and survey plan (meta)data.
- Transfer land deeds easily
- Manage land deeds owned by your account
- Put up land deed for sale and manage bids


## Disclaimer
Bloktrak is currently deployed on the Mumbai Polygon testnet, as we're still testing out, breaking and mending a few things. The testnet works just like the mainnet but you'd be using testnet matic to verify your transactions.

Registering a land deed is currently free but would cost you a bit of gas. It's how the blockchain works if you're new to the blockchain. [Here is a link](https://mumbaifaucet.com/) to get some test mumbai matic to register your property. It's completely free! If you still have a problem, [please contact us](https://www.twitter.com/0xdanjuma) to send you some free testnet matic for the registration or to just chat about the project!

We also recommend that you use your desktop browser to access Bloktrak.

## Demo
//insert video demo
https://bloktrak.vercel.app
The video above shows a quick walkthrough on how Bloktrack works

## Explain like I'm 5 - How it works
Five year-olds shouldn't have any business buying land. If you're five and reading this, please get the assistance of a trusted adult. But then, let's give this a shot! If you've ever bought land, it's a pretty stressful process... especially in Africa. Generally very little premliminary survey has been done, or the survey data is outdated and inaccurate. But, to buy a piece of land, this is usually the process:
- Search for, and inspect the land you want to buy;
- Locate the owner of the land;
- Conduct a search at the land authorities to verify ownership of the land;
- Ensure that the previous owner actually has the authentic documents, some of these are usually:
  - Deed of Assignment (there are very many different types of deeds, deeds of lease, deeds of sub-lease, deeds of mortgage, generally called vendor's title documents);
  - Certificate of occupancy
  - A Gazette of Excision
  - etc etc
- Negotiate a payment
- Get your own lawyer to draw up your deed of assignment (pay a 10% fee)
- Congrats! yYou own the land!

This is pretty complicated and a major reason why five-year-olds don't own any lands! This and because they do not usually have a lot of money, but let's stick to the agenda here!

We've designed a better system. **Bloktrak** uses the **blockchain** to register, **track**, and transfer land deeds. It leverages on non-fungible-tokens (NFTs) to store and maintain secure and immutable records of the geographical and legal information of land and land deeds on the blockchain. This information includes
- The land details (survey plan data like longitude and latitude coordinates) and;
- The owners details (the public address of the owner of the land deed).

These digital land deeds can be easily and securely accessed to prove you're the owner of your property. They can also be transferred easily to another owner on the blockchain without the need for complex legal procedures and the risk of double ownership, fraud and other disputes. 

All of the transfer and ownership history is also stored on the blockchain.

Here's how to use Bloktrak:

- Visit https://bloktrak.vercel.app
- Hit the top right button to connect your wallet (we recommend you use a desktop browser for now)
- Switch from the default ethereum network to the Mumbai testnet network [here's how](link-to-how-to) 

You can do a bunch of thing here now;
- Register your land on the blokchain


## Technical overview


### Tech stack
- Solidity
- React.js
- Ethers.js 
- Mongo DB
- Express.js
- Node.js


### How it works


## Feedback
We'd really appreciate any feedback on this, please reach out on [Twitter](https://www.twitter.com/0xDanjuma) 


## License