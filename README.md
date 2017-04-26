# Encrypts / Decrypts with AES192

## USAGE example:
### encrypt
encrypt text "foo" with salt "bar"

    node index.js foo --encrypt --salt "bar"

--> 80a7dd847ac22852b5f83d8145386b94

### decrypt
decrypt hash 80a7dd847ac22852b5f83d8145386b94 using salt "bar"

    node index.js 80a7dd847ac22852b5f83d8145386b94 --decrypt --salt "bar"

--> foo
