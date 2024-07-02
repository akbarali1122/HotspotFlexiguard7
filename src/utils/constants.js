const regEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const baseUrl = 'dasda';
const GOOGLE_API_KEY = '';
const imageUrl = '';

export default {
  regEmail,
  baseUrl,
  GOOGLE_API_KEY,
  imageUrl,
};

export const ValidateEmail = email => {
  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (regex.test(email)) {
    return true;
  } else {
    return false;
  }
};

export const ValidPassword = password => {
  var re =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;

  return re.test(password);
};

export const ovpnFile = `client
dev tun
proto tcp
remote jp6.vpnjantit.com 2501
resolv-retry infinite
nobind
persist-key
persist-tun
remote-cert-tls server
auth SHA512
cipher AES-256-CBC
ignore-unknown-option block-outside-dns
block-outside-dns
verb 3
link-mtu 1603
auth-nocache
tls-client
tls-version-min 1.2
tls-cipher TLS-ECDHE-ECDSA-WITH-AES-128-GCM-SHA256
setenv opt block-outside-dns

<ca>
-----BEGIN CERTIFICATE-----
MIIDSzCCAjOgAwIBAgIUY3LQkVif3sTxu1/jecjyITwnKq4wDQYJKoZIhvcNAQEL
BQAwFjEUMBIGA1UEAwwLRWFzeS1SU0EgQ0EwHhcNMjMwMTE3MDk0MDU2WhcNMzMw
MTE0MDk0MDU2WjAWMRQwEgYDVQQDDAtFYXN5LVJTQSBDQTCCASIwDQYJKoZIhvcN
AQEBBQADggEPADCCAQoCggEBAKRXQdR4htb5MI9ykzFp8RM2ApjymPlTx4IFRQih
6aIhc/hxLf1maDGbPFWBdDFr6YIGG640hVgdMKSF8UUXjj09EDZs1WbkBbgiV/8C
nHzVVkQFjKZDLq7NHAc+cwUJWSecmumZNTdpwXr62GS/gGxWUpiLmeD75MeR5Jev
g+peeNaNmS5C4yzShKBfcHLQBsBdIia0qB3RoJFTF5p37Jmrpnrr4wOUmPQ/4aSX
G1vQCbGkZvYgmEffQIlNSTAfEEJ923YhSojDgJgZe7IMf4CvHja0dw9weRT68e6W
PCPgSsdClhUrRARnbJo5Hh505mxd1tXVvR2ZfEIdbPFKIFsCAwEAAaOBkDCBjTAM
BgNVHRMEBTADAQH/MB0GA1UdDgQWBBTflfE4xMwZWxZfvldsiyrgRAWzKDBRBgNV
HSMESjBIgBTflfE4xMwZWxZfvldsiyrgRAWzKKEapBgwFjEUMBIGA1UEAwwLRWFz
eS1SU0EgQ0GCFGNy0JFYn97E8btf43nI8iE8JyquMAsGA1UdDwQEAwIBBjANBgkq
hkiG9w0BAQsFAAOCAQEAZI3Upxq1TY9tn0mOt8dP0CV0+uc63BKYJ0esI2aHOvkx
YbzcsS6usfPgGLNIYeE0fWP8btY6s/o4Q6LAcV7wTupp4pYKt6x3ceIFtby096nu
yPbhYF0vppnLmaWja5IpfxbSteRa29qrFl+ng9/NfVPxKhrVV/jJBlXFEcv4jhph
aR1Tx2o6GMsZFEFDIaBazs2aXhn2VXu0poWyB1Ll4yTFgS5Fl8YoDNYecgJFBGs7
1h0mYCsh5rh8P1cGw/6kCLscDSuu16CQ59otnQkRYwW7lYJGe4+FvqLg8Xp6fWeL
lgiei0DJMU9AIbuYPxbx8u2uYmXy7VrWH50WRclcBw==
-----END CERTIFICATE-----
</ca>
<cert>
-----BEGIN CERTIFICATE-----
MIIDWTCCAkGgAwIBAgIQc2wbMPDr0MoqW7p+NT6ivjANBgkqhkiG9w0BAQsFADAW
MRQwEgYDVQQDDAtFYXN5LVJTQSBDQTAeFw0yNDA0MjMwOTIwMzhaFw0zNDA0MjEw
OTIwMzhaMBYxFDASBgNVBAMMC21ha2FiYWthMTIzMIIBIjANBgkqhkiG9w0BAQEF
AAOCAQ8AMIIBCgKCAQEAtSw9WOKwKnSwvXPSRg+3+0mkkTqYqggWmoRGkkTLk0R2
AT3ZdraAaFNlX8B0PqjYvZ2i/10HyNzjjof1oXmfX5sRmJTLs0g3EixVPlJhWTo2
+tOZCM5NJkr1PjNDKoHcijzDo9meiMaY7jDzDoL0yQnf2C5mVAfhkye7IlqhMZ/J
Uwe+gZKZdFROWFrazpOfs6WcE+IDVun71LilxltbVdQ6tgKJC6UX4roobfI6T05q
k/UbyN02x8wSege39vq8w+qFDmtn4UiwAiITD15VmvQ8bByaSEWyNssqOkWtH7mS
L7JuZWtQM+6x8KmHDxNNNyqkMfUQ+BWKbA1boUoUMwIDAQABo4GiMIGfMAkGA1Ud
EwQCMAAwHQYDVR0OBBYEFLkXNOSZ3qU/ubDtcVhnORrmKbRFMFEGA1UdIwRKMEiA
FN+V8TjEzBlbFl++V2yLKuBEBbMooRqkGDAWMRQwEgYDVQQDDAtFYXN5LVJTQSBD
QYIUY3LQkVif3sTxu1/jecjyITwnKq4wEwYDVR0lBAwwCgYIKwYBBQUHAwIwCwYD
VR0PBAQDAgeAMA0GCSqGSIb3DQEBCwUAA4IBAQBjQwgucAPDaim1GWxEVJo9lfL8
5hea4S/Q4TFoRSIMG7SufB2FCsUJbmTLvU49Ll6G0KOGfJ/rZdPEgcNElx7DBX/z
jlkJ0Ic9fdXEtk1Z9/h7R7VxgmwaTVOa0LGhBLh1pVGdVMkjd/bZxJk8ioq4EF6a
cBCi5rC1DaxYnmbv0DzxAV04DdQmEv+FWhgtyD/R8reBKgTYp2jDH8w0tkJnOsIR
agIBSwiIs/f8PqgXg5HW1LCn53fPa9gPFe/mN64ur60SqfiF/c3EOjMy2pVUPilS
evWFBrg+PIaaojyYCMGkR4IXpIFO7bZj5K5ijWKMUYBeJ56diFlbLA/LBm75
-----END CERTIFICATE-----
</cert>
<key>
-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC1LD1Y4rAqdLC9
c9JGD7f7SaSROpiqCBaahEaSRMuTRHYBPdl2toBoU2VfwHQ+qNi9naL/XQfI3OOO
h/WheZ9fmxGYlMuzSDcSLFU+UmFZOjb605kIzk0mSvU+M0MqgdyKPMOj2Z6Ixpju
MPMOgvTJCd/YLmZUB+GTJ7siWqExn8lTB76Bkpl0VE5YWtrOk5+zpZwT4gNW6fvU
uKXGW1tV1Dq2AokLpRfiuiht8jpPTmqT9RvI3TbHzBJ6B7f2+rzD6oUOa2fhSLAC
IhMPXlWa9DxsHJpIRbI2yyo6Ra0fuZIvsm5la1Az7rHwqYcPE003KqQx9RD4FYps
DVuhShQzAgMBAAECggEAKqQz+DS6o/N9Gcol5qmScwmdOzVgczyeHVYeyhR5GbtW
TuqAwYko5eUjCgthENJq2Q4+K/54c5VR1d04Of5HPZhg5tm2rAbGN3fJxHZdRUQH
Zrfg4Aq2a9neqPolx95yyvKMVYdF4glkO0O4IWU/OgYh8l7RZNvKAvmp+Ob945DD
uVHyjjirf2PAbYe7fA1ayJWzA62VKs/jPBWUWX1MZ6SXhaAgp+Am7PqgbJybFI0x
W8lcwUFdGaTJGseG7zemzFrWdEBRvLtRO/Oet9PTOsUba2Iywf/2JjhHyBdtdzHS
R3GiEfq/sT4oDbvvHylbXv7Wj5qrvIcAzn820GlPoQKBgQDglpdY53bfA/71X7uf
RCpHfyNfpAlweBm+qOWY7d7kEmYbfVNnkcbH91L6WbNia+K4aSgXIQngau7MXyma
az5st/Qp0IpPsbMyJfe/iReELDt9ld538xpp4nnv+2T91KfNGeMJ50dqCVDFBzZe
EsuyqubE7KWjyUtM0CDCap1V0QKBgQDOgydTKRl1kAdH7AXMXV8XNug+klLPG97t
D4fT87GPQ0fly02FwGxMSGI6QcTdWJIExJrJ09qZxwAdKzRjcAsDQUJwCRs7YtU0
tw7hmWL/dg08GT+1W3J6kFKnoGUU8+IyVcp0csZRNq9dBcv4Urj7UNzujHjP9iJU
OMKatqXWwwKBgQDDrdHOT1X999BT4IZrvQuNYdPjR9xFlw7vVN8/ALo8Q1+dwfNC
gPwOTIqKwE8QiOlwPYcFp+6gDutjO+LWvWwVc62UJTPtPeng3r3er0bDDXsD7+l2
32R7Ly2JD6OtmXReuphbj5xkYhtyn9cZ3gyG7mrE1192tjMaiRiR7CyLkQKBgEZ7
vRBFFstpPRLvG4uE0s+5jcrNZjYJ7Sw8AL/2jMO40vE7Ulo0MsJWcjAwAmEJucym
za3VAOc7ZG6QMHE/7IJP470ZXpIGSX6UfB/DmmZWhG3esD/V1ly+pXdQ5y8fjjRf
05mrEsTlRTUapWM72KbuEnnYt+NCvrTAKqtja3bBAoGBAMVaJ0PNSyW8tnNRUBfT
sdpYo7RROVA4Pbay63MT/b49Taq95LGCHJSFCN0PpRol+sOegC6V9DbvUPw5svaf
A/3LRxki4ZDSdKL8ro+pVpMMdJ4BAkQ46v7aIGcKM00UWXITw0rtU9f/epN4gHIQ
RhBLzkhKibuiEV2RpkSIs4Sm
-----END PRIVATE KEY-----
</key>
<tls-crypt>
-----BEGIN OpenVPN Static key V1-----
6d63f7baf275c1a6ff26c40f421d3bf4
53425c7cee70396282f546c788981741
43cc2720a14c85fe23154de16c363ddf
33789eee5b4ee4345459ec8ae921f592
ea0dcf28e98b1fcfedbabeb31a686e3a
1e1ff2fca89d0577667cf4c8268ad957
a08fd6897ef5deb85a87491211b4cc09
e60603fea05996bfea7b1af7ce5d1f82
1284bb97a6c8a2b6504e5e6f4e9943e3
76ed4fc638ea8b6aae6fac971957f881
0b0a4aca3a9534d29a6e7bd223085212
21ca1ef47f2f1424852ba1d541a227ac
da91f65268b3fda01f70cc563882dc46
d4f1a5b003546d325f13edccef91280b
cd743c56d4eb1d53a7270510969e5941
7135d39b6213f28a7bd88b992fde58ba
-----END OpenVPN Static key V1-----
</tls-crypt>
`