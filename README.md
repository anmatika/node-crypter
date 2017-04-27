# Encrypts / Decrypts with AES192

## USAGE example:
### encrypt
encrypt text "foo bar" with salt "bar"

    node index.js "foo bar" --encrypt --salt "bar"

--> a94237ddb77cfe1faface0fe1b9773f3

### decrypt
decrypt hash a94237ddb77cfe1faface0fe1b9773f3 using salt "bar"

    node index.js a94237ddb77cfe1faface0fe1b9773f3 --decrypt --salt "bar"

--> foo bar
