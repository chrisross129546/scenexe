

const INITIAL_HANDSHAKE_MESSAGE_IDENTIFIER = 0x11;

// addEventListener("message", function (message) {
//     const data = new Uint8Array(message.data);
//     let length = data.length * data.BYTES_PER_ELEMENT;
//     _0x424e00.packetSizes.push([performance.now() + 0x3e8, length, false]);
//     message = msgpack.decode(data);
//     if (message[0x0] in _0x424e00.codes.recieve) {
//         let id = _0x424e00.codes.recieve[message[0]];
//         _0x424e00.handlers[id](message[1]);
//     }
// });

const test = function (id) {
    _0x424e00[id[0]].q(id[0x1]);
};


const x = function (_0x2b75f9) {
    let _0x4927b7 = "abc".indexOf("com"[0x0]) ** 0x8;
    return _0x2b75f9 % _0x4927b7;
};

const r = function () {
    return Math.random();
};

const j = function (_0x39e05f) {
    return _0x39e05f.reverse();
};
const createByteArray = function (_0xfa184d) {
    let _0x22b2e4 = _0xfa184d >= 0x0 ? _0xfa184d : Math.floor(0x10 * x(0x110) * r());
    let _0x43d1d9 = [];
    let _0x28b438 = _0x22b2e4;
    let _0x2294fc = function (_0x4009ef) {
        _0x28b438 += _0x4009ef;
        _0x43d1d9.push(_0x4009ef);
    };
    for (let _0x435274 = 0x0; _0x435274 < 0xe; _0x435274++) {
        _0x2294fc(Math.floor(0x10 * x(0x110) * r()));
    }
    
    return j([_0x22b2e4, x(_0x28b438)].concat(_0x43d1d9));
};

export const createInitialiserToken = token => [INITIAL_HANDSHAKE_MESSAGE_IDENTIFIER, [...createByteArray(token)]];
