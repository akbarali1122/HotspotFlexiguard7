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
  // Define the regular expression
  var re = /^.{1,9}$/;

  // Test the password against the regular expression
  return re.test(password);
};
// export const ValidPassword = password => {
//   var re =
//     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;

//   return re.test(password);
// };

export const ovpnFile = `client
dev tun
proto tcp
remote 217.61.20.142 443
resolv-retry infinite
nobind
persist-key
persist-tun
remote-cert-tls server
auth SHA512
ignore-unknown-option block-outside-dns
verb 3
<ca>
-----BEGIN CERTIFICATE-----
MIIDSzCCAjOgAwIBAgIUU2vmpq2j3SQAjAd+H2/zqW9R2S0wDQYJKoZIhvcNAQEL
BQAwFjEUMBIGA1UEAwwLRWFzeS1SU0EgQ0EwHhcNMjQwMzEyMDcyNjMyWhcNMzQw
MzEwMDcyNjMyWjAWMRQwEgYDVQQDDAtFYXN5LVJTQSBDQTCCASIwDQYJKoZIhvcN
AQEBBQADggEPADCCAQoCggEBAL6Dk8TwT08NPYA36YWL7hAks8yBWSsDZ0GxDyth
Sv1ZIzYU2MaPlcmB9vFuZzml9eVHD9Hv+pZQLyHYPpmHuLq7wWOX+YoZ389Ypyr1
6NA7ce/o1JxqrTkaD/az+KfrQ/M16yGZUF5WxfXT0h6qx7+LvCkflmet8+4gfj1p
Awil7dJb1lLwLdtdV/DTBQiL7kcGG2hCQUxp3b/+Sv+vLdigUeex5DOJxA7stDF5
pUW22SIubg8dblbRIMnsthzsKM8kUfRIbk0Xf4X4tRGpf6xWQv8YfgBUKzQylwdV
iOlPKSuzSnypWl0TGfnoIZjAtqY7lCu2WUawrNFDWqwY+y8CAwEAAaOBkDCBjTAM
BgNVHRMEBTADAQH/MB0GA1UdDgQWBBRNu/WCBYTs1U3Ynxp1XZ5XsgOAKDBRBgNV
HSMESjBIgBRNu/WCBYTs1U3Ynxp1XZ5XsgOAKKEapBgwFjEUMBIGA1UEAwwLRWFz
eS1SU0EgQ0GCFFNr5qato90kAIwHfh9v86lvUdktMAsGA1UdDwQEAwIBBjANBgkq
hkiG9w0BAQsFAAOCAQEALSzQLH3MXjwYKAQnsov95pk2dyOnVT7e9eVfd1hsTTKR
ESAAQD/Sm4SyMNLhQmLQeNnG8Pm+A5cETDpyay4omhqD0TKV32FhH9Giejmuy6tq
PFNL7NGGqMFKFGotRwk0tML3yRcxlb5QD8GG4B/3b3Ly6bw5Om6qJ1fYLMxgEdOZ
O5VuqwOlvKzcGtGoMqPUHEUs3fduvl/y4Q53uv+MWCETSJl/1/T5KhNB/Goe1OEh
INUwjG7RI6MFpvv+6LiEQ9UxkCxPWfxxehA/KBFcEcn8ycrje7a3JxW3CPVn23Kl
AZJpxvIWWRlrJPtdU17a7sEt6tGSRtlP7uZIQPxxbg==
-----END CERTIFICATE-----
</ca>
<cert>
-----BEGIN CERTIFICATE-----
MIIDXTCCAkWgAwIBAgIRAM5LPPHLBaMOdSSU5g0V/1QwDQYJKoZIhvcNAQELBQAw
FjEUMBIGA1UEAwwLRWFzeS1SU0EgQ0EwHhcNMjQwNzA1MDkzNDQ2WhcNMzQwNzAz
MDkzNDQ2WjAZMRcwFQYDVQQDDA4wMDBfQXBwX3Rlc3RfMTCCASIwDQYJKoZIhvcN
AQEBBQADggEPADCCAQoCggEBAPKwAvwV9Wqvz5Md65LN3A2VMb1rzJuuwAna1BZy
B3ehgfeMyMU4wNpMk8IlEYjgxfDazWqKtENM6A0bVVgBVWIYgMdAqZoAGh2W8k+z
SdW2XayVa2o2bJEmWvpluu5KQArkMM1cAYwL+SqvLRkEOS7TcTqpMt+VQI102J3m
Aofr+AJyyIv2jsfOgTn3eJUS3o5xyYYAUc0TTY5+pd0xnhuosY3rh1anXi3Pt0ac
BFPXpMvNdUET7w+U2pBWSz97PeOtOA6a/GKlQwdtaDNR3f0enxK8VSB+JCoHDtTA
OJc7eWmEVXazVmfQBikhHfeV25bH9L3imY0Dg1tEr7Wxl80CAwEAAaOBojCBnzAJ
BgNVHRMEAjAAMB0GA1UdDgQWBBS728ZgI980fYRKlIBcF6s1KfgbTTBRBgNVHSME
SjBIgBRNu/WCBYTs1U3Ynxp1XZ5XsgOAKKEapBgwFjEUMBIGA1UEAwwLRWFzeS1S
U0EgQ0GCFFNr5qato90kAIwHfh9v86lvUdktMBMGA1UdJQQMMAoGCCsGAQUFBwMC
MAsGA1UdDwQEAwIHgDANBgkqhkiG9w0BAQsFAAOCAQEACA47g0HZRfsOVUh/TJc/
+HCOEeoHWDinMvOzE+8+VZ6beauOpPMJtcE2YQdg6TPlaYjItGwSn5lJzOs0+W99
t8CfyC2KDOyxPablTu390V19zdm83zcKkQeXEvpg/E1ttWfj4js5cQx9VNBOxND8
GM48NPa1MpZoG416qRx23h8KTUgbkt/soMMWijxJNzarSLxg1s5A6x7Ul5/fZtc3
B3odbfTHty+ayFWBrs4k/cctkiViaQoSQFj8UbLnsBpeKdvFBwH2caVLvfI5RnUt
UMr1ntK8MQi8LxbB5LaFu1bB/108cmvo12iBnF/MJGhB00kg7DwsjrPQtFCv4hQX
Ng==
-----END CERTIFICATE-----
</cert>
<key>
-----BEGIN PRIVATE KEY-----
MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDysAL8FfVqr8+T
HeuSzdwNlTG9a8ybrsAJ2tQWcgd3oYH3jMjFOMDaTJPCJRGI4MXw2s1qirRDTOgN
G1VYAVViGIDHQKmaABodlvJPs0nVtl2slWtqNmyRJlr6ZbruSkAK5DDNXAGMC/kq
ry0ZBDku03E6qTLflUCNdNid5gKH6/gCcsiL9o7HzoE593iVEt6OccmGAFHNE02O
fqXdMZ4bqLGN64dWp14tz7dGnART16TLzXVBE+8PlNqQVks/ez3jrTgOmvxipUMH
bWgzUd39Hp8SvFUgfiQqBw7UwDiXO3lphFV2s1Zn0AYpIR33lduWx/S94pmNA4Nb
RK+1sZfNAgMBAAECggEBAKXAs3krIkBorbREVjYhJe+c+6jtLIUUOJNCg2KFJTZ+
9750yFdzaLxwWubZ3H0JUAgt2OiwrWfd6guxpHuEBaYHKEVuk6fb8/pLs1neEUrG
0HnkX8XeQA5vDOpCewbvbYhCzFYmReQ59UdC9+FDMi8aORago19zl/BFYwGNLCNa
Ib50CcvyQZwEuX7ZMQvAY1u9vyEOrGLpHyGgdeRg0FeekNCpSTuZPePUkojjl1qD
UCa3RCWvH37IqH8Zu0mfFxd8bxkhpX/hKYlrxIN/bY606QPvKQrzHmIpvcK/lpkC
6S2jwC5gPahf/AplsCXj7w4IRm5HZjy8esKIDKrf6v0CgYEA+1ejSgvx9JdA0ctp
vh4Os/aASL3eSGN2KYC6OoYpI6bs2pzW9P73BWTIrQq3DjOa3qvzaqolUToyRxb3
0z6DDxqYjNO8TULfE/5yer2FnhjoetC1Io03bsY6vfjH72liCQ14I7vUgpnLCCve
AtQ3W+IvwYS0rjyKIk6NWU7sa2MCgYEA9y9Q0RSjc6Jwc4CK4Xtn++xwbnJp628+
kRwzBWxxJ2dxVQ/H4fSSP88PBaCXvodCqqv6HxrYa0aY1r7W8V7KteTigfB5oevJ
uLkY9D9VaJ4YqoetIu1AMUGM6ZtIcfFNZVpAj5UWJ8QJJFcrp2ZaSi9MqcH2V5c3
o5ffZ9Epjw8CgYEAk2sQnDKrZIF+hE6ho9/vUcCH96JdiOnFeYxGLmNYJ9AVZhfN
wH73FdPKHCyHt62u7WG/cNWA88aFjMq86srkhexcg2UBMfPB8fEw5irY/ySu3rIh
O7XGSJO+CoSriBGwbYzX5WWavEtGGXHZUqF0ItFkn0Wd0AA0KPEX2MUAx+8CgYA9
Qnqy9nxzwgRAe9DvhNgGdVh/5tcdRBqrd+OlKnT4oQhTXm/ZLfW43qYIbP5ud7Mr
/Scl4k9UdtCWGAHJHAb9AVapgWGDoZ4Cq8zla3TNUrEmQi3EhCvuiSJVGujfZEAc
KDvr2bT98fWaDgiBmjoyPHqxb6KPnqhpYNA7OHkmPQKBgQDNWKxPazi2PU/JAC23
Xbl+yB6fig7NkAmgUnNgr3FPwQYGtY69ZhCjGebX55Rfxs2y481yoKleZ3oJyrAe
NHAHE6iLLISPBMMuY10PQDV+KZzOtUxei4xcgj2TxYtCI+QVBjP9Dcu8LbAQYMdu
XPvxNViCoN4mDHl7+LXH11Ylsg==
-----END PRIVATE KEY-----
</key>
<tls-crypt>
-----BEGIN OpenVPN Static key V1-----
3d670277e854e9df5b068085c8e499f3
6cc8924f9317e38b77ccda75da9f7a0a
0165f817911d749cf50ad79ef5e584a9
a2a569beff2d1ac025071013370e5410
7fb82fed53daae908dcacd5f363ce14c
c91d7d87a227c95930b537c26caebf5d
3489bea83c3cf963370fc7117d9a0753
6a6bbdc217671f7277f09ec485ac76ab
146e88092a4d448445b7f039be5c071d
bc2919f07775790c6b32b6c55b01bf56
75e001c7d1a588044109715481e0ae54
6e67a41f000f24bfd822a0741ee86c30
e7dda830435064ad7378ad975b061e3c
cb4796d15168c7ca1117f3469950896e
06cb9ff11d45ef3f474d874c0ac5e260
f3f27d6b8671961bd920daf30d5ea861
-----END OpenVPN Static key V1-----
</tls-crypt>

`;
