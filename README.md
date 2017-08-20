# Encrypts / Decrypts with AES192

## Install
    npm i -g node-crypter

## USAGE example:
### encrypt
encrypt text "foo bar" with salt "bar"

    crypter "foo bar" -e -s "bar"
    

--> a94237ddb77cfe1faface0fe1b9773f3

### decrypt
decrypt hash a94237ddb77cfe1faface0fe1b9773f3 using salt "bar"

    crypter a94237ddb77cfe1faface0fe1b9773f3 -d -s "bar"

--> foo bar
