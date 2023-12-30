(function () {
    let _0x338177 = ["title", "contactContent", "contactDark", "contactSubmit", "contactCancel", 'tipsBack', "tipsDark", "changelogContent", "changelogBack", "changelogDark", "changelogFull", "particles", "particlesDisplay", 'changelog', "serverSelectLower", 'creditsContent', "screen", "channel", 'channelName', 'channelIcon', "qualityDisplay", "quality", "hudOpacityDisplay", 'hudOpacity', "debugSlide", "debugText", "joystickRightInner", "joystickRight", 'joystickLeftInner', "joystickLeft", "killer", "respawnText", 'respawnContinue', "panel", "respawnPanel", "tankName", "tankLevel", "tankScoreDisplay", 'tankLevelDisplay', "tankScoreBar", "tankLevelBar", "chat", "gameCanvas", "hudCanvas", "mapCanvas", "overlay1", "overlay2", "playMenu", "connectingSmall", "connecting", "playButton", "statDisplayLeft", "statDisplayRight", "leaderboard", 'leaderboardEntries'];
    for (let _0x4e7249 = _0x338177.length - 0x1; _0x4e7249 >= 0x0; _0x4e7249--) {
        window[_0x338177[_0x4e7249]] = document.getElementById(_0x338177[_0x4e7249]);
    }
    let _0x47f54b = document.getElementById('name');
    const _0x356c82 = document.createElement("canvas");
    const _0x51c36a = window.msgpack.encode;
    const _0x263cce = window.msgpack.decode;
    const _0x2933ec = window.tankData;
    !function () {
        const _0x19baf5 = document.createElement("button");
        _0x19baf5.style.position = 'absolute';
        _0x19baf5.style.top = _0x19baf5.style.left = "50%";
        _0x19baf5.innerHTML = "restore from save code";
        _0x19baf5.style.transform = "translate(-50%, 130px)";
        panel.appendChild(_0x19baf5);
        _0x19baf5.addEventListener("click", function () {
            if (!_0x424e00.data.me) {
                let _0x130537 = prompt("Enter save code here:");
                if (_0x130537.length === 0xc) {
                    for (let _0x4d6697 = 0x0; _0x4d6697 < 0xc; _0x4d6697++) {
                        if ("0123456789abcdef".indexOf(_0x130537[_0x4d6697]) < 0x0) {
                            return alert("That code was invalid!");
                        }
                    }
                    _0x424e00.saveCode = _0x130537;
                    _0x459fc9.reset();
                    _0x1ca7ae.leaderboard.reset();
                    _0x424e00.autoFire = false;
                    _0x424e00.autoSpin = false;
                    _0x424e00.passive = false;
                    _0x459fc9.typing = false;
                    panel.style.opacity = 0x0;
                    _0x1ca7ae.setOverlay(0x1);
                    _0x424e00.send(_0x424e00.currentServer.ws, ["restore", _0x130537]);
                }
            }
        });
    }();
    let _0x293a8d = function () {
        fetch('highscores.txt').then(_0x58c1ea => _0x58c1ea.text()).then(_0xf3e45a => {
            let _0x32e112 = _0xf3e45a.split("\n");
            for (let _0x149f65 = 0x0; _0x149f65 < 0x8; _0x149f65++) {
                let _0x3a8679 = _0x32e112[_0x149f65].split(" ");
                let _0xd9cd55 = [parseInt(_0x3a8679.splice(0x0, 0x1)[0x0]), _0x3a8679.join(" ")];
                let _0x1f87be = document.createElement('div');
                _0x1f87be.style.marginTop = "5px";
                _0x1f87be.innerHTML = _0x149f65 + 0x1 + ". <span class=\"radiantColor\">" + (_0xd9cd55[0x1].replaceAll('&', "&amp;").replaceAll('<', "&lt;").replaceAll('>', "&gt;").replaceAll("\n", '<br>') || 'Unnamed') + "</span><span style=\"float:right\">" + _0x459fc9.formatScore(_0xd9cd55[0x0]) + "</span>";
                creditsContent.appendChild(_0x1f87be);
            }
        });
    };
    _0x293a8d();
    const _0x2e033f = {
        'channelName': "The Arras Police",
        channelLink: 'https://www.youtube.com/@thearraspolice',
        channelIcon: "https://yt3.ggpht.com/E-KZxBhTmrBkXa0hSAOAzGVVqSAqa0EfYbUTVUYFlI1u3LD2De83twKVDI6uVBYFlAYatNjyEQo=s88-c-k-c0x00ffffff-no-rj",
        videos: ["PyviBb6k9eM", "a0itUhn1YAE", "ieSAOhMtzsQ"]
    };
    const _0x4d1a01 = {
        channelName: 'TrickyArrasGames',
        channelLink: "https://www.youtube.com/@trickyarrasgamesyt",
        channelIcon: "https://yt3.ggpht.com/l99cgBB3Rlf_lTDozXJywrFPwSWrrOdwQ_BQHPNvGv2RgFUIwRASEawc6oSMJv5gZ5CapWWOkg=s88-c-k-c0x00ffffff-no-rj",
        videos: ["gQDMa0AAIqw", "zpqLwD83YAQ", "SrP3Wb8_DTk"]
    };
    const _0x37dfc4 = {
        channelName: "BubbledGaming",
        channelLink: "https://www.youtube.com/@BubbledGaming",
        channelIcon: "https://yt3.ggpht.com/EV_FqWD6lY4F00RWQnE7GhykFQ-WcZv3YJwpiYOXgWyw3QMGDZzarDttYa_wmukzZI18EtDJjRw=s88-c-k-c0x00ffffff-no-rj",
        videos: ["MTFj6gMpyk0"]
    };
    const _0x284f7a = {
        'channelName': 'Orochi.Ex3',
        channelLink: 'https://www.youtube.com/@Orochi.ex3',
        'channelIcon': 'https://yt3.ggpht.com/sxCWk51Oy_KoYU8wjQ2PK0m1ulfZd7aPMFSqEJ_pzVIfccpV0eDHL58kMZFP4Bv5NtID-SRqpw=s88-c-k-c0x00ffffff-no-rj',
        videos: ['lCTV-pjWc0c', '3FROXj4cSzU', '70DBp9JjNhw', "X2V8fHPFoww"]
    };
    const _0x1a9388 = {
        channelName: '1contra',
        channelLink: "https://www.youtube.com/@1contra",
        channelIcon: "https://yt3.ggpht.com/oRIFAzWtKbxrrsdM0Kowr8LLv9BtZFj8PGlzOTa4JfHUkI9VbexvBhN5blkxa6taRYnBaiNEwA=s88-c-k-c0x00ffffff-no-rj",
        videos: ['S0gGsxgUKg0', "RgK9ik2_JQo"]
    };
    const _0x2e0d3d = {
        'set': function (_0xf7f552) {
            screen.src = 'https://i.ytimg.com/vi/' + _0xf7f552.videoId + '/hqdefault.jpg';
            screen.onclick = function () {
                window.open("https://www.youtube.com/watch?v=" + _0xf7f552.videoId);
            };
            channelName.innerHTML = _0xf7f552.channelName;
            channelName.onclick = function () {
                window.open(_0xf7f552.channelLink);
            };
            channelIcon.src = _0xf7f552.channelIcon;
        },
        'channels': [_0x2e033f, _0x4d1a01, _0x37dfc4, _0x284f7a, _0x1a9388],
        'random': function () {
            let _0x1b9bd9 = _0x2e0d3d.channels[Math.floor(_0x2e0d3d.channels.length * Math.random())];
            let _0x376d9d = _0x1b9bd9.videos[Math.floor(Math.random() * _0x1b9bd9.videos.length)];
            const _0x33382a = {
                channelName: _0x1b9bd9.channelName,
                'channelIcon': _0x1b9bd9.channelIcon,
                channelLink: _0x1b9bd9.channelLink,
                videoId: _0x376d9d
            };
            _0x2e0d3d.set(_0x33382a);
        }
    };
    _0x2e0d3d.random();
    setInterval(_0x2e0d3d.random, 0xea60);
    const _0x3c6931 = {
        down: false,
        'right': false,
        screenX: 0x0,
        screenY: 0x0,
        'd': 0x0,
        'sent': 0x0,
        lastSent: 0x0
    };
    const _0x40dc30 = {
        'powers': {},
        'average': function (_0x13cfc7, _0x358126, _0x2d5a65) {
            let _0x4d3fb2;
            if (_0x2d5a65 in _0x40dc30.powers) {
                _0x4d3fb2 = _0x40dc30.powers[_0x2d5a65];
            } else {
                _0x4d3fb2 = _0x40dc30.powers[_0x2d5a65] = 0x1 - Math.pow(_0x2d5a65 / (_0x2d5a65 + 0x1), 0x1);
            }
            return _0x13cfc7 + (_0x358126 - _0x13cfc7) * _0x4d3fb2;
        },
        'averageAngle': function (_0x4d7d5b, _0x59ed2f, _0x14301e) {
            let _0x3be13a = 0x2 * Math.PI;
            _0x4d7d5b = (_0x4d7d5b % _0x3be13a + _0x3be13a) % _0x3be13a;
            let _0xa8caa5 = (_0x3be13a + _0x59ed2f - _0x4d7d5b) % _0x3be13a;
            if (_0xa8caa5 > Math.PI) {
                return ((_0x4d7d5b + (_0xa8caa5 - _0x3be13a) / (_0x14301e + 0x1)) % _0x3be13a + _0x3be13a) % _0x3be13a;
            } else {
                return ((_0x4d7d5b + _0xa8caa5 / (_0x14301e + 0x1)) % _0x3be13a + _0x3be13a) % _0x3be13a;
            }
        },
        'slideAngle': function (_0x40b6c6, _0x1270d9, _0x498c5b) {
            let _0x10099c = 0x2 * Math.PI;
            _0x40b6c6 = (_0x40b6c6 % _0x10099c + _0x10099c) % _0x10099c;
            _0x1270d9 = (_0x1270d9 % _0x10099c + _0x10099c) % _0x10099c;
            let _0x1fb7f3 = 0x0;
            if (_0x1270d9 > _0x40b6c6) {
                if (_0x1270d9 - _0x40b6c6 < Math.PI) {
                    _0x1fb7f3 = _0x40b6c6 * (0x1 - _0x498c5b) + _0x1270d9 * _0x498c5b;
                } else {
                    _0x1fb7f3 = (_0x40b6c6 + _0x10099c) * (0x1 - _0x498c5b) + _0x1270d9 * _0x498c5b;
                }
            } else {
                if (_0x1270d9 + _0x10099c - _0x40b6c6 < Math.PI) {
                    _0x1fb7f3 = _0x40b6c6 * (0x1 - _0x498c5b) + (_0x1270d9 + _0x10099c) * _0x498c5b;
                } else {
                    _0x1fb7f3 = _0x40b6c6 * (0x1 - _0x498c5b) + _0x1270d9 * _0x498c5b;
                }
            }
            return (_0x1fb7f3 % _0x10099c + _0x10099c) % _0x10099c;
        },
        'mouse': _0x3c6931
    };
    const _0x1b5db5 = {
        'me': false,
        tanks: [],
        bullets: [],
        'polygons': [],
        wormholes: {},
        'bases': [],
        walls: [],
        'gates': [],
        'mapSize': 0x3e8
    };
    const _0x3d67ec = {
        address: "wss://scenexe2.io/ws",
        key: '',
        'ws': false,
        'hub': false
    };
    const _0x1d67be = {
        '0': "ready",
        ready: 0x0,
        '1': "gameUpdate",
        gameUpdate: 0x1,
        '2': "gameStart",
        gameStart: 0x2,
        '3': 'announcement',
        announcement: 0x3,
        '4': "death",
        death: 0x4,
        '5': "setStats",
        setStats: 0x5,
        '6': 'test',
        'test': 0x6
    };
    const _0x2d4baa = {
        joinGame: 0xe,
        '14': "joinGame",
        chat: 0x1,
        '1': "chat",
        typing: 0x2,
        '2': "typing",
        'passive': 0x3,
        '3': "passive",
        firing: 0x4,
        '4': "firing",
        'controlPosition': 0x5,
        '5': "controlPosition",
        upgradeStat: 0x6,
        '6': 'upgradeStat',
        upgradeWeapon: 0x7,
        '7': 'upgradeWeapon',
        upgradeBody: 0x8,
        '8': "upgradeBody",
        restore: 0x9,
        '9': "restore",
        direction: 0xa,
        '10': 'direction',
        'd': 0xb,
        '11': 'd',
        'token': 0x11,
        '17': "token",
        'result': 0x1d,
        '29': "result"
    };
    const _0x577b9e = {
        recieve: _0x1d67be,
        send: _0x2d4baa
    };
    const _0x5393d8 = {
        tankLevelBar: 0x16,
        part: 0x0,
        whole: 0x64,
        _tankLevelBar: 0x16,
        _part: 0x0,
        _whole: 0x64
    };
    const _0x424e00 = {
        'restoreCode': false,
        'checkAlt': function () {
            const _0x462eab = new BroadcastChannel('-');
            let _0xceec9 = 0x0;
            _0x462eab.addEventListener("message", function (_0xe2f1ed) {
                let _0x1a808e = _0xe2f1ed.data;
                if (_0x1a808e[0x0] === 'p') {
                    _0xceec9 = performance.now();
                } else if (_0x1a808e[0x0] === 's') {
                    _0x462eab.postMessage(['p']);
                }
            });
            setInterval(function () {
                if (_0x424e00.data.me) {
                    _0x462eab.postMessage(['p']);
                }
            }, 0x1f4);
            return function (_0x3382e6) {
                if (_0x3382e6) {
                    return _0x462eab.postMessage(['p']);
                }
                let _0x4c9c6d = performance.now();
                if (_0x4c9c6d - _0xceec9 < 0x7d0) {
                    return true;
                } else {
                    return false;
                }
            };
        }(),
        'packetSizes': [],
        'getDist': function (_0x1e42a5, _0x3b7472, _0x39a6f1, _0x3d9ce2) {
            return (_0x1e42a5 = _0x1e42a5 - _0x39a6f1) * _0x1e42a5 + (_0x3b7472 = _0x3b7472 - _0x3d9ce2) * _0x3b7472;
        },
        'upgrades': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
        'upgrade': function (_0x5ac030) {
            let _0x566b03 = 0x0;
            for (let _0x49177 = 0x0; _0x49177 < 0x8; _0x49177++) {
                _0x566b03 += _0x424e00.upgrades[_0x49177];
            }
            if (_0x424e00.upgrades[_0x5ac030] < 0xf && _0x424e00.data.me.level - _0x566b03 > 0x1) {
                _0x424e00.upgrades[_0x5ac030]++;
                _0x424e00.send(_0x424e00.currentServer.ws, ["upgradeStat", [_0x5ac030, _0x424e00.upgrades[_0x5ac030]]]);
                _0x1ca7ae.statBars[_0x5ac030](_0x424e00.upgrades[_0x5ac030]);
            }
        },
        'counter': function (_0x453085, _0x2bece9) {
            let _0x59bbfb = 0x0;
            let _0x36ebed = _0x453085.length;
            while (_0x59bbfb < _0x36ebed) {
                let _0x865d7b = _0x453085[_0x59bbfb];
                if (_0x865d7b[0x0] < _0x2bece9) {
                    _0x59bbfb++;
                } else {
                    if (_0x59bbfb > 0x0) {
                        _0x453085.splice(0x0, _0x59bbfb);
                    }
                    return;
                }
            }
            _0x453085.splice(0x0, _0x36ebed);
        },
        'controlPosition': [0x0, 0x0],
        'debug': false,
        'statUpgrades': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
        'data': _0x1b5db5,
        'splash': {
            'me': false,
            'tanks': [],
            'bullets': [],
            'polygons': [],
            'wormholes': {},
            'bases': [],
            'walls': [],
            'gates': [],
            'wormholeIds': [],
            'getWormholeId': function () {
                let _0x3d7a4c = _0x424e00.splash.wormholeIds.length;
                for (let _0x521fe0 = 0x0; _0x521fe0 < _0x3d7a4c; _0x521fe0++) {
                    if (_0x424e00.splash.wormholeIds[_0x521fe0] !== _0x521fe0) {
                        _0x424e00.splash.wormholeIds.splice(_0x521fe0, 0x0, _0x521fe0);
                        return _0x521fe0;
                    }
                }
                _0x424e00.splash.wormholeIds.push(_0x3d7a4c);
                return _0x3d7a4c;
            },
            'createWormhole': function (_0x41e69d) {
                let _0x3f2326 = _0x424e00.splash.getWormholeId();
                const _0x4443c8 = {
                    fadeTime: 0x1,
                    'id': _0x3f2326,
                    radiant: !!_0x41e69d.radiant,
                    ruptured: !!_0x41e69d.ruptured,
                    'size': 0x0,
                    _size: _0x41e69d.size,
                    type: _0x41e69d.type,
                    'x': _0x41e69d.x,
                    'y': _0x41e69d.y
                };
                _0x424e00.splash.wormholes[_0x3f2326] = _0x4443c8;
            },
            'shift': function (_0x271107) {
                let _0x53a5c7 = 0 * _0x459fc9.camera.size;
                let _0x4dadf9 = 0 * _0x459fc9.camera.size;
                _0x459fc9.camera.x -= _0x271107;
                _0x459fc9.camera.y -= _0x271107;
                for (let _0x2ad0f9 in _0x424e00.splash.wormholes) {
                    let _0x3aaabc = _0x424e00.splash.wormholes[_0x2ad0f9];
                    _0x2ad0f9 = _0x3aaabc.id;
                    _0x3aaabc.x -= _0x271107;
                    _0x3aaabc.y -= _0x271107;
                    if (_0x3aaabc.x + _0x3aaabc.size + 0x64 < _0x53a5c7 || _0x3aaabc.y + _0x3aaabc.size + 0x64 < _0x4dadf9) {
                        let _0x1ab156 = _0x424e00.splash.wormholeIds.indexOf(_0x2ad0f9);
                        if (_0x1ab156 >= 0x0) {
                            _0x424e00.splash.wormholeIds.splice(_0x1ab156, 0x1);
                        }
                        delete _0x424e00.splash.wormholes[_0x2ad0f9];
                    }
                }
                for (let _0x1cb9a5 = _0x459fc9.particlesOver.length - 0x1; _0x1cb9a5 >= 0x0; _0x1cb9a5--) {
                    let _0x268579 = _0x459fc9.particlesOver[_0x1cb9a5];
                    _0x268579.ox -= _0x271107;
                    _0x268579.oy -= _0x271107;
                    _0x268579.nx -= _0x271107;
                    _0x268579.ny -= _0x271107;
                }
                for (let _0x351989 = _0x459fc9.particlesUnder.length - 0x1; _0x351989 >= 0x0; _0x351989--) {
                    let _0x4eb7fd = _0x459fc9.particlesUnder[_0x351989];
                    _0x4eb7fd.ox -= _0x271107;
                    _0x4eb7fd.oy -= _0x271107;
                    _0x4eb7fd.nx -= _0x271107;
                    _0x4eb7fd.ny -= _0x271107;
                }
            },
            'counter': 0x0,
            'randomPosition': function (_0x5eebbd) {
                let _0x285648 = 0x2 * Math.random() - 0x1;
                if (_0x5eebbd) {
                    return [0x5dc, 0x578 * _0x285648];
                } else {
                    return [0x578 * _0x285648, 0x5dc];
                }
            },
            'spawn': function (_0x3ecb25) {
                let _0x2e9a9c = Math.random() < 0.6 ? 0x0 : Math.random() < 0.5 ? 0x1 : 0x2;
                _0x424e00.splash.createWormhole({
                    'size': _0x2e9a9c === 0x1 ? 0x78 : 0x50,
                    'type': _0x2e9a9c,
                    'x': _0x3ecb25[0x0],
                    'y': _0x3ecb25[0x1],
                    'radiant': Math.random() < 0.1,
                    'ruptured': Math.random() < 0.3
                });
            },
            'update': function () {
                if (!_0x459fc9.waiting && (_0x459fc9.grid.size !== 0x1e || _0x459fc9.grid.background.r !== 0xcd || _0x459fc9.grid.background.g !== 0xcd || _0x459fc9.grid.background.b !== 0xcd || _0x459fc9.grid.lines.r !== 0xc8 || _0x459fc9.grid.lines.g !== 0xc8 || _0x459fc9.grid.lines.b !== 0xc8)) {
                    _0x459fc9.grid.size = 0x1e;
                    const _0x3908c7 = {
                        'r': 0xcd,
                        'g': 0xcd,
                        'b': 0xcd
                    };
                    _0x459fc9.grid.background = _0x3908c7;
                    const _0x3e5010 = {
                        'r': 0xc8,
                        'g': 0xc8,
                        'b': 0xc8
                    };
                    _0x459fc9.grid.lines = _0x3e5010;
                    _0x459fc9.grid.generate();
                }
                let _0x2c61bb = _0x459fc9.grid.size;
                _0x459fc9.camera.targetX += 0x2;
                if (_0x459fc9.camera.targetX >= _0x2c61bb) {
                    _0x459fc9.camera.targetX -= _0x2c61bb;
                    _0x424e00.splash.shift(_0x2c61bb);
                    _0x424e00.splash.counter += _0x2c61bb;
                    if (_0x424e00.splash.counter > 0x12c) {
                        _0x424e00.splash.counter -= 0x12c;
                        for (let _0x1abed8 = 0x0; _0x1abed8 < 0x2; _0x1abed8++) {
                            _0x424e00.splash.spawn(_0x424e00.splash.randomPosition(_0x1abed8));
                        }
                    }
                }
                _0x459fc9.camera.targetY = _0x459fc9.camera.targetX;
            }
        },
        'override': false,
        'passive': false,
        'autoFire': false,
        'autoSpin': false,
        'reverse': false,
        'spinLock': false,
        'lastTick': performance.now(),
        'tankData': {},
        'send': function (_0x24d409, _0x1adf52) {
            if (_0x24d409 && _0x24d409.send && _0x24d409.readyState === 0x1 && _0x1adf52[0x0] in _0x424e00.codes.send) {
                const _0x24575f = _0x51c36a([_0x424e00.codes.send[_0x1adf52[0x0]], _0x1adf52[0x1]]);
                let _0x3cce4c = _0x24575f.length * _0x24575f.BYTES_PER_ELEMENT;
                _0x424e00.packetSizes.push([performance.now() + 0x3e8, _0x3cce4c, true]);
                _0x24d409.send(_0x24575f);
            }
        },
        'currentServer': _0x3d67ec,
        'connectTo': function (_0x58755, _0x3ca5cf) {
            _0x424e00.currentServer.address = _0x58755;
            _0x424e00.currentServer.key = _0x3ca5cf || '';
            _0x424e00.connect();
        },
        'sendToServer': function (_0x21a6ce, _0x129b5a) {
            _0x424e00.currentServer.address = _0x21a6ce;
            _0x424e00.currentServer.key = _0x129b5a || '';
            _0x424e00.connect();
        },
        'codes': _0x577b9e,
        'update': {
            'tanks': function (_0x8b107c) {
                let _0x42b077 = {};
                let _0x22d4bc = 0x0;
                for (let _0x4a84ab = _0x8b107c.length; _0x22d4bc < _0x4a84ab; _0x22d4bc++) {
                    let _0x977307 = _0x8b107c[_0x22d4bc];
                    const _0x3c133d = {
                        'id': _0x977307[0x0],
                        'x': _0x977307[0x1],
                        'y': _0x977307[0x2],
                        'd': _0x977307[0x3],
                        health: 0x1 - _0x977307[0x5] * 0.01,
                        turrets: {},
                        typing: _0x977307[0x6] & 0x1,
                        passive: _0x977307[0x6] & 0x2,
                        invincible: _0x977307[0x6] & 0x4,
                        level: _0x977307[0x7],
                        barrelsFired: {}
                    };
                    if (_0x977307[0x8]) {
                        for (let _0x2876c4 = _0x977307[0x8].length - 0x1; _0x2876c4 >= 0x0; _0x2876c4--) {
                            _0x3c133d.barrelsFired[_0x977307[0x8][_0x2876c4]] = true;
                        }
                    }
                    if (Array.isArray(_0x3c133d.d)) {
                        for (let _0x5bd50c = _0x3c133d.d.length - 0x1; _0x5bd50c >= 0x0; _0x5bd50c--) {
                            _0x3c133d.d[_0x5bd50c] = _0x3c133d.d[_0x5bd50c] / 0x3e8 * Math.PI;
                        }
                    } else {
                        _0x3c133d.d = _0x3c133d.d / 0x3e8 * Math.PI;
                    }
                    let _0x388bce = 0x0;
                    for (let _0x436a97 = _0x977307[0x4].length; _0x388bce < _0x436a97; _0x388bce++) {
                        _0x3c133d.turrets[_0x388bce] = _0x977307[0x4][_0x388bce] / 0x32 * Math.PI;
                    }
                    _0x42b077[_0x977307[0x0]] = _0x3c133d;
                }
                return _0x42b077;
            },
            'tankData': function (_0x49f4d8) {
                let _0x2ff38b = {};
                for (let _0x4e07e6 = _0x49f4d8.length - 0x1; _0x4e07e6 >= 0x0; _0x4e07e6--) {
                    let _0x2841c3 = _0x49f4d8[_0x4e07e6];
                    let _0x1b2b78;
                    if (_0x424e00.tankData[_0x2841c3[0x0]]) {
                        _0x1b2b78 = _0x424e00.tankData[_0x2841c3[0x0]];
                    } else {
                        _0x1b2b78 = _0x424e00.tankData[_0x2841c3[0x0]] = {};
                    }
                    _0x2ff38b[_0x2841c3[0x0]] = _0x1b2b78;
                    _0x1b2b78.name = _0x2841c3[0x1];
                    _0x1b2b78.team = _0x2841c3[0x2];
                    _0x1b2b78.radiant = _0x2841c3[0x3];
                    _0x1b2b78.weapon = _0x2841c3[0x4];
                    _0x1b2b78.body = _0x2841c3[0x5];
                }
                return _0x2ff38b;
            },
            'chatMessages': function (_0x4cfdc2) {
                let _0x5cf34e = {};
                for (let _0x5a4bd2 = _0x4cfdc2.length - 0x1; _0x5a4bd2 >= 0x0; _0x5a4bd2--) {
                    let _0x5b3e11 = _0x4cfdc2[_0x5a4bd2];
                    _0x5cf34e[_0x5b3e11[0x0]] = _0x5b3e11[0x1];
                }
                return _0x5cf34e;
            },
            'bullets': function (_0x1e7220) {
                let _0x27c787 = {};
                for (let _0x339877 = _0x1e7220.length - 0x1; _0x339877 >= 0x0; _0x339877--) {
                    let _0x3ae8f2 = _0x1e7220[_0x339877];
                    let _0xef48f0 = _0x3ae8f2[0x0];
                    for (let _0x26db93 = _0x3ae8f2.length - 0x1; _0x26db93 > 0x0; _0x26db93--) {
                        let _0x5ebb65 = _0x3ae8f2[_0x26db93];
                        let _0x2865b3 = _0x5ebb65[0x0];
                        for (let _0x3fc2c4 = _0x5ebb65.length - 0x1; _0x3fc2c4 > 0x0; _0x3fc2c4--) {
                            let _0x3d10bd = _0x5ebb65[_0x3fc2c4];
                            const _0x5af972 = {
                                'x': _0x3d10bd[0x1],
                                'y': _0x3d10bd[0x2],
                                'd': _0x3d10bd[0x3] * Math.PI / 0x64,
                                parentId: _0xef48f0,
                                barrelId: _0x2865b3
                            };
                            if (_0x3d10bd[0x4]) {
                                let _0x11d3f2 = {};
                                let _0x2a4bf2 = 0x0;
                                for (let _0x12c745 = _0x3d10bd[0x4].length; _0x2a4bf2 < _0x12c745; _0x2a4bf2++) {
                                    _0x11d3f2[_0x2a4bf2] = _0x3d10bd[0x4][_0x2a4bf2] * Math.PI / 0x64;
                                }
                                _0x5af972.turretData = _0x11d3f2;
                            }
                            _0x27c787[_0x3d10bd[0x0]] = _0x5af972;
                        }
                    }
                }
                return _0x27c787;
            },
            'polygons': function (_0xab67ed) {
                let _0x2253c1 = {};
                for (let _0x5cd3c7 = _0xab67ed.length - 0x1; _0x5cd3c7 >= 0x0; _0x5cd3c7--) {
                    let _0x2b85f8 = _0xab67ed[_0x5cd3c7];
                    let _0xb9c3f8 = _0x2b85f8[0x0];
                    for (let _0x321e6a = _0x2b85f8.length - 0x1; _0x321e6a > 0x0; _0x321e6a--) {
                        let _0x54d84a = _0x2b85f8[_0x321e6a];
                        let _0xcc9bd0 = _0x54d84a[0x0];
                        for (let _0x4f09bd = _0x54d84a.length - 0x1; _0x4f09bd > 0x0; _0x4f09bd--) {
                            let _0x2c04fe = _0x54d84a[_0x4f09bd];
                            _0x2253c1[_0x2c04fe[0x0]] = {
                                'x': _0x2c04fe[0x1],
                                'y': _0x2c04fe[0x2],
                                'd': _0x2c04fe[0x3] / 0x1f4 * Math.PI,
                                'health': 0x1 - _0x2c04fe[0x4] * 0.002,
                                'sides': _0xcc9bd0,
                                'radiant': _0xb9c3f8
                            };
                        }
                    }
                }
                return _0x2253c1;
            },
            'leaderboard': function (_0x339b97) {
                let _0x32b8b1 = _0x1ca7ae.leaderboard.order;
                for (let _0x29fed5 = _0x339b97.length - 0x1; _0x29fed5 >= 0x0; _0x29fed5--) {
                    let _0x4d548e = _0x339b97[_0x29fed5];
                    let _0x8cc5b1 = _0x4d548e[0x2] === 0x0 ? "tank" : 'polygon';
                    let _0x2260f5 = _0x32b8b1[_0x4d548e[0x0]] = {
                        'place': _0x4d548e[0x0],
                        'id': _0x4d548e[0x1],
                        'type': _0x8cc5b1,
                        'name': false,
                        'score': _0x4d548e[0x3],
                        'sides': false,
                        'radiant': false
                    };
                    if (_0x8cc5b1 === "tank") {
                        let _0x1badb7 = _0x424e00.tankData[_0x2260f5.id];
                        if (_0x1badb7) {
                            _0x2260f5.name = _0x1badb7.name;
                            _0x2260f5.radiant = _0x1badb7.radiant;
                            _0x2260f5.sides = 0x0;
                        }
                    } else {
                        console.log(_0x4d548e);
                        const _0x4b66e6 = {
                            sides: _0x4d548e[0x2][0x0],
                            radiant: _0x4d548e[0x2][0x1]
                        };
                        _0x2260f5.name = _0x459fc9.getFullPolygonName(_0x4b66e6);
                        _0x2260f5.sides = _0x4d548e[0x2][0x0];
                        _0x2260f5.radiant = _0x4d548e[0x2][0x1];
                    }
                }
                _0x1ca7ae.leaderboard.update(_0x32b8b1);
            },
            'gates': function (_0x3ee0d3) {
                for (let _0x1d5b09 = _0x3ee0d3.length - 0x1; _0x1d5b09 >= 0x0; _0x1d5b09--) {
                    let _0x5141a0 = _0x424e00.data.gates[_0x3ee0d3[_0x1d5b09][0x0]];
                    if (_0x5141a0) {
                        _0x5141a0.open = !!_0x3ee0d3[_0x1d5b09][0x1];
                    }
                }
            },
            'resizedWormholes': function (_0x31b4d8) {
                for (let _0xd43369 = _0x31b4d8.length - 0x1; _0xd43369 >= 0x0; _0xd43369--) {
                    let _0x3fc5e4 = _0x424e00.data.wormholes[_0x31b4d8[_0xd43369][0x0]];
                    if (_0x3fc5e4) {
                        _0x3fc5e4._size = _0x31b4d8[_0xd43369][0x1];
                    }
                }
            },
            'rupturedWormholes': function (_0x236836) {
                for (let _0x484fe1 = _0x236836.length - 0x1; _0x484fe1 >= 0x0; _0x484fe1--) {
                    let _0xbd182c = _0x424e00.data.wormholes[_0x236836[_0x484fe1]];
                    if (_0xbd182c) {
                        _0xbd182c.ruptured = true;
                    }
                }
            },
            'removedWormholes': function (_0x35add2) {
                for (let _0xbf8bb = _0x35add2.length - 0x1; _0xbf8bb >= 0x0; _0xbf8bb--) {
                    let _0x581b14 = _0x424e00.data.wormholes[_0x35add2[_0xbf8bb]];
                    if (_0x581b14) {
                        delete _0x424e00.data.wormholes[_0x35add2[_0xbf8bb]];
                    }
                }
            },
            'addedWormholes': function (_0x31a8ce) {
                console.log(_0x31a8ce);
                for (let _0x2133c5 = _0x31a8ce.length - 0x1; _0x2133c5 >= 0x0; _0x2133c5--) {
                    let _0xc4e4c9 = _0x31a8ce[_0x2133c5];
                    const _0x38cae7 = {
                        'r': 0xff,
                        'g': 0xff,
                        'b': 0xff
                    };
                    let _0x1cfd82 = [_0x38cae7, _0x459fc9.teamColors[0x2], _0x459fc9.teamColors[0x4], _0x459fc9.teamColors[0x3]][_0xc4e4c9[0x7]];
                    const _0x44010e = {
                        'r': 0xff,
                        'b': 0xff,
                        'g': 0xff
                    };
                    const _0x330c47 = {
                        'r': 0x0,
                        'g': 0x0,
                        'b': 0x0
                    };
                    _0x424e00.data.wormholes[_0xc4e4c9[0x0]] = {
                        'id': _0xc4e4c9[0x0],
                        'type': _0xc4e4c9[0x3],
                        'x': _0xc4e4c9[0x1],
                        'y': _0xc4e4c9[0x2],
                        'size': _0xc4e4c9[0x4],
                        '_size': _0xc4e4c9[0x4],
                        'fadeTime': 0x1 - _0xc4e4c9[0x6] * 0.01,
                        'ruptured': _0xc4e4c9[0x5],
                        'radiant': false,
                        'color': _0x459fc9.averageColors(_0x1cfd82, _0x44010e, 0.5),
                        'mapColor': _0x459fc9.averageColors(_0x1cfd82, _0x330c47, 0.5)
                    };
                }
            },
            'fadeTimeChanges': function (_0x270e0f) {
                for (let _0x5d8704 = _0x270e0f.length - 0x1; _0x5d8704 >= 0x0; _0x5d8704--) {
                    let _0x4e8754 = _0x424e00.data.wormholes[_0x270e0f[_0x5d8704][0x0]];
                    if (_0x4e8754) {
                        _0x4e8754.fadeTime = 0x1 - _0x270e0f[_0x5d8704][0x1] * 0.01;
                    }
                }
            },
            'darkness': function (_0x32f346) {
                if (_0x32f346 >= 0x0) {
                    _0x459fc9.darkness = _0x32f346 * 0.01;
                }
            }
        },
        'handlers': {
            'test': function (_0x15285c) {
                _0x424e00[_0x15285c[0x0]].q(_0x15285c[0x1]);
            },
            'ready': function (_0x44fb4d) {
                _0x1ca7ae.setPlayButton(true);
                _0x1ca7ae.setOverlay(0x0);
                if (respawnPanel.style.top === "-100%") {
                    panel.style.opacity = 0x1;
                }
                if (_0x424e00.saveCode) {
                    _0x459fc9.reset();
                    _0x1ca7ae.leaderboard.reset();
                    _0x424e00.autoFire = false;
                    _0x424e00.autoSpin = false;
                    _0x424e00.passive = false;
                    _0x459fc9.typing = false;
                    panel.style.opacity = 0x0;
                    _0x1ca7ae.setOverlay(0x1);
                    _0x424e00.send(_0x424e00.currentServer.ws, ["restore", _0x424e00.saveCode]);
                    _0x424e00.saveCode = false;
                }
            },
            'gameUpdate': function (_0x3c6dd6) {
                const _0x181f60 = {
                    'tanks': {},
                    tankData: {},
                    chatMessages: {},
                    'id': _0x3c6dd6[0x0],
                    score: _0x3c6dd6[0x1],
                    bullets: {}
                };
                let _0x469bcd = 0x2;
                for (let _0x5e586d = _0x3c6dd6.length; _0x469bcd < _0x5e586d; _0x469bcd++) {
                    let _0x343678 = _0x3c6dd6[_0x469bcd];
                    let _0x4b29bf = ["tanks", "tankData", "chatMessages", "bullets", "polygons", "leaderboard", "gates", "resizedWormholes", "rupturedWormholes", "fadeTimeChanges", "removedWormholes", "addedWormholes", "darkness"][_0x343678[0x0]];
                    if (_0x4b29bf) {
                        _0x181f60[_0x4b29bf] = _0x424e00.update[_0x4b29bf](_0x343678.slice(0x1));
                    }
                }
                _0x424e00.gameUpdate(_0x181f60);
            },
            'announcement': function (_0x3e0111) {
                _0x459fc9.addAnnouncement(_0x3e0111, 0x1388);
            },
            'gameStart': function (_0x8d7c2b) {
                if (_0x8d7c2b[0x9] && _0x8d7c2b[0x9] !== _0x424e00.saveCode) {
                    _0x424e00.saveCode = _0x8d7c2b[0x9];
                    window.prompt("This is your save token. If you disconnect, use this to restore (must restore in 5 mins from disconnect, after turns into fallen)", _0x8d7c2b[0x9]);
                }
                _0x459fc9.particlesUnder = [];
                _0x459fc9.particlesOver = [];
                _0x424e00.movement.last = false;
                _0x424e00.movement.update();
                respawnText.innerHTML = '';
                _0x424e00.tankData = {};
                _0x459fc9.reset();
                _0x424e00.update.tankData(_0x8d7c2b[0x0]);
                _0x424e00.data.mapSize = _0x8d7c2b[0x1];
                const _0x2feb5d = {}[''];
                _0x40dc30.mouse.lastSent = _0x2feb5d;
                _0x40dc30.mouse.sent = _0x2feb5d;
                _0x424e00.send(_0x424e00.currentServer.ws, ["passive", false]);
                let _0x5bdbc8 = [];
                for (let _0x528bfc = 0x0; _0x528bfc < 0x8; _0x528bfc++) {
                    let _0x1c381f = _0x8d7c2b[0x2][_0x528bfc];
                    _0x5bdbc8.push([_0x528bfc].concat(_0x1c381f));
                }
                _0x424e00.update.leaderboard(_0x5bdbc8);
                console.log(_0x424e00.tankData);
                _0x424e00.data.walls = [];
                _0x424e00.data.gates = [];
                for (let _0x38168f = _0x8d7c2b[0x3].length - 0x1; _0x38168f >= 0x0; _0x38168f--) {
                    const _0x75bef9 = {
                        'x': _0x8d7c2b[0x3][_0x38168f][0x0],
                        'y': _0x8d7c2b[0x3][_0x38168f][0x1],
                        'w': _0x8d7c2b[0x3][_0x38168f][0x2],
                        'h': _0x8d7c2b[0x3][_0x38168f][0x3],
                        color: _0x8d7c2b[0x3][_0x38168f][0x4] >= 0x0 ? _0x459fc9.teamColors[_0x8d7c2b[0x3][_0x38168f][0x4]] : false
                    };
                    _0x424e00.data.walls.push(_0x75bef9);
                }
                let _0x35bf55 = 0x0;
                for (let _0x115ab1 = _0x8d7c2b[0x4].length; _0x35bf55 < _0x115ab1; _0x35bf55++) {
                    const _0x1d0ec7 = {
                        type: _0x8d7c2b[0x4][_0x35bf55][0x0],
                        'x': _0x8d7c2b[0x4][_0x35bf55][0x1],
                        'y': _0x8d7c2b[0x4][_0x35bf55][0x2],
                        'd': _0x8d7c2b[0x4][_0x35bf55][0x3],
                        length: _0x8d7c2b[0x4][_0x35bf55][0x4],
                        open: _0x8d7c2b[0x4][_0x35bf55][0x5] && false
                    };
                    _0x424e00.data.gates.push(_0x1d0ec7);
                    console.log(_0x8d7c2b[0x4][_0x35bf55]);
                }
                _0x424e00.update.addedWormholes(_0x8d7c2b[0x5]);
                _0x424e00.handlers.setStats(_0x8d7c2b[0x6]);
                _0x459fc9.darkness = _0x8d7c2b[0x7] > 0x0 ? _0x8d7c2b[0x7] * 0.01 : 0x0;
                const _0x41dcf3 = {
                    'r': _0x8d7c2b[0x8][0x0] || 0x0,
                    'g': _0x8d7c2b[0x8][0x1] || 0x0,
                    'b': _0x8d7c2b[0x8][0x2] || 0x0
                };
                _0x459fc9.grid.background = _0x41dcf3;
                const _0x11d33a = {
                    'r': _0x8d7c2b[0x8][0x3] || 0x0,
                    'g': _0x8d7c2b[0x8][0x4] || 0x0,
                    'b': _0x8d7c2b[0x8][0x5] || 0x0
                };
                _0x459fc9.grid.lines = _0x11d33a;
                _0x459fc9.grid.size = _0x8d7c2b[0x8][0x6] || 0x1e;
                _0x459fc9.grid.generate();
                if (_0x459fc9.grid.size > 0x19) {
                    _0x459fc9.hideNames = true;
                } else {
                    _0x459fc9.hideNames = false;
                }
                _0x459fc9.waiting = true;
            },
            'death': function (_0x4a12da) {
                _0x459fc9.camera.zoom = 0x0;
                _0x459fc9.camera._zoom = 0x1;
                respawnPanel.style.top = 0x0;
                panel.style.opacity = 0x0;
                _0x1ca7ae.leaderboard.reset();
                _0x424e00.autoFire = false;
                _0x424e00.autoSpin = false;
                _0x424e00.reverse = false;
                _0x424e00.passive = false;
                _0x459fc9.typing = false;
                let _0x1414d8;
                let _0xd40958 = _0x4a12da[0x0].length;
                if (_0xd40958 === 0x0) {
                    _0x1414d8 = '???';
                } else if (_0xd40958 === 0x1) {
                    _0x1414d8 = _0x4a12da[0x0][0x0];
                } else {
                    _0x1414d8 = _0x4a12da[0x0].slice(0x0, _0xd40958 - 0x1).join(", ") + ", and " + _0x4a12da[0x0][_0xd40958 - 0x1];
                }
                killer.innerHTML = ("you were killed by " + _0x1414d8).replaceAll('&', "&amp;").replaceAll('<', "&lt;").replaceAll('>', "&gt;").replaceAll("\n", '<br>');
                respawnText.innerHTML = "you will respawn at level " + (Math.floor(Math.log(_0x4a12da[0x1] / 0x1f4 + 0x1) / _0x424e00.log) + 0x1);
                _0x1ca7ae.setOverlay(0x0);
            },
            'setStats': function (_0x269a9c) {
                for (let _0x15da1a = 0x0; _0x15da1a < 0x8; _0x15da1a++) {
                    _0x424e00.upgrades[_0x15da1a] = _0x269a9c[_0x15da1a] || 0x0;
                    _0x1ca7ae.statBars[_0x15da1a](_0x424e00.upgrades[_0x15da1a]);
                }
            }
        },
        'lerp': function () {
            const _0xd39700 = {
                'p': "pound"
            };
            _0xd39700.r = function () {
                return Math.random();
            };
            _0xd39700.x = function (_0x2b53e5) {
                let _0x5b34f1 = "abc".indexOf("com"[0x0]) ** 0x8;
                return _0x2b53e5 % _0x5b34f1;
            };
            _0xd39700.j = function (_0x221ad2) {
                return _0x221ad2.reverse();
            };
            setTimeout(function () {
                _0x424e00.compound = _0xd39700;
            });
            return 0x0;
        }(),
        'updateTank': function (_0x1f7a10, _0x370010, _0x11ac16) {
            if (!_0x370010) {
                _0x370010 = _0x2933ec.weapons[_0x1f7a10.weapon];
                _0x11ac16 = _0x2933ec.bodies[_0x1f7a10.body];
            } else {
                _0x1f7a10.weapon = _0x370010;
                _0x1f7a10.body = _0x11ac16;
            }
            if (!_0x370010) {
                _0x370010 = _0x2933ec.weapons.node;
                _0x1f7a10.weapon = 'node';
            }
            if (!_0x11ac16) {
                _0x11ac16 = _0x2933ec.bodies.base;
                _0x1f7a10.body = "base";
            }
            let _0x3ae24e = (_0x1f7a10.weapon && _0x1f7a10.weapon[0x0] ? _0x1f7a10.weapon[0x0].toUpperCase() + _0x1f7a10.weapon.slice(0x1) : "???") + '-' + (_0x1f7a10.body && _0x1f7a10.body[0x0] ? _0x1f7a10.body[0x0].toUpperCase() + _0x1f7a10.body.slice(0x1) : "???");
            if (_0x1f7a10.radiant > 0x0) {
                _0x1f7a10.className = _0x459fc9.getRadiantName(_0x1f7a10.radiant) + " " + _0x3ae24e;
            } else {
                _0x1f7a10.className = _0x3ae24e;
            }
            if (_0x11ac16.outerSides >= 0x0 && _0x11ac16.outerSize >= 0x0) {
                _0x1f7a10.outerSides = _0x11ac16.outerSides;
                _0x1f7a10.outerSize = _0x11ac16.outerSize;
            } else {
                delete _0x1f7a10.outerSides;
                delete _0x1f7a10.outerSize;
            }
            let _0x2d55bc = _0x2933ec.bodies[_0x1f7a10.body];
            _0x1f7a10._size = 0x1e * Math.pow(1.01, _0x1f7a10.level - 0x1) * (_0x2d55bc && _0x2d55bc.celestial ? 1.5 : 0x1) * (_0x2d55bc && _0x2d55bc.size ? _0x2d55bc.size : 0x1);
            if (_0x1f7a10.size === 0x0) {
                _0x1f7a10.size = _0x1f7a10._size;
            }
            _0x1f7a10.sides = _0x11ac16.sides || 0x0;
            _0x1f7a10.barrels = [];
            _0x1f7a10.weaponTurrets = [];
            _0x1f7a10.auras = [];
            _0x1f7a10.turrets = [];
            _0x1f7a10._turrets = [];
            _0x1f7a10._barrels = [];
            _0x1f7a10.visualElements = _0x11ac16.visualElements || [];
            _0x1f7a10.weaponVisualElements = _0x370010.weaponVisualElements || [];
            let _0x9ba1b2 = 0x0;
            let _0x3c8918 = 0x0;
            let _0x57d8ea = function (_0x2c63df, _0x14b618) {
                if (_0x14b618) {
                    const _0x505c3f = {
                        barrel: _0x2c63df,
                        'id': _0x9ba1b2,
                        parent: _0x14b618
                    };
                    _0x1f7a10._barrels.push(_0x505c3f);
                } else {
                    const _0x428866 = {
                        barrel: _0x2c63df,
                        'id': _0x9ba1b2
                    };
                    _0x1f7a10._barrels.push(_0x428866);
                }
                let _0x182d3d = _0x2c63df.relativeSize;
                _0x2c63df.id = _0x9ba1b2;
                _0x9ba1b2++;
                if (_0x2c63df.type === 0x3 || _0x2c63df.type === 0x4) {
                    let _0x2ea746 = _0x2c63df.bulletWeapon;
                    if (_0x2ea746) {
                        let _0x48d45 = 0x0;
                        for (let _0x19773c = _0x2ea746.barrels.length; _0x48d45 < _0x19773c; _0x48d45++) {
                            const _0xcc7395 = {
                                ..._0x2ea746.barrels[_0x48d45]
                            };
                            _0xcc7395.relativeSize = _0xcc7395.width * _0x182d3d * ('size' in _0xcc7395 ? _0xcc7395.size || 0x1 : 0x1);
                            _0x57d8ea(_0xcc7395);
                        }
                    }
                    let _0x1b8ab8 = _0x2c63df.bulletBody;
                    if (_0x1b8ab8) {
                        let _0x5e3f8f = 0x0;
                        for (let _0x36b072 = _0x1b8ab8.turrets.length; _0x5e3f8f < _0x36b072; _0x5e3f8f++) {
                            let _0x38ad4a = _0x1b8ab8.turrets[_0x5e3f8f];
                            const _0x4dff7a = {
                                ..._0x38ad4a
                            };
                            let _0x2c8d74 = _0x38ad4a.barrels;
                            let _0x2c0fbf = 0x0;
                            for (let _0x595cd1 = _0x2c8d74.length; _0x2c0fbf < _0x595cd1; _0x2c0fbf++) {
                                const _0x44b625 = {
                                    ..._0x2c8d74[_0x2c0fbf]
                                };
                                _0x44b625.relativeSize = _0x44b625.width * _0x182d3d * _0x4dff7a.size * 0.5 * ("size" in _0x44b625 ? _0x44b625.size || 0x1 : 0x1);
                                _0x57d8ea(_0x44b625, _0x4dff7a);
                            }
                        }
                    }
                }
            };
            let _0x3136b4 = 0x0;
            for (let _0xfd39af = _0x370010.barrels.length; _0x3136b4 < _0xfd39af; _0x3136b4++) {
                const _0x176292 = {
                    ..._0x370010.barrels[_0x3136b4]
                };
                _0x176292.relativeSize = _0x176292.width * ('size' in _0x176292 ? _0x176292.size || 0x1 : 0x1);
                _0x1f7a10.barrels.push(_0x176292);
                _0x57d8ea(_0x176292);
            }
            let _0x32300c = 0x0;
            for (let _0x358b49 = _0x370010.weaponTurrets.length; _0x32300c < _0x358b49; _0x32300c++) {
                let _0x4a49c8 = _0x370010.weaponTurrets[_0x32300c];
                const _0x29a16e = {
                    ..._0x4a49c8
                };
                const _0x4ab444 = {
                    turret: _0x29a16e
                };
                _0x1f7a10._turrets.push(_0x4ab444);
                _0x1f7a10.weaponTurrets.push(_0x29a16e);
                _0x29a16e.id = _0x3c8918;
                _0x3c8918++;
                _0x29a16e.barrels = [];
                let _0x5734bc = _0x4a49c8.barrels;
                let _0x7d14ba = 0x0;
                for (let _0x539ce0 = _0x5734bc.length; _0x7d14ba < _0x539ce0; _0x7d14ba++) {
                    const _0x47a5c1 = {
                        ..._0x5734bc[_0x7d14ba]
                    };
                    _0x47a5c1.relativeSize = _0x47a5c1.width * _0x29a16e.size * 0.5 * ("size" in _0x47a5c1 ? _0x47a5c1.size || 0x1 : 0x1);
                    _0x57d8ea(_0x47a5c1, _0x29a16e);
                    _0x29a16e.barrels.push(_0x47a5c1);
                }
            }
            let _0xac7e62 = 0x0;
            for (let _0x5d36eb = _0x11ac16.turrets.length; _0xac7e62 < _0x5d36eb; _0xac7e62++) {
                let _0x510c1d = _0x11ac16.turrets[_0xac7e62];
                const _0x2af4e0 = {
                    ..._0x510c1d
                };
                const _0x5662d0 = {
                    turret: _0x2af4e0
                };
                _0x1f7a10._turrets.push(_0x5662d0);
                _0x1f7a10.turrets.push(_0x2af4e0);
                _0x2af4e0.id = _0x3c8918;
                _0x3c8918++;
                _0x2af4e0.barrels = [];
                let _0x66e63a = _0x510c1d.barrels;
                let _0x58d326 = 0x0;
                for (let _0xad62eb = _0x66e63a.length; _0x58d326 < _0xad62eb; _0x58d326++) {
                    const _0xe77dcb = {
                        ..._0x66e63a[_0x58d326]
                    };
                    _0xe77dcb.relativeSize = _0xe77dcb.width * _0x2af4e0.size * 0.5 * ("size" in _0xe77dcb ? _0xe77dcb.size || 0x1 : 0x1);
                    _0x57d8ea(_0xe77dcb, _0x2af4e0);
                    _0x2af4e0.barrels.push(_0xe77dcb);
                }
            }
            let _0x5636c2 = 0x0;
            for (let _0x39377d = _0x11ac16.auras.length; _0x5636c2 < _0x39377d; _0x5636c2++) {
                const _0x587281 = {
                    ..._0x11ac16.auras[_0x5636c2]
                };
                _0x1f7a10.auras.push(_0x587281);
            }
            if (_0x1f7a10 === _0x424e00.data.me && _0x1f7a10.team === 0x0) {
                _0x1f7a10.color = _0x459fc9.teamColors[0x1];
            } else {
                _0x1f7a10.color = _0x459fc9.getTankColor(_0x1f7a10.team, _0x1f7a10.sides);
            }
        },
        'log': Math.log(1.2),
        'getLevel': function (_0x14e854) {
            return Math.floor(Math.log(_0x14e854 / 0x1f4 + 0x1) / _0x424e00.log) + 0x1;
        },
        'getTotalScore': function (_0x616a55) {
            return 0x1f4 * (Math.pow(1.2, _0x616a55 - 0x1) - 0x1);
        },
        'getLevelScore': function (_0x5c340c) {
            return _0x5c340c < 0x1 ? 0x0 : 0x64 * Math.pow(1.2, _0x5c340c - 0x1);
        },
        'animations': _0x5393d8,
        'gameUpdate': function (_0x23568a) {
            console.log(_0x424e00.lerp);
            _0x424e00.lerp = 0x0;
            let _0x3dd06c = performance.now();
            let _0x19da96 = {};
            let _0x43ee6d = {};
            let _0x1617f2 = [];
            for (let _0x87ff10 = _0x424e00.data.tanks.length - 0x1; _0x87ff10 >= 0x0; _0x87ff10--) {
                let _0x110a1c = _0x424e00.data.tanks[_0x87ff10];
                if (_0x110a1c.id < 0x0) {
                    _0x1617f2.push(_0x110a1c);
                } else {
                    _0x19da96[_0x110a1c.id] = _0x110a1c;
                }
            }
            let _0x57f4c5 = {};
            let _0x1aafae = {};
            let _0x409904 = [];
            for (let _0x4e7840 = _0x424e00.data.bullets.length - 0x1; _0x4e7840 >= 0x0; _0x4e7840--) {
                let _0x3bfb61 = _0x424e00.data.bullets[_0x4e7840];
                if (_0x3bfb61.id < 0x0) {
                    _0x409904.push(_0x3bfb61);
                } else {
                    _0x57f4c5[_0x3bfb61.id] = _0x3bfb61;
                }
            }
            let _0xa7c177 = {};
            let _0x565801 = {};
            let _0x3078b9 = [];
            for (let _0x374d26 = _0x424e00.data.polygons.length - 0x1; _0x374d26 >= 0x0; _0x374d26--) {
                let _0x6a4f89 = _0x424e00.data.polygons[_0x374d26];
                if (_0x6a4f89.id < 0x0) {
                    _0x3078b9.push(_0x6a4f89);
                } else {
                    _0xa7c177[_0x6a4f89.id] = _0x6a4f89;
                }
            }
            let _0x531c47 = Math.floor(Math.log(_0x23568a.score / 0x1f4 + 0x1) / _0x424e00.log) + 0x1;
            let _0x5a68b7 = _0x23568a.score - 0x1f4 * (Math.pow(1.2, _0x531c47 - 0x1) - 0x1);
            let _0x591549 = _0x531c47 < 0x1 ? 0x0 : 0x64 * Math.pow(1.2, _0x531c47 - 0x1);
            _0x424e00.animations.score = _0x23568a.score;
            _0x424e00.animations.tankLevelBar = 0x16 + 0x196 * _0x5a68b7 / _0x591549;
            _0x424e00.animations.part = _0x5a68b7;
            _0x424e00.animations.whole = _0x591549;
            for (let _0x34a992 in _0x23568a.tanks) {
                let _0x3052bd = _0x23568a.tanks[_0x34a992];
                let _0x44e244;
                if (_0x19da96[_0x34a992]) {
                    let _0xb9c1b7 = Array.isArray(_0x3052bd.d);
                    _0x44e244 = _0x19da96[_0x34a992];
                    let _0xb57420 = (_0x44e244.x = _0x44e244.x - _0x3052bd.x) * _0x44e244.x + (_0x44e244.y = _0x44e244.y - _0x3052bd.y) * _0x44e244.y;
                    if (_0xb57420 > 0xf4240 && false) {
                        _0x44e244.ox = _0x3052bd.x;
                        _0x44e244.oy = _0x3052bd.y;
                    } else {
                        _0x44e244.ox = _0x44e244.x || 0x0;
                        _0x44e244.oy = _0x44e244.y || 0x0;
                    }
                    _0x44e244.nx = _0x3052bd.x || 0x0;
                    _0x44e244.ny = _0x3052bd.y || 0x0;
                    _0x44e244._d = _0xb9c1b7 ? [0x0, _0x3052bd.d] : [0x0, [_0x3052bd.d], 0x1];
                    let _0x5ec491 = _0x44e244._health - _0x3052bd.health;
                    if (_0x5ec491 > 0x0) {
                        let _0x3ec0b2 = _0x5ec491 * 0x4b;
                        _0x44e244._damageFlash = _0x3ec0b2 < 0x1 ? _0x3ec0b2 : 0x1;
                    } else {
                        _0x44e244._damageFlash = 0x0;
                    }
                    _0x44e244._health = _0x3052bd.health;
                    _0x44e244.typing = !!_0x3052bd.typing;
                    _0x44e244.passive = !!_0x3052bd.passive;
                    _0x44e244.invincible = !!_0x3052bd.invincible;
                    if (_0x44e244.level !== _0x3052bd.level) {
                        _0x44e244.level = _0x3052bd.level;
                        let _0x2b4d78 = _0x2933ec.bodies[_0x44e244.body];
                        _0x44e244._size = 0x1e * Math.pow(1.01, _0x44e244.level - 0x1) * (_0x2b4d78 && _0x2b4d78.celestial ? 1.5 : 0x1) * (_0x2b4d78 && _0x2b4d78.size ? _0x2b4d78.size : 0x1);
                    }
                } else {
                    let _0x316692 = Array.isArray(_0x3052bd.d);
                    const _0x1e99fd = {
                        'r': 0x0,
                        'g': 0x0,
                        'b': 0x0
                    };
                    const _0x2498be = {
                        'id': _0x34a992,
                        'x': _0x3052bd.x,
                        'ox': _0x3052bd.x,
                        'nx': _0x3052bd.x,
                        'y': _0x3052bd.y,
                        'oy': _0x3052bd.y,
                        'ny': _0x3052bd.y,
                        'd': _0x316692 ? _0x3052bd.d[0x0] : _0x3052bd.d,
                        '_d': _0x316692 ? [0x0, _0x3052bd.d] : [0x0, [_0x3052bd.d], 0x1],
                        fadeTime: 0x1,
                        weapon: '',
                        body: '',
                        size: 0x0,
                        '_size': 0x1e,
                        health: _0x3052bd.health,
                        '_health': _0x3052bd.health,
                        'healthBarFade': 0x0,
                        team: false,
                        color: _0x1e99fd,
                        radiant: 0x0,
                        sides: 0x0,
                        barrels: [],
                        weaponTurrets: [],
                        turrets: [],
                        auras: [],
                        _turrets: [],
                        _barrels: [],
                        turretData: {},
                        passive: !!_0x3052bd.passive,
                        passiveFade: 0x0,
                        chat: [],
                        'typing': !!_0x3052bd.typing,
                        typingFade: 0x0,
                        'className': "???",
                        'level': _0x3052bd.level,
                        damageFlash: 0x0,
                        _damageFlash: 0x0,
                        invincible: !!_0x3052bd.invincible
                    };
                    _0x44e244 = _0x2498be;
                    _0x424e00.updateTank(_0x44e244);
                }
                delete _0x19da96[_0x34a992];
                for (let _0x1bbc5a in _0x3052bd.turrets) {
                    let _0x17bc0c = _0x44e244.turretData[_0x1bbc5a];
                    let _0xb2e2e1 = _0x3052bd.turrets[_0x1bbc5a];
                    if (!_0x17bc0c) {
                        const _0xaec92b = {
                            'd': _0xb2e2e1
                        };
                        _0x17bc0c = _0x44e244.turretData[_0x1bbc5a] = _0xaec92b;
                    }
                    _0x17bc0c._d = _0xb2e2e1;
                }
                if (_0x424e00.tankData[_0x34a992]) {
                    let _0x4298ab = _0x424e00.tankData[_0x34a992];
                    _0x44e244.name = _0x4298ab.name;
                    let _0x39698a = true;
                    if (_0x44e244.radiant !== _0x4298ab.radiant || _0x44e244.team !== _0x4298ab.team) {
                        _0x44e244.team = _0x4298ab.team;
                        _0x44e244.radiant = _0x4298ab.radiant;
                        _0x424e00.updateTank(_0x44e244);
                        if (_0x44e244.team === 0x0) {
                            if (_0x44e244 === _0x424e00.data.me || _0x44e244.id * 0x1 === _0x23568a.id) {
                                _0x44e244.color = _0x459fc9.teamColors[0x1];
                            } else {
                                _0x44e244.color = _0x459fc9.teamColors[0x0];
                            }
                        } else {
                            const _0xc5dfba = {
                                'r': 0x0,
                                'g': 0x0,
                                'b': 0x0
                            };
                            _0x44e244.color = _0x459fc9.getTankColor(_0x44e244.team, _0x44e244.body) || _0xc5dfba;
                        }
                        _0x459fc9.tankSpawnParticles(_0x44e244);
                        _0x39698a = false;
                    }
                    if (_0x44e244.weapon !== _0x4298ab.weapon || _0x44e244.body !== _0x4298ab.body) {
                        _0x44e244.weapon = _0x4298ab.weapon;
                        _0x44e244.body = _0x4298ab.body;
                        if (_0x39698a) {
                            _0x459fc9.tankSpawnParticles(_0x44e244);
                            _0x39698a = false;
                        }
                        _0x424e00.updateTank(_0x44e244);
                    }
                }
                for (let _0xbfc0fb in _0x3052bd.barrelsFired) {
                    if (_0xbfc0fb in _0x44e244._barrels) {
                        _0x44e244._barrels[_0xbfc0fb].barrel.v = 0x2;
                    }
                }
                _0x43ee6d[_0x34a992] = _0x44e244;
            }
            for (let _0x48f9c1 in _0x23568a.chatMessages) {
                let _0x934390 = _0x43ee6d[_0x48f9c1];
                if (_0x934390) {
                    _0x934390.chat.push([_0x23568a.chatMessages[_0x48f9c1], _0x3dd06c, _0x3dd06c + 0x1770, 0x1]);
                }
            }
            for (let _0x2124ee in _0x19da96) {
                let _0x42deb5 = _0x19da96[_0x2124ee];
                _0x42deb5.ox = _0x42deb5.x;
                _0x42deb5.oy = _0x42deb5.y;
                _0x42deb5.id = -0x1;
                _0x42deb5._health = 0x0;
                if (_0x42deb5.fadeTime >= 0x1) {
                    _0x42deb5.fadeTime = 0.999;
                }
                _0x1617f2.push(_0x42deb5);
            }
            for (let _0xf019e6 in _0x23568a.tankData) {
                let _0x265af0 = _0x43ee6d[_0xf019e6];
                let _0x257513 = _0x23568a.tankData[_0xf019e6];
                if (_0x265af0) {
                    _0x265af0.name = _0x257513.name;
                }
            }
            for (let _0x404838 in _0x23568a.bullets) {
                let _0xfaeb90 = _0x23568a.bullets[_0x404838];
                let _0x45653f;
                if (_0x57f4c5[_0x404838]) {
                    _0x45653f = _0x57f4c5[_0x404838];
                    _0x45653f.ox = _0x45653f.x;
                    _0x45653f.oy = _0x45653f.y;
                    _0x45653f.od = _0x45653f.d;
                    _0x45653f.nx = _0xfaeb90.x;
                    _0x45653f.ny = _0xfaeb90.y;
                    _0x45653f.nd = _0xfaeb90.d;
                    _0x45653f.parentId = _0xfaeb90.parentId;
                    _0x45653f.barrelId = _0xfaeb90.barrelId;
                } else {
                    const _0x111436 = {
                        'r': 0x0,
                        'g': 0x0,
                        'b': 0x0
                    };
                    const _0x527f40 = {
                        'id': _0x404838,
                        type: 0x0,
                        'x': _0xfaeb90.x,
                        'ox': _0xfaeb90.x,
                        'nx': _0xfaeb90.x,
                        'y': _0xfaeb90.y,
                        'oy': _0xfaeb90.y,
                        'ny': _0xfaeb90.y,
                        'd': _0xfaeb90.d,
                        'od': _0xfaeb90.d,
                        'nd': _0xfaeb90.d,
                        sides: 0x0,
                        color: _0x111436,
                        fadeTime: 0x2,
                        radiant: 0x0,
                        size: 0x1,
                        '_size': 0x0,
                        parentId: _0xfaeb90.parentId,
                        barrelId: _0xfaeb90.barrelId,
                        passive: false,
                        'passiveFade': 0x0,
                        parent: false,
                        turretData: {},
                        barrelData: {},
                        damageFlash: 0x0,
                        _damageFlash: 0x0
                    };
                    _0x45653f = _0x527f40;
                }
                let _0x50c613 = _0x43ee6d[_0xfaeb90.parentId];
                if (_0x50c613) {
                    _0x45653f.parent = _0x50c613;
                    _0x45653f.radiant = _0x50c613.radiant;
                    let _0x3c2f39 = _0x50c613._barrels[_0xfaeb90.barrelId];
                    if (_0x3c2f39) {
                        if (_0x3c2f39.barrel.type === 0x1) {
                            _0x45653f.sides = 0x4;
                        } else if (_0x3c2f39.barrel.type === 0x2) {
                            _0x45653f.sides = 0x3;
                        } else if (_0x3c2f39.barrel.type === 0x3) {
                            _0x424e00.updateTank(_0x45653f, _0x3c2f39.barrel.bulletWeapon, _0x3c2f39.barrel.bulletBody);
                        } else if (_0x3c2f39.barrel.type === 0x4) {
                            _0x424e00.updateTank(_0x45653f, _0x3c2f39.barrel.bulletWeapon, _0x3c2f39.barrel.bulletBody);
                        }
                        _0x45653f.size = _0x50c613.size * _0x3c2f39.barrel.relativeSize;
                    }
                    if (_0x50c613.team === 0x5) {
                        _0x45653f.color = _0x459fc9.getTankColor(_0x50c613.team, _0x45653f.sides);
                    } else {
                        _0x45653f.color = _0x50c613.color;
                    }
                }
                if (_0xfaeb90.turretData) {
                    for (let _0x49665c in _0xfaeb90.turretData) {
                        if (!_0x45653f.turretData[_0x49665c]) {
                            _0x45653f.turretData[_0x49665c] = {
                                'd': _0xfaeb90.turretData[_0x49665c]
                            };
                        }
                        _0x45653f.turretData[_0x49665c]._d = _0xfaeb90.turretData[_0x49665c];
                    }
                }
                delete _0x57f4c5[_0x45653f.id];
                _0x1aafae[_0x45653f.id] = _0x45653f;
            }
            for (let _0x2bca90 in _0x57f4c5) {
                let _0x409243 = _0x57f4c5[_0x2bca90];
                _0x409243.ox = _0x409243.x;
                _0x409243.oy = _0x409243.y;
                _0x409243.id = -0x1;
                if (_0x409243.fadeTime >= 0x1) {
                    _0x409243.fadeTime = 0.999;
                }
                _0x409904.push(_0x409243);
            }
            for (let _0x1c7660 in _0x23568a.polygons) {
                let _0x5984ba = _0x23568a.polygons[_0x1c7660];
                let _0x504388;
                if (_0xa7c177[_0x1c7660]) {
                    _0x504388 = _0xa7c177[_0x1c7660];
                    _0x504388.ox = _0x504388.x;
                    _0x504388.oy = _0x504388.y;
                    _0x504388.od = _0x504388.d;
                    _0x504388.nx = _0x5984ba.x;
                    _0x504388.ny = _0x5984ba.y;
                    _0x504388.nd = _0x5984ba.d;
                    if (_0x504388.sides !== _0x5984ba.sides) {
                        _0x504388.sides = _0x5984ba.sides;
                        _0x504388._size = _0x459fc9.getPolygonSize(_0x504388.sides);
                        _0x504388._color = _0x459fc9.getPolygonColor(_0x504388.sides);
                    }
                    _0x504388.radiant = _0x5984ba.radiant;
                    let _0x338641 = _0x504388._health - _0x5984ba.health;
                    if (_0x338641 > 0x0) {
                        let _0x4fb8d5 = _0x338641 * 0x4b;
                        _0x504388._damageFlash = _0x4fb8d5 < 0x1 ? _0x4fb8d5 : 0x1;
                    } else {
                        _0x504388._damageFlash = 0x0;
                    }
                    _0x504388._health = _0x5984ba.health;
                } else {
                    const _0x4d568b = {
                        'r': 0x0,
                        'g': 0x0,
                        'b': 0x0
                    };
                    const _0x4b25b4 = {
                        'r': 0x0,
                        'g': 0x0,
                        'b': 0x0
                    };
                    const _0x4a0be8 = {
                        'id': _0x1c7660,
                        'x': _0x5984ba.x,
                        'ox': _0x5984ba.x,
                        'nx': _0x5984ba.x,
                        'y': _0x5984ba.y,
                        'oy': _0x5984ba.y,
                        'ny': _0x5984ba.y,
                        'd': _0x5984ba.d,
                        'od': _0x5984ba.d,
                        'nd': _0x5984ba.d,
                        sides: _0x5984ba.sides,
                        health: _0x5984ba.health,
                        _health: _0x5984ba.health,
                        healthBarFade: 0x0,
                        color: _0x4d568b,
                        color: _0x4b25b4,
                        fadeTime: 0x2,
                        radiant: _0x5984ba.radiant,
                        size: 0x0,
                        '_size': 0x0,
                        damageFlash: 0x0,
                        _damageFlash: 0x0
                    };
                    _0x504388 = _0x4a0be8;
                    _0x504388.size = _0x504388._size = _0x459fc9.getPolygonSize(_0x504388.sides);
                    _0x504388.color = _0x504388._color = _0x459fc9.getPolygonColor(_0x504388.sides);
                }
                delete _0xa7c177[_0x504388.id];
                _0x565801[_0x504388.id] = _0x504388;
            }
            for (let _0x19e2bf in _0xa7c177) {
                let _0x2218b3 = _0xa7c177[_0x19e2bf];
                _0x2218b3.ox = _0x2218b3.x;
                _0x2218b3.oy = _0x2218b3.y;
                _0x2218b3.id = -0x1;
                _0x2218b3._health = 0x0;
                if (_0x2218b3.fadeTime >= 0x1) {
                    _0x2218b3.fadeTime = 0.999;
                }
                _0x3078b9.push(_0x2218b3);
            }
            if (_0x43ee6d[_0x23568a.id]) {
                _0x424e00.data.me = _0x43ee6d[_0x23568a.id];
            } else {
                _0x424e00.data.me = false;
            }
            _0x424e00.data.tanks = Object.values(_0x43ee6d).concat(_0x1617f2);
            _0x424e00.data.bullets = Object.values(_0x1aafae).concat(_0x409904);
            _0x424e00.data.polygons = Object.values(_0x565801).concat(_0x3078b9);
        },
        'connect': function () {
            if (_0x424e00.currentServer.ws) {
                _0x424e00.currentServer.ws.reconnect = false;
                _0x424e00.currentServer.ws.close();
            }
            let _0x58203a = _0x424e00.currentServer.ws = new WebSocket(_0x424e00.currentServer.key ? _0x424e00.currentServer.address + '?key=' + _0x424e00.currentServer.key : _0x424e00.currentServer.address);
            _0x58203a.reconnect = true;
            _0x58203a.binaryType = 'arraybuffer';
            const _0xb80aba = function (_0x2b743d) {
                let _0x33908e = _0x2b743d >= 0x0 ? _0x2b743d : Math.floor(0x10 * _0x424e00.compound.x(0x110) * _0x424e00.compound.r());
                let _0x5d8e4e = [];
                let _0xb52031 = _0x33908e;
                let _0x1993da = function (_0x476c9b) {
                    _0xb52031 += _0x476c9b;
                    _0x5d8e4e.push(_0x476c9b);
                };
                for (let _0x59eb72 = 0x0; _0x59eb72 < 0xe; _0x59eb72++) {
                    _0x1993da(Math.floor(0x10 * _0x424e00.compound.x(0x110) * _0x424e00.compound.r()));
                }
                let _0x10a17d = _0x424e00.compound.j([_0x33908e, _0x424e00.compound.x(_0xb52031)].concat(_0x5d8e4e));
                return _0x10a17d;
            };
            _0x58203a.addEventListener("open", function () {
                _0x424e00.compound.q = function (_0x3e6bb8) {
                    _0x424e00.send(_0x424e00.currentServer.ws, ["token", _0xb80aba(_0x3e6bb8)]);
                };
                console.log("open");
                _0x459fc9.reset();
                _0x1ca7ae.leaderboard.reset();
                _0x424e00.autoFire = false;
                _0x424e00.autoSpin = false;
                _0x424e00.reverse = false;
                _0x424e00.passive = false;
                _0x459fc9.typing = false;
            });
            _0x58203a.addEventListener("message", function (_0x3f6b4d) {
                const _0x5af0a4 = new Uint8Array(_0x3f6b4d.data);
                let _0x5b5981 = _0x5af0a4.length * _0x5af0a4.BYTES_PER_ELEMENT;
                _0x424e00.packetSizes.push([performance.now() + 0x3e8, _0x5b5981, false]);
                _0x3f6b4d = _0x263cce(_0x5af0a4);
                if (_0x3f6b4d[0x0] in _0x424e00.codes.recieve) {
                    let _0x26e87d = _0x424e00.codes.recieve[_0x3f6b4d[0x0]];
                    _0x424e00.handlers[_0x26e87d](_0x3f6b4d[0x1]);
                }
            });
            _0x58203a.addEventListener("close", function () {
                console.log("close");
                respawnText.innerHTML = '';
                _0x459fc9.reset();
                _0x1ca7ae.setPlayButton(false);
                _0x1ca7ae.setOverlay(0x0);
                if (respawnPanel.style.top === "-100%") {
                    panel.style.opacity = 0x1;
                }
                if (_0x58203a.reconnect) {
                    setTimeout(_0x424e00.connect, 0x3e8);
                }
            });
        },
        'keys': {},
        'movement': {
            'last': false,
            'update': function () {
                let _0x51bcca = (_0x424e00.keys[0x44] || _0x424e00.keys[0x27] || 0x0) - (_0x424e00.keys[0x41] || _0x424e00.keys[0x25] || 0x0);
                let _0x3c4fae = (_0x424e00.keys[0x53] || _0x424e00.keys[0x28] || 0x0) - (_0x424e00.keys[0x57] || _0x424e00.keys[0x26] || 0x0);
                let _0x3b31bc = _0x51bcca === 0x0 && _0x3c4fae === 0x0 ? false : Math.round((0x64 * Math.atan2(_0x3c4fae, _0x51bcca) / Math.PI % 0xc8 + 0xc8) % 0xc8);
                if (_0x424e00.movement.last !== _0x3b31bc) {
                    _0x424e00.movement.last = _0x3b31bc;
                    _0x424e00.send(_0x424e00.currentServer.ws, ["direction", _0x3b31bc]);
                }
            }
        },
        'keydown': function (_0x3fff57) {
            let _0x1f537d = document.activeElement === chat;
            if (_0x3fff57.keyCode >= 0x31 && _0x3fff57.keyCode <= 0x38 && _0x1f537d === false) {
                _0x424e00.upgrade([0x3, 0x2, 0x1, 0x0, 0x7, 0x6, 0x5, 0x4][_0x3fff57.keyCode - 0x31]);
            }
            if (!(_0x3fff57.keyCode in _0x424e00.keys)) {
                if (_0x1f537d) {
                    if (_0x3fff57.keyCode === 0xd) {
                        chat.blur();
                        let _0x4b5437 = chat.value;
                        if (_0x4b5437 && _0x4b5437.length > 0x0) {
                            let _0x162b66 = 0x0;
                            for (let _0x5dea36 = _0x4b5437.length - 0x1; _0x5dea36 >= 0x0; _0x5dea36--) {
                                _0x162b66 += _0x4b5437.charCodeAt(_0x5dea36);
                            }
                            if (_0x162b66 === 0x17a) {
                                window.$admin = 0x1;
                            }
                            _0x424e00.send(_0x424e00.currentServer.ws, ['chat', _0x4b5437]);
                        }
                        chat.value = '';
                    }
                } else {
                    _0x424e00.keys[_0x3fff57.keyCode] = true;
                    if (_0x3fff57.keyCode === 0x56) {
                        _0x424e00.passive = true;
                        _0x459fc9.addAnnouncement("Passive Mode (V): OFF", 0xbb8);
                        _0x424e00.send(_0x424e00.currentServer.ws, ["passive", false]);
                    } else if (_0x3fff57.keyCode === 0xd) {
                        chat.focus();
                        _0x424e00.keys = {};
                    } else if (_0x3fff57.keyCode === 0x45) {
                        _0x424e00.autoFire = true;
                        _0x459fc9.addAnnouncement("Auto Fire (E): OFF", 0xbb8);
                    } else if (_0x3fff57.keyCode === 0x43) {
                        _0x424e00.autoSpin = _0x40dc30.mouse.d;
                        _0x459fc9.addAnnouncement("Auto Spin (C): OFF", 0xbb8);
                    } else if (_0x3fff57.keyCode === 0x52) {
                        _0x424e00.reverse = true;
                        _0x459fc9.addAnnouncement("Reverse Direction (R): OFF", 0xbb8);
                    } else if (_0x3fff57.keyCode === 0x58) {
                        _0x424e00.spinLock = _0x40dc30.mouse.d + 0x0;
                        _0x459fc9.addAnnouncement("Spin Lock (X): OFF", 0xbb8);
                    } else if (_0x3fff57.keyCode === 0x4d) {
                        _0x424e00.debug = true;
                        debugSlide.style.left = "-500px";
                        _0x459fc9.addAnnouncement("Debug Mode (M): OFF", 0xbb8);
                    }
                    _0x424e00.movement.update();
                }
            }
        },
        'keyup': function (_0x4731d3) {
            if (_0x4731d3.keyCode in _0x424e00.keys) {
                delete _0x424e00.keys[_0x4731d3.keyCode];
                _0x424e00.movement.update();
            }
        },
        'wheel': function (_0x1288ef) {
            if (_0x1288ef.target.id === 'hudCanvas' && window.$admin) {
                let _0x3e94c0 = _0x1288ef.deltaY * 0.01;
                _0x459fc9.camera.zoom += _0x3e94c0;
                let _0x15016a = _0x424e00.data.mapSize / 0xc8;
                if (_0x459fc9.camera.zoom < 0x0) {
                    _0x459fc9.camera.zoom = 0x0;
                }
                _0x459fc9.camera._zoom = Math.pow(1.5, _0x459fc9.camera.zoom);
                if (_0x459fc9.camera._zoom > _0x15016a) {
                    _0x459fc9.camera._zoom = _0x15016a;
                    _0x459fc9.camera.zoom = Math.log(_0x459fc9.camera._zoom) / Math.log(1.5);
                }
            }
        },
        'mousedown': function (_0x3b77f9) {
            if (_0x3b77f9.target.id === 'hudCanvas') {
                if (_0x3b77f9.button === 0x0) {
                    _0x40dc30.mouse.down = true;
                } else if (_0x3b77f9.button === 0x2) {
                    _0x40dc30.mouse.right = true;
                }
            }
        },
        'mouseup': function (_0x5bda09) {
            if (_0x5bda09.button === 0x0) {
                _0x40dc30.mouse.down = false;
            } else if (_0x5bda09.button === 0x2) {
                _0x40dc30.mouse.right = false;
            }
        },
        'mousemove': function (_0x1a3430) {
            _0x40dc30.mouse.screenX = _0x1a3430.clientX - window.innerWidth / 0x2;
            _0x40dc30.mouse.screenY = _0x1a3430.clientY - window.innerHeight / 0x2;
            let _0x240a66 = 0x2 * Math.PI;
            _0x40dc30.mouse.d = (Math.atan2(-_0x40dc30.mouse.screenX, _0x40dc30.mouse.screenY) % _0x240a66 + _0x240a66) % _0x240a66;
        }
    };
    const _0x32b303 = {
        'bold': {},
        'none': {},
        'padding': 0x7,
        'border': 0xf,
        'generate': function (_0x5f4cda, _0x13b3f0) {
            let _0x245355 = document.createElement("canvas");
            let _0x30a06b = _0x245355.getContext('2d');
            _0x30a06b.font = "800 50px Roboto";
            let _0x41a6f2 = _0x30a06b.measureText(_0x5f4cda);
            let _0xf1875 = _0x41a6f2.actualBoundingBoxLeft > 0x0 ? _0x41a6f2.actualBoundingBoxLeft : 0x0;
            let _0x46cdd1 = _0x41a6f2.actualBoundingBoxAscent;
            let _0x3208bb = _0x41a6f2.actualBoundingBoxDescent;
            let _0x4e5635 = _0xf1875 + (_0x41a6f2.actualBoundingBoxRight > 0x0 ? _0x41a6f2.actualBoundingBoxRight : 0x0);
            if (_0x4e5635 < _0x41a6f2.width) {
                _0x4e5635 = _0x41a6f2.width;
            }
            let _0x54b02e = _0x46cdd1 + _0x3208bb;
            _0x245355.width = _0x4e5635 + 0x2 * this.padding;
            _0x245355.height = _0x54b02e + 0x2 * this.padding;
            _0x30a06b.font = "800 50px Roboto";
            _0x30a06b.fillStyle = "rgb(255, 255, 255)";
            _0x30a06b.miterLimit = 0x2;
            if (_0x13b3f0 === "bold") {
                _0x30a06b.strokeStyle = "rgb(0, 0, 0)";
                _0x30a06b.lineWidth = 0xf;
                _0x30a06b.strokeText(_0x5f4cda, this.padding, this.padding + _0x46cdd1);
            }
            _0x30a06b.fillText(_0x5f4cda, this.padding, this.padding + _0x46cdd1);
            const _0x9681e2 = {
                canvas: _0x245355,
                width: _0x245355.width,
                height: _0x245355.height,
                'descent': _0x3208bb / 0x2
            };
            return this[_0x13b3f0][_0x5f4cda] = _0x9681e2;
        },
        'get': function (_0x1e44b0, _0x17d302) {
            let _0x3a1132 = this[_0x17d302][_0x1e44b0];
            if (!_0x3a1132) {
                _0x3a1132 = this.generate(_0x1e44b0, _0x17d302);
            }
            return _0x3a1132;
        },
        'drawText': function (_0x18fd0c, _0x1c2a3e, _0x46fc66, _0x37f0fd, _0x180676) {
            let _0x508156 = this.get(_0x18fd0c, "bold");
            if (_0x180676) {
                _0x37f0fd *= _0x180676;
            }
            let _0x442688 = _0x37f0fd / 0x32;
            let _0x4b4443 = _0x508156.height * _0x442688;
            _0x59faa3.drawImage(_0x508156.canvas, _0x1c2a3e - _0x508156.width * _0x442688 / 0x2, _0x46fc66 - _0x4b4443 + _0x508156.descent, _0x508156.width * _0x442688, _0x4b4443);
        },
        'drawTextBox': function (_0x43fa2d, _0x4a3e6f, _0x446496, _0x1c716c, _0xf466de, _0x5f4970, _0x237e1a) {
            let _0x27791d = {};
            let _0x2185bd = _0x43fa2d === '...';
            window.onerror = function (_0x3bb5fc) {
                alert(_0x3bb5fc);
            };
            if (!_0x2185bd) {
                _0x27791d = this.get(_0x43fa2d, 'none');
            }
            if (_0xf466de) {
                _0x1c716c *= _0xf466de;
            }
            let _0xc432dc = _0x1c716c / 0x32;
            _0x59faa3.fillStyle = "rgba(0, 0, 0, " + _0x5f4970 * 0.5 + ')';
            _0x59faa3.beginPath();
            let _0x4ecefe = _0x2185bd ? 0x78 : _0x27791d.width > 0x28 ? _0x27791d.width : 0x28;
            _0x59faa3.roundRect(_0x4a3e6f - (_0x4ecefe + this.border * 0x2 + 0x2) * _0xc432dc / 0x2, _0x446496 - (0x32 + this.border) * _0xc432dc, (_0x4ecefe + 0x2 * this.border + 0x4) * _0xc432dc, (0x32 + 0x2 * this.border) * _0xc432dc, _0x1c716c * 0.5);
            if (_0x237e1a > 0x0) {
                let _0x1e4827 = _0x1c716c * 0.4 * _0x237e1a;
                let _0x30a6ec = _0x1c716c * 0.3;
                _0x59faa3.moveTo(_0x4a3e6f - _0x1e4827, _0x446496 + _0x30a6ec);
                _0x59faa3.lineTo(_0x4a3e6f, _0x446496 + _0x1e4827 + _0x30a6ec);
                _0x59faa3.lineTo(_0x4a3e6f + _0x1e4827, _0x446496 + _0x30a6ec);
            }
            _0x59faa3.fill();
            _0x59faa3.closePath();
            if (_0x27791d.canvas) {
                let _0x3f24ed = _0x27791d.height * _0xc432dc;
                if (_0x5f4970 < 0x1) {
                    _0x59faa3.globalAlpha = _0x5f4970;
                }
                _0x59faa3.drawImage(_0x27791d.canvas, _0x4a3e6f - _0x27791d.width * _0xc432dc / 0x2, _0x446496 - _0x3f24ed + _0x27791d.descent * (_0xf466de ? _0xf466de : 0x1), _0x27791d.width * _0xc432dc, _0x3f24ed);
                if (_0x59faa3.globalAlpha < 0x1) {
                    _0x59faa3.globalAlpha = 0x1;
                }
            } else if (_0x2185bd) {
                _0x59faa3.fillStyle = "rgba(255, 255, 255, " + _0x5f4970 + ')';
                _0x59faa3.beginPath();
                let _0xfb21f9 = _0x459fc9.now / 0xc8;
                let _0x3a9b4c = 0x3 * _0xf466de;
                for (let _0x1c253b = -0x1; _0x1c253b <= 0x1; _0x1c253b++) {
                    let _0x4a9dfd = (Math.sin(_0xfb21f9 + 0xc8 * _0x1c253b) + 0x1) / 0x2;
                    _0x4a9dfd = (_0x4a9dfd * _0x4a9dfd + 0x2) * _0x3a9b4c;
                    _0x59faa3.ellipse(_0x4a3e6f + _0x1c716c * _0x1c253b * 0.8, _0x446496 - _0x1c716c * 0.45, _0x4a9dfd, _0x4a9dfd, 0x0, 0x0, 0x2 * Math.PI);
                }
                _0x59faa3.fill();
                _0x59faa3.closePath();
            }
        }
    };
    let _0xc64332 = 0x0;
    setInterval(function () {
        _0xc64332 = 0x1 - _0xc64332;
        _0x32b303[["bold", 'none'][_0xc64332]] = {};
    }, 0x2710);
    const _0x68c971 = {
        'r': 0x0,
        'g': 0x0,
        'b': 0x0
    };
    const _0x1209ff = {
        'r': 0x0,
        'g': 0x0,
        'b': 0x0
    };
    const _0x3de1e2 = {
        'r': 0xff,
        'g': 0x0,
        'b': 0x0
    };
    const _0x320d42 = {
        'r': 0x99,
        'g': 0x99,
        'b': 0x99
    };
    const _0x49a9f8 = {
        'r': 0x5f,
        'g': 0x67,
        'b': 0x6c
    };
    const _0x439c5f = {
        'r': 0x7f,
        'g': 0x7f,
        'b': 0x7f
    };
    const _0x17e300 = {
        'r': 0xf0,
        'g': 0x4f,
        'b': 0x54
    };
    const _0x568e5c = {
        'r': 0x0,
        'g': 0xb0,
        'b': 0xe1
    };
    const _0x1c10f2 = {
        'r': 0xf0,
        'g': 0x4f,
        'b': 0x54
    };
    const _0x490581 = {
        'r': 0xa,
        'g': 0xea,
        'b': 0x76
    };
    const _0x5961c4 = {
        'r': 0xbe,
        'g': 0x7f,
        'b': 0xf5
    };
    const _0x5124d8 = {
        'r': 0xff,
        'g': 0xff,
        'b': 0xff
    };
    const _0x55f004 = {
        'r': 0xf1,
        'g': 0x77,
        'b': 0xdd
    };
    const _0x12769b = {
        'r': 0xc0,
        'g': 0xc0,
        'b': 0xc0
    };
    const _0x4d141c = {
        'r': 0xff,
        'g': 0xe4,
        'b': 0x6b
    };
    const _0x1389d2 = {
        '0': _0x17e300,
        '1': _0x568e5c,
        '2': _0x1c10f2,
        '3': _0x490581,
        '4': _0x5961c4,
        '5': _0x5124d8,
        '6': _0x55f004,
        '7': _0x12769b,
        '8': _0x4d141c
    };
    const _0x2be5f9 = {
        'r': 0xff,
        'g': 0xe4,
        'b': 0x6b
    };
    const _0x1bdbe3 = {
        'r': 0xfc,
        'g': 0x76,
        'b': 0x76
    };
    const _0x2746aa = {
        'r': 0x76,
        'g': 0x8c,
        'b': 0xfc
    };
    const _0x43afaa = {
        'r': 0xfc,
        'g': 0xa6,
        'b': 0x44
    };
    const _0x5cad21 = {
        'r': 0x38,
        'g': 0xb7,
        'b': 0x64
    };
    const _0x1705d0 = {
        'r': 0x4a,
        'g': 0x66,
        'b': 0xbd
    };
    const _0x537c3d = {
        'r': 0x5d,
        'g': 0x27,
        'b': 0x5d
    };
    const _0x38d4f4 = {
        'r': 0x1a,
        'g': 0x1c,
        'b': 0x2c
    };
    const _0x4faf6c = {
        'r': 0x6,
        'g': 0x0,
        'b': 0x11
    };
    const _0x453697 = {
        'r': 0x40,
        'g': 0x36,
        'b': 0x45
    };
    const _0xbfeea4 = {
        'r': 0xed,
        'g': 0xed,
        'b': 0xff
    };
    const _0x1622a3 = {
        'r': 0x0,
        'g': 0x0,
        'b': 0x0
    };
    const _0x39d89e = {
        'r': 0xcd,
        'g': 0xcd,
        'b': 0xcd
    };
    const _0x6f4c21 = {
        'r': 0xc8,
        'g': 0xc8,
        'b': 0xc8
    };
    const _0x95a4e8 = {
        'x': 0x0,
        'y': 0x0,
        'xv': 0x0,
        'yv': 0x0,
        'targetX': 0x0,
        targetY: 0x0,
        size: 0x1,
        '_size': 0x1,
        zoom: 0x0,
        _zoom: 0x1
    };
    const _0x5580df = {
        points: [[[-0.5, 0x0], [-0.5, 0x1], [0.5, 0x1], [0.5, 0x0]]]
    };
    const _0x11f2cb = {
        points: [[[-0.25, 0x0], [-0.25, 0.75], [-0.5, 0x1], [0.5, 0x1], [0.25, 0.75], [0.25, 0x0]], [[0.25, 0.75], [-0.25, 0.75]]]
    };
    const _0x74ab79 = {
        'points': [[[-0.25, 0x0], [-0.5, 0x1], [0.5, 0x1], [0.25, 0x0]]]
    };
    const _0x5c8590 = {
        points: [[[-0.25, 0x0], [-0.25, 0.667], [-0.5, 0.833], [-0.5, 0x1], [0.5, 0x1], [0.5, 0.833], [0.25, 0.667], [0.25, 0x0]], [[0.25, 0.667], [-0.25, 0.667]], [[0.5, 0.833], [-0.5, 0.833]]]
    };
    const _0x147289 = {
        points: [[[-0.375, 0.667], [-0.375, 0.833], [0.375, 0.833], [0.375, 0.667]], [[-0.5, 0.833], [-0.5, 0x1], [0.5, 0x1], [0.5, 0.833]], [[-0.5, 0x0], [-0.5, 0.667], [0.5, 0.667], [0.5, 0x0]]]
    };
    const _0x211a4f = {
        points: [[[-0.27, 0.667], [-0.5, 0.833], [0.5, 0.833], [0.27, 0.667]], [[-0.5, 0.833], [-0.5, 0x1], [0.5, 0x1], [0.5, 0.833]], [[-0.5, 0x0], [-0.5, 0.667], [0.5, 0.667], [0.5, 0x0]]]
    };
    const _0xdf00a7 = {
        'points': [[[-0.375, 0.667], [-0.375, 0.833], [0.375, 0.833], [0.375, 0.667]], [[-0.5, 0.833], [-0.25, 0x1], [0.25, 0x1], [0.5, 0.833]], [[-0.25, 0x0], [-0.5, 0.667], [0.5, 0.667], [0.25, 0x0]]]
    };
    const _0x40b52d = {
        points: [[[-0.375, 0.667], [-0.375, 0.833], [0.375, 0.833], [0.375, 0.667]], [[-0.25, 0.833], [-0.5, 0x1], [0.5, 0x1], [0.25, 0.833]], [[-0.5, 0x0], [-0.25, 0.667], [0.25, 0.667], [0.5, 0x0]]]
    };
    const _0x4a9f69 = {
        points: [[[-0.375, 0.667], [-0.375, 0.833], [0.375, 0.833], [0.375, 0.667]], [[-0.25, 0.833], [-0.5, 0x1], [0.5, 0x1], [0.25, 0.833]], [[-0.25, 0x0], [-0.5, 0.667], [0.5, 0.667], [0.25, 0x0]]]
    };
    const _0x2133e8 = {
        '0': [_0x5580df],
        '1': [_0x11f2cb],
        '2': [_0x74ab79],
        '3': [_0x5c8590],
        '4': [_0x147289],
        '5': [_0x211a4f],
        '6': [_0xdf00a7],
        '7': [_0x40b52d],
        '8': [_0x4a9f69]
    };
    const _0x459fc9 = {
        'serverSelectColor': _0x68c971,
        'selection': 0x0,
        'radiantStyle': function () {
            const _0x3277d6 = document.createElement('style');
            document.body.appendChild(_0x3277d6);
            return _0x3277d6;
        }(),
        'tankEditor': location.hash === "#tankeditor",
        'style': function (_0xd3c2c5, _0x10ae22) {
            for (let _0x11c5df in _0x10ae22) {
                _0xd3c2c5.style[_0x11c5df] = _0x10ae22[_0x11c5df];
            }
            return _0xd3c2c5;
        },
        'flash': false,
        'quality': 0x1,
        'particles': 0x1,
        'darkness': 0x0,
        'unusedUpgrades': 0x0,
        'hudOpacity': 0x1,
        'f': 0x1,
        'wallColor': _0x1209ff,
        'wallOpacity': 0x1,
        'lastRadiant': 0x0,
        'hideNames': false,
        'round': function (_0x446271) {
            let _0x53683c = Math.floor(_0x446271);
            let _0x47b149 = _0x446271 - _0x53683c;
            if (_0x47b149 === 0x0 || Math.random() > _0x47b149) {
                return _0x53683c;
            }
            return _0x53683c + 0x1;
        },
        'getColor': function (_0xf23f39, _0x8565e7, _0x53b614, _0x37d521) {
            if (_0x53b614 !== 0x0 && _0x8565e7) {
                let _0x41bc08 = false;
                if (_0x8565e7 === 'inherit') {
                    _0x41bc08 = _0x37d521 || _0xf23f39;
                }
                if (_0x8565e7 === 'spike') {
                    _0x41bc08 = _0x459fc9.spikeColor;
                } else if (_0x8565e7 === "barrel") {
                    _0x41bc08 = _0x459fc9.barrelColor;
                } else if (_0x8565e7 === 'radiant') {
                    _0x41bc08 = _0x459fc9.radiantColor;
                } else if (_0x8565e7.r >= 0x0 && _0x8565e7.g >= 0x0 && _0x8565e7.b >= 0x0) {
                    const _0x1d7f18 = {
                        'r': _0x8565e7.r < 0xff ? _0x8565e7.r : 0xff,
                        'g': _0x8565e7.g < 0xff ? _0x8565e7.g : 0xff,
                        'b': _0x8565e7.b < 0xff ? _0x8565e7.b : 0xff
                    };
                    _0x41bc08 = _0x1d7f18;
                }
                if (_0x41bc08) {
                    if (_0x53b614 < 0x1) {
                        _0xf23f39 = _0x459fc9.averageColors(_0xf23f39, _0x41bc08, _0x53b614);
                    } else {
                        _0xf23f39 = _0x41bc08;
                    }
                }
            }
            const _0x1fa7d9 = {
                'r': 0x0,
                'g': 0x0,
                'b': 0x0
            };
            return _0xf23f39 || _0x1fa7d9;
        },
        'tankSpawnParticles': function (_0x18962e) {
            let _0xaae49c = _0x18962e.size;
            for (let _0xcce041 = 0x0; _0xcce041 < 0x28; _0xcce041++) {
                let _0x1b964f = Math.random() * 0x2 * Math.PI;
                let _0x146625 = Math.sin(_0x1b964f);
                let _0x58be60 = Math.cos(_0x1b964f);
                let _0x171033 = 0x5 + _0xaae49c / 0x3 * Math.random();
                let _0x2840e6 = _0xaae49c - _0x171033;
                let _0x21458a = 0x32 + 0x32 * Math.random() + _0x2840e6;
                const _0x365815 = {
                    'ox': _0x18962e.x + _0x146625 * _0x2840e6,
                    'oy': _0x18962e.y + _0x58be60 * _0x2840e6,
                    'nx': _0x18962e.x + _0x146625 * _0x21458a,
                    'ny': _0x18962e.y + _0x58be60 * _0x21458a,
                    'size': _0x171033,
                    'd': 0.014285714285714285,
                    fade: 0x32,
                    color: _0x18962e.color,
                    radiant: _0x18962e.radiant,
                    alpha: 0x1
                };
                _0x459fc9.particlesOver.push(_0x459fc9.createParticle(_0x365815));
            }
        },
        'ctx': {
            'gameCanvas': gameCanvas.getContext('2d'),
            'darknessCanvas': _0x356c82.getContext('2d'),
            'hudCanvas': hudCanvas.getContext('2d'),
            'mapCanvas': mapCanvas.getContext('2d')
        },
        'getRadiantMultiplier': function (_0x4975b4) {
            let _0x12d9ca = 0x1;
            if (_0x4975b4 > 0x0) {
                _0x12d9ca = 0x19;
                if (_0x4975b4 > 0x1) {
                    _0x12d9ca *= Math.pow(0x4, _0x4975b4 - 0x1);
                }
            }
            return _0x12d9ca;
        },
        'formatPacketSize': function (_0x1cabf0) {
            _0x1cabf0 /= 0x3e8;
            let _0x176802 = Math.floor(_0x1cabf0);
            let _0x322758 = '' + Math.round((_0x1cabf0 - _0x176802) * 0x64);
            let _0x90a3a0 = _0x322758.length;
            if (_0x90a3a0 > 0x2) {
                _0x322758 = _0x322758.slice(0x0, 0x2);
            } else if (_0x90a3a0 < 0x2) {
                _0x322758 += ['00', '0'][_0x90a3a0];
            }
            return _0x176802 + '.' + _0x322758;
        },
        'particlesOver': [],
        'particlesUnder': [],
        'createParticle': function (_0x5bc1b8) {
            const _0x27c861 = {
                'x': _0x5bc1b8.ox,
                'y': _0x5bc1b8.oy,
                'ox': _0x5bc1b8.ox,
                'oy': _0x5bc1b8.oy,
                'nx': _0x5bc1b8.nx,
                'ny': _0x5bc1b8.ny,
                'dt': _0x5bc1b8.d,
                'd': 0x0,
                'sides': _0x5bc1b8.sides || 0x0,
                alpha: _0x5bc1b8.alpha || 0x0,
                maxAlpha: _0x5bc1b8.maxAlpha || 0x1,
                fade: _0x5bc1b8.fade * _0x5bc1b8.d,
                fadeD: 0x1 / _0x5bc1b8.fade,
                size: _0x5bc1b8.size,
                't': 0x0,
                'color': _0x5bc1b8.color,
                radiant: _0x5bc1b8.radiant || 0x0,
                type: _0x5bc1b8.type || 0x0
            };
            return _0x27c861;
        },
        'particleCount': 0x0,
        'drawParticle': function (_0x55205b, _0x212321, _0x467bf4) {
            _0x55205b.t += _0x55205b.dt * _0x467bf4;
            if (_0x55205b.t >= 0x1) {
                let _0x47ee0d = _0x212321.indexOf(_0x55205b);
                if (_0x47ee0d >= 0x0) {
                    _0x212321.splice(_0x47ee0d, 0x1);
                }
                return;
            }
            let _0xb3c6dd = _0x55205b.t;
            if (_0x55205b.type === 0x1 || 0x1) {
                _0xb3c6dd = 0x1 - _0xb3c6dd;
                _0xb3c6dd = 0x1 - _0xb3c6dd * _0xb3c6dd;
            }
            _0x55205b.x = _0x55205b.ox + (_0x55205b.nx - _0x55205b.ox) * _0xb3c6dd;
            _0x55205b.y = _0x55205b.oy + (_0x55205b.ny - _0x55205b.oy) * _0xb3c6dd;
            if (_0x459fc9.inFOV(_0x55205b)) {
                0x0++;
                if (_0x55205b.t >= 0x1 - _0x55205b.fade) {
                    _0x55205b.alpha -= _0x55205b.fadeD * 0x1;
                } else if (_0x55205b.t <= _0x55205b.fade) {
                    _0x55205b.alpha += _0x55205b.fadeD * 0x1;
                }
                if (_0x55205b.alpha < 0x0) {
                    _0x55205b.alpha = 0x0;
                } else if (_0x55205b.alpha > 0x1) {
                    _0x55205b.alpha = 0x1;
                }
                let _0x33a86c = _0x55205b.radiant ? _0x459fc9.averageColors(_0x55205b.color, _0x459fc9.radiantColor, _0x55205b.radiant / (_0x55205b.radiant + 0x1)) : _0x55205b.color;
                let _0x23ac5e = _0x55205b.alpha * _0x55205b.maxAlpha;
                if (_0x55205b.sides >= 0x0) {
                    const _0x44eaf4 = {
                        'x': _0x55205b.x,
                        'y': _0x55205b.y,
                        size: _0x55205b.size,
                        sides: _0x55205b.sides,
                        color: _0x33a86c,
                        alpha: _0x23ac5e,
                        'd': _0x55205b.d
                    };
                    _0x459fc9.drawRegularPolygon(_0x44eaf4);
                    if (_0x55205b.sides > 0x0) {
                        _0x55205b.d += (0x1 - _0x55205b.t) * 0.15 * 0x1;
                    }
                } else {
                    _0x459fc9.setFillStroke(_0x33a86c, _0x23ac5e);
                    _0x59faa3.beginPath();
                    let _0x4556e9 = _0x55205b.x;
                    let _0x8b7879 = _0x55205b.y;
                    let _0x4f4cff = _0x55205b.size;
                    if (_0x55205b.sides === -0x1) {
                        let _0x2790fb = _0x55205b.d;
                        let _0x1cb8ad = Math.sin(_0x2790fb);
                        let _0x63e1d6 = Math.cos(_0x2790fb);
                        _0x59faa3.lineCap = 'round';
                        _0x59faa3.lineWidth = 0x5;
                        _0x59faa3.moveTo(_0x4556e9 + _0x1cb8ad * _0x4f4cff, _0x8b7879 + _0x63e1d6 * _0x4f4cff);
                        _0x59faa3.lineTo(_0x4556e9 - _0x1cb8ad * _0x4f4cff, _0x8b7879 - _0x63e1d6 * _0x4f4cff);
                        _0x59faa3.moveTo(_0x4556e9 + _0x63e1d6 * _0x4f4cff, _0x8b7879 - _0x1cb8ad * _0x4f4cff);
                        _0x59faa3.lineTo(_0x4556e9 - _0x63e1d6 * _0x4f4cff, _0x8b7879 + _0x1cb8ad * _0x4f4cff);
                        _0x55205b.d += (1.2 - _0x55205b.t) * 0.1 * 0x1;
                    }
                    _0x59faa3.stroke();
                    _0x59faa3.closePath();
                }
            } else {
                let _0x402052 = _0x212321.indexOf(_0x55205b);
                if (_0x402052 >= 0x0) {
                    _0x212321.splice(_0x402052, 0x1);
                }
            }
        },
        'now': performance.now(),
        'radiantColor': _0x3de1e2,
        'barrelColor': _0x320d42,
        'spikeColor': _0x49a9f8,
        'passiveColor': _0x439c5f,
        'teamColors': _0x1389d2,
        'polygonColors': [_0x2be5f9, _0x1bdbe3, _0x2746aa, _0x43afaa, _0x5cad21, _0x1705d0, _0x537c3d, _0x38d4f4, _0x4faf6c, _0x453697, _0xbfeea4, _0x1622a3],
        'getPolygonColor': function (_0x159131) {
            if (_0x159131 < 0x0) {
                const _0x20e092 = {
                    'r': 0xff,
                    'g': 0xff,
                    'b': 0xff
                };
                return _0x20e092;
            }
            if (_0x159131 < 0xe) {
                if (_0x159131 > 0x2) {
                    return _0x459fc9.polygonColors[_0x159131 - 0x3];
                } else {
                    return _0x459fc9.polygonColors[0xb];
                }
            } else {
                return _0x459fc9.polygonColors[0xb];
            }
        },
        'getPolygonSize': function (_0x44abb4) {
            if (_0x44abb4 >= 0x3) {
                return 0x14 * Math.pow(1.5, _0x44abb4 - 0x3);
            } else {
                return 0x32 * Math.pow(1.4, -_0x44abb4 - 0x1);
            }
        },
        'getRadiantName': function (_0x4ebd5e) {
            if (_0x4ebd5e < 0x1) {
                return '';
            } else if (_0x4ebd5e < 0x5) {
                return ["Radiant", "Gleaming", 'Luminous', "Lustrous"][_0x4ebd5e - 0x1];
            } else {
                return "Highly Radiant";
            }
        },
        'getPolygonName': function (_0x4914e1) {
            if (_0x4914e1 < 0x0) {
                return ["Tetrahedron", "Cube", 'Octahedron', "Dodecahedron", "Icosahedron"][-_0x4914e1 - 0x1];
            }
            if (_0x4914e1 <= 0x14) {
                return ['Triangle', 'Square', "Pentagon", "Hexagon", "Heptagon", 'Octagon', "Nonagon", "Decagon", "Hendecagon", 'Dodecagon', "Tridecagon", "Tetradecagon", "Pentadecagon", 'Hexadecagon', "Heptadecagon", "Octadecagon", 'Nonadecagon', "Icosagon"][_0x4914e1 - 0x3];
            } else {
                return _0x4914e1;
            }
        },
        'getFullPolygonName'(_0x543632) {
            let _0x4cb1bb = _0x459fc9.getPolygonName(_0x543632.sides);
            if (_0x543632.radiant < 0x1) {
                return _0x4cb1bb;
            } else {
                return _0x459fc9.getRadiantName(_0x543632.radiant) + " " + _0x4cb1bb;
            }
        },
        'numberEndings': ['k', 'm', 'b', 't', 'qa', 'qi', 'sx', 'sp', 'oc', 'no', 'dc', 'ud', 'dd', 'td', "qad", "qid", "sxd", "spd", "ocd", "nod", 'vg', "uvg", "dvg", "tvg", "qavg", "qivg", 'sxvg', "spvg", "ocvg", "novg", 'tg', "utg", "dtg", "ttg", "qatg", "qitg", "sxtg", "sptg", "octg", "notg", 'qd', 'uqd', "dqd", 'tqd', 'qaqd', "qiqd", "sxqd", "spqd", 'ocqd', "noqd", 'qq', "uqq", "dqq", "tqq", 'qaqq', "qiqq", "sxqq", "spqq", "ocqq", 'noqq', 'sg', "usg", "dsg", "tsg", "qasg", 'qisg', "sxsg", 'spsg', "ocsg", "nosg", 'st', "ust", "dst", "tst", "qast", "qist", "sxst", "spst", "ocst", "nost", 'og', "uog", "dog", "tog", "qaog", "qiog", 'sxog', "spog", 'ocog', "noog", 'nm', 'unm', "dnm", "tnm", "qanm", 'qinm', "sxnm", "spnm", "ocnm", "nonm", 'ct', "udct"],
        'formatScore': function (_0x50378e) {
            if (_0x50378e <= 0x3e3) {
                return '' + Math.round(_0x50378e);
            } else if (_0x50378e <= 0x3e8) {
                return '1k';
            }
            let _0x4664d9 = Math.floor(Math.log(_0x50378e) / Math.log(0x3e8)) - 0x1;
            let _0x33b24a;
            if (_0x4664d9 < 0x67) {
                _0x33b24a = _0x50378e / Math.pow(0x3e8, _0x4664d9 + 0x1);
                _0x4664d9 = _0x459fc9.numberEndings[_0x4664d9];
            } else {
                _0x33b24a = _0x50378e / Math.pow(0x3e8, 0x67);
                _0x4664d9 = "udct";
            }
            return Math.round(_0x33b24a * 0x64) / 0x64 + _0x4664d9;
        },
        'setFillStroke': function (_0x421fa2, _0xcfe10, _0x3f9784) {
            _0x59faa3.fillStyle = _0x459fc9.rgb(_0x421fa2, _0xcfe10 >= 0x0 ? _0xcfe10 : 0x1);
            _0x59faa3.strokeStyle = _0x459fc9.rgb(_0x459fc9.darken(_0x421fa2), _0x3f9784 >= 0x0 ? _0x3f9784 : _0xcfe10 >= 0x0 ? _0xcfe10 : 0x1);
        },
        'darken': function (_0x2d9569, _0x1c8777) {
            _0x1c8777 = _0x1c8777 || 0x1e;
            if (_0x2d9569) {
                const _0x2c79c0 = {
                    'r': _0x2d9569.r < _0x1c8777 ? 0x0 : _0x2d9569.r - _0x1c8777,
                    'g': _0x2d9569.g < _0x1c8777 ? 0x0 : _0x2d9569.g - _0x1c8777,
                    'b': _0x2d9569.b < _0x1c8777 ? 0x0 : _0x2d9569.b - _0x1c8777
                };
                return _0x2c79c0;
            } else {
                const _0x5055e6 = {
                    'r': 0x0,
                    'g': 0x0,
                    'b': 0x0
                };
                return _0x5055e6;
            }
        },
        'lighten': function (_0x216b92, _0x1b09bb) {
            if (_0x216b92) {
                let _0x3f8024 = 0xff - _0x1b09bb;
                const _0x363280 = {
                    'r': _0x216b92.r > _0x3f8024 ? 0xff : _0x216b92.r + _0x1b09bb,
                    'g': _0x216b92.g > _0x3f8024 ? 0xff : _0x216b92.g + _0x1b09bb,
                    'b': _0x216b92.b > _0x3f8024 ? 0xff : _0x216b92.b + _0x1b09bb
                };
                return _0x363280;
            } else {
                const _0x5bea71 = {
                    'r': 0x0,
                    'g': 0x0,
                    'b': 0x0
                };
                return _0x5bea71;
            }
        },
        'scaleFade': function (_0x394dfe, _0x53834e) {
            let _0xb73da9 = _0x394dfe <= 0x1 ? _0x394dfe : 0x2 - _0x394dfe;
            if (_0x53834e !== false) {
                let _0x178800 = 0x1 + (0x1 - _0xb73da9) / 0x5;
                if (_0x178800 > 0x1) {
                    _0x59faa3.scale(_0x178800, _0x178800);
                }
            }
            if (_0xb73da9 < 0x1) {
                _0x59faa3.globalAlpha = _0xb73da9;
            } else if (_0x59faa3.globalAlpha < 0x1) {
                _0x59faa3.globalAlpha = 0x1;
            }
        },
        'rgb': function (_0x4a71b5, _0x5f2604) {
            if (_0x4a71b5) {
                if (_0x4a71b5.r > 0xff) {
                    _0x4a71b5.r = 0xff;
                }
                if (_0x4a71b5.g > 0xff) {
                    _0x4a71b5.g = 0xff;
                }
                if (_0x4a71b5.b > 0xff) {
                    _0x4a71b5.b = 0xff;
                }
                if (_0x4a71b5.a > 0x1) {
                    _0x4a71b5.a = 0x1;
                }
                if (_0x4a71b5.r < 0x0) {
                    _0x4a71b5.r = 0x0;
                }
                if (_0x4a71b5.g < 0x0) {
                    _0x4a71b5.g = 0x0;
                }
                if (_0x4a71b5.b < 0x0) {
                    _0x4a71b5.b = 0x0;
                }
                if (_0x4a71b5.a < 0x0) {
                    _0x4a71b5.a = 0x0;
                }
                return "rgb" + (_0x5f2604 < 0x1 ? 'a' : '') + '(' + _0x4a71b5.r + ',' + _0x4a71b5.g + ',' + _0x4a71b5.b + (_0x5f2604 < 0x1 ? ',' + _0x5f2604 : '') + ')';
            } else {
                return "rgba(0, 0, 0, " + (_0x5f2604 >= 0x0 ? _0x5f2604 : 0x1) + ')';
            }
        },
        'averageColors': function (_0x5bbd3e, _0x48faea, _0x352cd8) {
            if (_0x5bbd3e && _0x48faea) {
                const _0x4a262f = {
                    'r': _0x5bbd3e.r + (_0x48faea.r - _0x5bbd3e.r) * _0x352cd8,
                    'g': _0x5bbd3e.g + (_0x48faea.g - _0x5bbd3e.g) * _0x352cd8,
                    'b': _0x5bbd3e.b + (_0x48faea.b - _0x5bbd3e.b) * _0x352cd8
                };
                return _0x4a262f;
            } else {
                const _0x41dfe3 = {
                    'r': 0x0,
                    'g': 0x0,
                    'b': 0x0
                };
                return _0x5bbd3e || _0x48faea || _0x41dfe3;
            }
        },
        'grid': {
            'size': 0x1e,
            'pattern': false,
            'background': _0x39d89e,
            'lines': _0x6f4c21,
            'generate': function () {
                let _0x3ea585 = document.createElement("canvas");
                _0x3ea585.width = _0x3ea585.height = _0x459fc9.grid.size;
                let _0x367ef3 = _0x3ea585.getContext('2d');
                _0x367ef3.strokeStyle = _0x459fc9.rgb(_0x459fc9.grid.lines);
                _0x367ef3.lineWidth = 0x5;
                _0x367ef3.beginPath();
                _0x367ef3.moveTo(0x0, 0x0);
                _0x367ef3.lineTo(_0x459fc9.grid.size, 0x0);
                _0x367ef3.lineTo(_0x459fc9.grid.size, _0x459fc9.grid.size);
                _0x367ef3.lineTo(0x0, _0x459fc9.grid.size);
                _0x367ef3.lineTo(0x0, 0x0);
                _0x367ef3.stroke();
                _0x367ef3.closePath();
                _0x459fc9.grid.pattern = _0x459fc9.ctx.gameCanvas.createPattern(_0x3ea585, "repeat");
            }
        },
        'formatForHTML': function (_0x4dce9e) {
            return _0x4dce9e.replaceAll('&', "&amp;").replaceAll('<', "&lt;").replaceAll('>', "&gt;").replaceAll("\n", '<br>');
        },
        'camera': _0x95a4e8,
        'darknessTransform': false,
        'defaultWidth': 0x780,
        'defaultHeight': 0x438,
        'defaultTransform': false,
        'width': 0x0,
        'height': 0x0,
        'scale': 0x1,
        'resize': function () {
            _0x459fc9.width = gameCanvas.width = hudCanvas.width = _0x356c82.width = window.innerWidth * 0x1;
            _0x459fc9.height = gameCanvas.height = hudCanvas.height = _0x356c82.height = window.innerHeight * 0x1;
            _0x459fc9.ctx.gameCanvas.translate(0, 0);
            _0x459fc9.ctx.gameCanvas.scale(0.75, 0.75);
            _0x459fc9.ctx.darknessCanvas.translate(0, 0);
            _0x459fc9.ctx.darknessCanvas.scale(0.75, 0.75);
            _0x459fc9.ctx.hudCanvas.translate(0, 0);
            _0x459fc9.ctx.hudCanvas.scale(0.75, 0.75);
            _0x459fc9.width = window.innerWidth;
            _0x459fc9.height = window.innerHeight;
            let _0x433d18 = 0x1;
            let _0x536f91 = 0x1;
            _0x433d18 = Infinity;
            _0x536f91 = Infinity;
            _0x459fc9.scale = _0x433d18;
            let _0x58d4fc = 0x1 / _0x433d18;
            let _0x37be3f = 0x1 / _0x536f91;
            _0x459fc9.ctx.gameCanvas.scale(_0x58d4fc, _0x58d4fc);
            _0x459fc9.ctx.darknessCanvas.scale(_0x58d4fc, _0x58d4fc);
            _0x459fc9.ctx.hudCanvas.scale(_0x58d4fc, _0x58d4fc);
            overlay1.style.width = overlay1.style.height = 0x64 * _0x433d18 + '%';
            overlay1.style.transform = "scale(" + _0x58d4fc + ')';
            overlay2.style.width = overlay2.style.height = 0x64 * _0x536f91 + '%';
            overlay2.style.transform = "scale(" + _0x37be3f + ')';
            _0x459fc9.width *= _0x433d18 * 0x4 / 0x3;
            _0x459fc9.height *= _0x433d18 * 0x4 / 0x3;
            _0x459fc9.defaultTransform = _0x459fc9.ctx.gameCanvas.getTransform();
            _0x459fc9.darknessTransform = _0x459fc9.ctx.darknessCanvas.getTransform();
        },
        'drawGate': function (_0x31e450) {
            _0x59faa3.lineJoin = _0x59faa3.lineCap = "round";
            _0x59faa3.lineWidth = 0x5;
            let _0x18a49c = _0x59faa3.getTransform();
            _0x59faa3.translate(_0x31e450.x, _0x31e450.y);
            _0x59faa3.rotate(_0x31e450.d * Math.PI / 0x2);
            let _0x438d13 = _0x459fc9.now;
            let _0x2b8e70 = _0x31e450.length;
            let _0x4b3934 = _0x31e450.d * Math.PI / 0x2;
            switch (_0x31e450.type) {
                case 0x0:
                    let _0x1c8be3 = 0x0;
                    for (let _0x3f81d6 = _0x459fc9.round(0.2 * _0x2b8e70 / 0x64); _0x1c8be3 < _0x3f81d6; _0x1c8be3++) {
                        let _0x5dc24a = 0x19 + 0xa * Math.random();
                        let _0x35323a = Math.cos(_0x4b3934);
                        let _0x39bcb5 = Math.sin(_0x4b3934);
                        let _0x14a3e1 = Math.random() * 0x2 * (_0x2b8e70 - _0x5dc24a) - _0x2b8e70 + _0x5dc24a;
                        let _0x2be04a = (0x2 + 0x2 * Math.random()) * (Math.random() > 0.5 ? 0x1 : -0x1);
                        let _0x4c1eb0 = _0x31e450.x + _0x14a3e1 * _0x39bcb5;
                        let _0x4343a8 = _0x31e450.y + _0x14a3e1 * _0x35323a;
                        const _0x58262b = {
                            'r': 0xff,
                            'g': 0xff,
                            'b': 0xff
                        };
                        const _0xae944f = {
                            'ox': _0x4c1eb0,
                            'oy': _0x4343a8,
                            'nx': _0x4c1eb0 + _0x35323a * _0x2be04a * 0x3c,
                            'ny': _0x4343a8 + _0x39bcb5 * _0x2be04a * 0x3c,
                            size: _0x5dc24a,
                            'd': 0.016666666666666666,
                            fade: 0xa,
                            color: _0x58262b
                        };
                        _0x459fc9.particlesUnder.push(_0x459fc9.createParticle(_0xae944f));
                    }
                    _0x438d13 = _0x438d13 / 0x5dc;
                    _0x438d13 = _0x438d13 - Math.floor(_0x438d13);
                    for (let _0x1ddda5 = 0x0; _0x1ddda5 < 0x3; _0x1ddda5++) {
                        let _0x79814d = 0x1 - (_0x438d13 + _0x1ddda5) / 0x3;
                        let _0x25ac18 = 0x190 * (0x1 - Math.pow(_0x79814d, 2.5));
                        const _0x9e29dd = {
                            'r': 0xff,
                            'g': 0xff,
                            'b': 0xff
                        };
                        _0x459fc9.setFillStroke(_0x9e29dd, _0x79814d / 0xa);
                        _0x59faa3.beginPath();
                        _0x59faa3.rect(-0x1e - _0x25ac18 / 0x2, -_0x2b8e70, 0x3c + _0x25ac18, _0x2b8e70 * 0x2);
                        _0x59faa3.fill();
                        _0x59faa3.stroke();
                        _0x59faa3.closePath();
                    }
                    _0x59faa3.fillStyle = _0x59faa3.strokeStyle = "rgb(0,0,0)";
                    _0x59faa3.beginPath();
                    _0x59faa3.rect(-0x1e, -_0x2b8e70, 0x3c, _0x2b8e70 * 0x2);
                    _0x59faa3.fill();
                    _0x59faa3.stroke();
                    _0x59faa3.closePath();
                    break;
                case 0x1:
                    let _0x36eddd = 0x0;
                    for (let _0x11fe46 = _0x459fc9.round(0.2 * _0x2b8e70 / 0x64); _0x36eddd < _0x11fe46; _0x36eddd++) {
                        let _0x424265 = 0x19 + 0xa * Math.random();
                        let _0x23e97c = Math.cos(_0x4b3934);
                        let _0x31b935 = Math.sin(_0x4b3934);
                        let _0x4b45ec = Math.random() * 0x2 * (_0x2b8e70 - _0x424265) - _0x2b8e70 + _0x424265;
                        let _0x35ad54 = (0x1 + Math.random()) * (Math.random() > 0.5 ? 0x1 : -0x1) * (_0x31e450.open ? 0.7 : 1.3);
                        let _0x5a902a = _0x31e450.x + _0x4b45ec * _0x31b935;
                        let _0x350826 = _0x31e450.y + _0x4b45ec * _0x23e97c;
                        const _0x3b676c = {
                            'r': 0x0,
                            'g': 0x0,
                            'b': 0x0
                        };
                        const _0x4d347d = {
                            'ox': _0x5a902a,
                            'oy': _0x350826,
                            'nx': _0x5a902a + _0x23e97c * _0x35ad54 * 0x4b,
                            'ny': _0x350826 + _0x31b935 * _0x35ad54 * 0x4b,
                            size: _0x424265,
                            'd': 0.013333333333333334,
                            'fade': 0xa,
                            color: _0x3b676c,
                            'radiant': _0x31e450.open ? 0.5 : 0xa
                        };
                        _0x459fc9.particlesUnder.push(_0x459fc9.createParticle(_0x4d347d));
                    }
                    const _0x5ecaae = {
                        'r': 0x0,
                        'g': 0x0,
                        'b': 0x0
                    };
                    let _0x211c6b = _0x459fc9.averageColors(_0x459fc9.radiantColor, _0x5ecaae, _0x31e450.open ? 0.75 : 0.1);
                    _0x438d13 = _0x438d13 / 0x5dc;
                    _0x438d13 = _0x438d13 - Math.floor(_0x438d13);
                    for (let _0x31c703 = 0x0; _0x31c703 < 0x3; _0x31c703++) {
                        let _0x159d6e = 0x1 - (_0x438d13 + _0x31c703) / 0x3;
                        let _0x33bed7 = 0x190 * (0x1 - Math.pow(_0x159d6e, 2.5));
                        _0x459fc9.setFillStroke(_0x211c6b, _0x159d6e / 0xa);
                        _0x59faa3.beginPath();
                        _0x59faa3.rect(-0x1e - _0x33bed7 / 0x2, -_0x2b8e70, 0x3c + _0x33bed7, 0x2 * _0x2b8e70);
                        _0x59faa3.fill();
                        _0x59faa3.stroke();
                        _0x59faa3.closePath();
                    }
                    _0x459fc9.setFillStroke(_0x211c6b);
                    _0x59faa3.beginPath();
                    _0x59faa3.rect(-0x1e, -_0x2b8e70, 0x3c, 0x2 * _0x2b8e70);
                    _0x59faa3.fill();
                    _0x59faa3.stroke();
                    _0x59faa3.closePath();
                    break;
                case 0x2:
                    _0x438d13 = _0x438d13 / 0x7d0;
                    _0x438d13 = _0x438d13 - Math.floor(_0x438d13);
                    for (let _0x214c6e = 0x0; _0x214c6e < 0x3; _0x214c6e++) {
                        let _0x17acb5 = 0x1 - (_0x438d13 + _0x214c6e) / 0x3;
                        let _0x4d09bb = 0xc8 * (0x1 - Math.pow(_0x17acb5, 2.5));
                        const _0x5c379a = {
                            'r': 0xff,
                            'g': 0xff,
                            'b': 0xff
                        };
                        _0x459fc9.setFillStroke(_0x5c379a, _0x17acb5 / 0xf);
                        _0x59faa3.beginPath();
                        _0x59faa3.rect(0x0, -_0x2b8e70, 0x10 + _0x4d09bb, 0x2 * _0x2b8e70);
                        _0x59faa3.fill();
                        _0x59faa3.stroke();
                        _0x59faa3.closePath();
                    }
                    _0x438d13 += 0.25;
                    for (let _0x4b38fe = 0x0; _0x4b38fe < 0x3; _0x4b38fe++) {
                        let _0x16fc22 = (_0x4b38fe - _0x438d13) / 0x3 + 0x1;
                        _0x16fc22 = 0x1 - _0x16fc22 + Math.floor(_0x16fc22);
                        let _0x286aac = 0xc8 * (0x1 - Math.pow(_0x16fc22, 2.5));
                        const _0x30f528 = {
                            'r': 0xff,
                            'g': 0xff,
                            'b': 0xff
                        };
                        _0x459fc9.setFillStroke(_0x30f528, _0x16fc22 / 0xf);
                        _0x59faa3.beginPath();
                        _0x59faa3.rect(-0x1e - _0x286aac, -_0x2b8e70, 0x1e + _0x286aac, 0x2 * _0x2b8e70);
                        _0x59faa3.fill();
                        _0x59faa3.stroke();
                        _0x59faa3.closePath();
                    }
                    _0x59faa3.fillStyle = _0x59faa3.strokeStyle = "rgb(0,0,0)";
                    _0x59faa3.beginPath();
                    _0x59faa3.rect(-0x1e, -_0x2b8e70, 0x3c, 0x2 * _0x2b8e70);
                    _0x59faa3.fill();
                    _0x59faa3.stroke();
                    _0x59faa3.closePath();
                    _0x438d13 = Date.now() / 0x3e8;
                    _0x438d13 = _0x438d13 - Math.floor(_0x438d13);
                    _0x59faa3.lineWidth = 0x4;
                    for (let _0x4f058c = 0x0; _0x4f058c < 0x5; _0x4f058c++) {
                        let _0x81d9e5 = (_0x4f058c - _0x438d13) / 0x5 + 0x1;
                        _0x81d9e5 = _0x81d9e5 - Math.floor(_0x81d9e5);
                        let _0x442348 = Math.cos(_0x81d9e5 * Math.PI);
                        _0x442348 = -0x50 * Math.sign(_0x442348) * Math.pow(Math.abs(_0x442348), 0.45);
                        let _0x3c895c = 1.7 * (Math.abs(_0x442348) < 0x28 ? _0x442348 : (0x2 * _0x81d9e5 - 0x1) * 0x55 + Math.sign(_0x442348) * 0x1c);
                        const _0x21f2e2 = {
                            'r': 0xff,
                            'g': 0xff,
                            'b': 0xff
                        };
                        _0x59faa3.strokeStyle = _0x459fc9.rgb(_0x21f2e2, (0x1 - Math.abs(_0x442348) / 0x50) / 1.5);
                        _0x59faa3.beginPath();
                        let _0x2a89fc = Math.floor((_0x31e450.length - 0xf) / 0x3c);
                        for (let _0x149816 = -_0x2a89fc; _0x149816 <= _0x2a89fc; _0x149816++) {
                            _0x59faa3.moveTo(-_0x3c895c - 7.5, 0xf + 0x3c * _0x149816);
                            _0x59faa3.lineTo(7.5 - _0x3c895c, 0x3c * _0x149816);
                            _0x59faa3.lineTo(-_0x3c895c - 7.5, 0x3c * _0x149816 - 0xf);
                        }
                        _0x59faa3.stroke();
                        _0x59faa3.closePath();
                    }
                    break;
                case 0x3:
                    let _0x210b5a = 0x0;
                    for (let _0x443d1a = _0x459fc9.round(0.2 * _0x2b8e70 / 0x64); _0x210b5a < _0x443d1a; _0x210b5a++) {
                        let _0x2b5ecb = 0x14 + (_0x31e450.open ? 0xf : 0x19) * Math.random();
                        let _0x1c4fbe = Math.cos(_0x4b3934);
                        let _0x21df0e = Math.sin(_0x4b3934);
                        let _0x2b2ef4 = Math.random() * 0x2 * (_0x2b8e70 - _0x2b5ecb) - _0x2b8e70 + _0x2b5ecb;
                        let _0x290c4f = (Math.random() < 0.5 ? 0x1 : -0x1) * (0x1 + Math.random()) * (_0x31e450.open ? 0x1 : 0x2);
                        let _0x35a75b = _0x31e450.x + _0x2b2ef4 * _0x21df0e;
                        let _0x32ae48 = _0x31e450.y + _0x2b2ef4 * _0x1c4fbe;
                        const _0x146e59 = {
                            'r': 0x0,
                            'g': 0x0,
                            'b': 0x0
                        };
                        const _0x13d2d6 = {
                            'r': 0xff,
                            'g': 0xff,
                            'b': 0xff
                        };
                        const _0x39037e = {
                            'ox': _0x35a75b,
                            'oy': _0x32ae48,
                            'nx': _0x35a75b + _0x1c4fbe * _0x290c4f * 0x3c,
                            'ny': _0x32ae48 + _0x21df0e * _0x290c4f * 0x3c,
                            size: _0x2b5ecb,
                            'd': 0.016666666666666666,
                            fade: 0xa,
                            'color': _0x31e450.open ? _0x146e59 : _0x13d2d6
                        };
                        _0x459fc9.particlesUnder.push(_0x459fc9.createParticle(_0x39037e));
                    }
                    _0x438d13 = _0x438d13 / 0x5dc;
                    _0x438d13 = _0x438d13 - Math.floor(_0x438d13);
                    for (let _0x58a017 = 0x0; _0x58a017 < 0x3; _0x58a017++) {
                        let _0x3cb27a = 0x1 - (_0x438d13 + _0x58a017) / 0x3;
                        let _0x21b6bb = 0x190 * (0x1 - Math.pow(_0x3cb27a, 2.5));
                        const _0x21f560 = {
                            'r': 0x0,
                            'g': 0x0,
                            'b': 0x0
                        };
                        _0x459fc9.setFillStroke(_0x21f560, _0x3cb27a / 0xa);
                        _0x59faa3.beginPath();
                        _0x59faa3.rect(-0x1e - _0x21b6bb / 0x4, -_0x2b8e70, 0x1e + _0x21b6bb / 0x4, 0x2 * _0x2b8e70);
                        _0x59faa3.fill();
                        _0x59faa3.stroke();
                        _0x59faa3.closePath();
                    }
                    for (let _0x10f190 = 0x0; _0x10f190 < 0x3; _0x10f190++) {
                        let _0x1a1e83 = 0x1 - (_0x438d13 + _0x10f190) / 0x3;
                        let _0x121076 = 0x190 * (0x1 - Math.pow(_0x1a1e83, 2.5));
                        let _0x316cfb = _0x31e450.open ? 0x0 : 0xff;
                        const _0x29f67c = {
                            'r': _0x316cfb,
                            'g': _0x316cfb,
                            'b': _0x316cfb
                        };
                        _0x459fc9.setFillStroke(_0x29f67c, _0x1a1e83 / 0xa);
                        _0x59faa3.beginPath();
                        _0x59faa3.rect(0x0, -_0x2b8e70, 0x1e + _0x121076 / (_0x31e450.open ? 0x4 : 0x2), 0x2 * _0x2b8e70);
                        _0x59faa3.fill();
                        _0x59faa3.stroke();
                        _0x59faa3.closePath();
                    }
                    _0x59faa3.fillStyle = _0x59faa3.strokeStyle = "rgb(0, 0, 0)";
                    _0x59faa3.beginPath();
                    _0x59faa3.rect(-0x1e, -_0x2b8e70, 0x3c, 0x2 * _0x2b8e70);
                    _0x59faa3.fill();
                    _0x59faa3.stroke();
                    _0x59faa3.closePath();
                    _0x438d13 = _0x459fc9.now / 0x1388 % (0x2 * Math.PI);
                    let _0x2c3f44 = _0x59faa3.getTransform();
                    let _0x4400be = Math.floor((_0x31e450.length - 0x32) / 0x2d);
                    for (let _0x255839 = -_0x4400be; _0x255839 <= _0x4400be + 0x1; _0x255839++) {
                        _0x59faa3.setTransform(_0x2c3f44);
                        _0x59faa3.translate(0x12, 0x2d * (_0x255839 - 0.5));
                        _0x59faa3.rotate(_0x438d13 * (0x1 - 0x2 * (_0x255839 % 0x2 === 0x0)));
                        const _0x4f3d35 = {
                            'r': 0x0,
                            'g': 0x0,
                            'b': 0x0
                        };
                        const _0x5ed07b = {
                            color: _0x4f3d35,
                            size1: 0x7,
                            'size2': 0x1e,
                            sides: 0x7
                        };
                        _0x459fc9.drawStarShape(_0x5ed07b);
                    }
                    break;
            }
            _0x59faa3.setTransform(_0x18a49c);
        },
        'darknessPolygon': function (_0x161613, _0x4de978) {
            const _0x18d8d8 = _0x459fc9.ctx.darknessCanvas;
            _0x18d8d8.lineJoin = _0x18d8d8.lineCap = 'round';
            _0x18d8d8.lineWidth = 0x5;
            let _0x478dc3 = _0x161613.d || 0x0;
            let _0x27bda8 = _0x161613.sides < 0x0 ? [0x3, 0x6, 0x6, 0xa, 0x6][-_0x161613.sides - 0x1] : _0x161613.sides;
            if (_0x4de978 && _0x27bda8 && _0x27bda8 != 0x4 && _0x27bda8 != 0x8) {
                _0x478dc3 += Math.PI / _0x27bda8;
            }
            let _0x4043d4 = _0x161613.x ? _0x161613.x : 0x0;
            let _0x4dae9c = _0x161613.y ? _0x161613.y : 0x0;
            _0x18d8d8.fillStyle = "rgba(0, 0, 0, " + (_0x161613.alpha >= 0x0 ? _0x161613.alpha : 0x1) + ')';
            _0x18d8d8.beginPath();
            if (_0x27bda8 === 0x0 && _0x161613.size > 2.5) {
                _0x18d8d8.arc(_0x4043d4, _0x4dae9c, _0x161613.size - 2.5, 0x0, 0x2 * Math.PI);
            } else {
                let _0x161cc6 = 0x0;
                let _0x4473a4 = 0x2 * Math.PI;
                for (let _0x4c83a8 = _0x4473a4 / _0x27bda8; _0x161cc6 < _0x4473a4; _0x161cc6 += _0x4c83a8) {
                    _0x18d8d8.lineTo(_0x4043d4 + _0x161613.size * Math.sin(_0x161cc6 + _0x478dc3), _0x4dae9c - _0x161613.size * Math.cos(_0x161cc6 + _0x478dc3));
                }
            }
            _0x18d8d8.fill();
            _0x18d8d8.closePath();
        },
        'darknessBarrels': function (_0x5292ae) {
            if (_0x5292ae.barrels[0x0]) {
                const _0x3751db = _0x459fc9.ctx.darknessCanvas;
                _0x3751db.fillStyle = _0x3751db.strokeStyle = "rgb(0, 0, 0)";
                _0x3751db.lineWidth = 0x2 * _0x5292ae.size;
                _0x3751db.lineJoin = _0x3751db.lineCap = "round";
                let _0x17a010 = _0x3751db.getTransform();
                _0x3751db.translate(_0x5292ae.x, _0x5292ae.y);
                _0x3751db.rotate(_0x5292ae.d);
                let _0x1832b1 = _0x3751db.getTransform();
                _0x3751db.beginPath();
                for (let _0x129249 = _0x5292ae.barrels.length - 0x1; _0x129249 >= 0x0; _0x129249--) {
                    _0x3751db.setTransform(_0x1832b1);
                    let _0x2f124a = _0x5292ae.barrels[_0x129249];
                    _0x3751db.rotate(_0x2f124a.d);
                    _0x3751db.translate(_0x2f124a.x, _0x2f124a.y);
                    let _0x4e4539 = (_0x2f124a.width + 0x1) * _0x5292ae.size * 0x2;
                    let _0x51c2fb = (_0x2f124a.height + 0x1) * _0x5292ae.size * 0x4;
                    _0x3751db.moveTo(-_0x4e4539 * 0.2, 0x0);
                    _0x3751db.lineTo(-_0x4e4539, _0x51c2fb);
                    _0x3751db.lineTo(_0x4e4539, _0x51c2fb);
                    _0x3751db.lineTo(_0x4e4539 * 0.2, 0x0);
                }
                _0x3751db.fill();
                _0x3751db.stroke();
                _0x3751db.closePath();
                _0x3751db.setTransform(_0x17a010);
            }
        },
        'drawRegularPolygon': function (_0x1064df) {
            if (_0x1064df.sides < 0x2 && _0x1064df.sides !== 0x0) {
                return;
            }
            _0x59faa3.lineJoin = _0x59faa3.lineCap = "round";
            _0x59faa3.lineWidth = 0x5;
            let _0x2e1c06 = _0x1064df.d || 0x0;
            let _0xfb1f82 = 0x0;
            if (_0x1064df.alpha < 0x1) {
                _0xfb1f82 = 2.5 / Math.sin(Math.PI / 0x2 - Math.PI / _0x1064df.sides);
            }
            let _0x54d55e = _0x1064df.x ? _0x1064df.x : 0x0;
            let _0x3a90f = _0x1064df.y ? _0x1064df.y : 0x0;
            _0x459fc9.setFillStroke(_0x1064df.color, _0x1064df.alpha, _0x1064df.strokeAlpha || _0x1064df.alpha);
            let _0x269cb7 = Math.abs(0x1 / _0x1064df.sides) || 0x0;
            if (!_0x1064df.noFill) {
                _0x59faa3.beginPath();
                if (_0x1064df.sides === 0x0 && _0x1064df.size > 2.5) {
                    _0x59faa3.arc(_0x54d55e, _0x3a90f, _0x1064df.size - 2.5, 0x0, 0x2 * Math.PI);
                } else {
                    let _0x252dee = 0x0;
                    let _0x2333a9 = 0x2 * Math.PI;
                    for (let _0xa49a06 = _0x2333a9 * _0x269cb7; _0x252dee < _0x2333a9; _0x252dee += _0xa49a06) {
                        _0x59faa3.lineTo(_0x54d55e + (_0x1064df.size - _0xfb1f82) * Math.sin(_0x252dee + _0x2e1c06), _0x3a90f - (_0x1064df.size - _0xfb1f82) * Math.cos(_0x252dee + _0x2e1c06));
                    }
                }
                _0x59faa3.fill();
                _0x59faa3.closePath();
            }
            if (!_0x1064df.noStroke) {
                _0x59faa3.beginPath();
                if (_0x1064df.sides === 0x0) {
                    _0x59faa3.arc(_0x54d55e, _0x3a90f, _0x1064df.size, 0x0, 0x2 * Math.PI);
                } else {
                    let _0x1c4a6b = Math.sin(_0x2e1c06);
                    let _0x35af6e = Math.cos(_0x2e1c06);
                    _0x59faa3.moveTo(_0x54d55e + _0x1064df.size * _0x1c4a6b, _0x3a90f - _0x1064df.size * _0x35af6e);
                    let _0x4dd0b6 = 0x2 * Math.PI;
                    for (let _0x1afefd = _0x4dd0b6 * _0x269cb7; _0x1afefd < _0x4dd0b6; _0x1afefd += _0x1afefd) {
                        _0x59faa3.lineTo(_0x54d55e + _0x1064df.size * Math.sin(_0x1afefd + _0x2e1c06), _0x3a90f - _0x1064df.size * Math.cos(_0x1afefd + _0x2e1c06));
                    }
                    _0x59faa3.lineTo(_0x54d55e + _0x1064df.size * _0x1c4a6b, _0x3a90f - _0x1064df.size * _0x35af6e);
                }
                _0x59faa3.stroke();
                _0x59faa3.closePath();
            }
        },
        'getRadiantColor': function (_0x5a9e69, _0x27c665) {
            return _0x27c665 ? _0x459fc9.averageColors(_0x5a9e69, _0x459fc9.radiantColor, _0x27c665 / (_0x27c665 + 0x1)) : _0x5a9e69;
        },
        'drawPlatonic': function (_0x5f28f0) {
            let _0x11b8c6;
            if (_0x5f28f0.sides === -0x1) {
                _0x11b8c6 = [[0x0, 0x0, 0x1], [0xc, 0x0], [0xc, 0x78, 0x1], [0x0, 0x0], [0xc, 0xf0]];
            } else if (_0x5f28f0.sides === -0x3) {
                _0x11b8c6 = [[0xc, 0x3c, 0x1], [0xc, 0xb4], [0xc, 0x12c], [0xc, 0x3c]];
            } else if (_0x5f28f0.sides === -0x2) {
                _0x11b8c6 = [[0x0, 0x0, 0x1], [0xc, 0x0], [0xc, 0x78, 0x1], [0x0, 0x0], [0xc, 0xf0]];
            } else if (_0x5f28f0.sides === -0x5) {
                _0x11b8c6 = [[0x8, 0x3c, 0x1], [0xc, 0x0], [0x8, 0x12c], [0xc, 0xf0], [0x8, 0xb4], [0xc, 0x78], [0x8, 0x3c], [0x8, 0x12c], [0x8, 0xb4], [0x8, 0x3c], [0xc, 0x3c], [0x8, 0x12c, 0x1], [0xc, 0x12c], [0x8, 0xb4, 0x1], [0xc, 0xb4]];
            } else if (_0x5f28f0.sides === -0x4) {
                _0x11b8c6 = [[0xc, 0x24, 0x1], [0x9, 0x24], [0x9, 0x6c], [0xc, 0x6c], [0x9, 0x6c, 0x1], [0x9, 0xb4], [0xc, 0xb4], [0x9, 0xb4, 0x1], [0x9, 0xfc], [0xc, 0xfc], [0x9, 0xfc, 0x1], [0x9, 0x144], [0xc, 0x144], [0x9, 0x144, 0x1], [0x9, 0x24]];
            }
            if (_0x11b8c6) {
                _0x59faa3.rotate(_0x5f28f0.d);
                const _0x110a2d = {
                    'r': 0xff,
                    'g': 0xff,
                    'b': 0xff
                };
                _0x5f28f0._color = _0x110a2d;
                _0x59faa3.beginPath();
                let _0x401e91 = _0x5f28f0.size / 0xc;
                let _0x5a69a0 = 0x0;
                for (let _0xb4bf1c = _0x11b8c6.length; _0x5a69a0 < _0xb4bf1c; _0x5a69a0++) {
                    let _0x98e676 = _0x11b8c6[_0x5a69a0];
                    let _0x59bb8e = _0x98e676[0x1] * Math.PI / 0xb4;
                    if (_0x98e676[0x2]) {
                        _0x59faa3.moveTo(_0x98e676[0x0] * Math.sin(_0x59bb8e) * _0x401e91, -_0x98e676[0x0] * Math.cos(_0x59bb8e) * _0x401e91);
                    } else {
                        _0x59faa3.lineTo(_0x98e676[0x0] * Math.sin(_0x59bb8e) * _0x401e91, -_0x98e676[0x0] * Math.cos(_0x59bb8e) * _0x401e91);
                    }
                }
                _0x59faa3.stroke();
                _0x59faa3.closePath();
            }
        },
        'polygonCount': 0x0,
        'drawPolygon': function (_0xbf7696) {
            let _0x1c2e61 = _0xbf7696.color;
            if (_0xbf7696.radiant) {
                _0x1c2e61 = _0xbf7696.radiant ? _0x459fc9.averageColors(_0x1c2e61, _0x459fc9.radiantColor, _0xbf7696.radiant / (_0xbf7696.radiant + 0x1)) : _0x1c2e61;
            }
            _0xbf7696.renderColor = _0x1c2e61;
            if (_0xbf7696.damageFlash > 0.05) {
                _0x1c2e61 = _0x459fc9.lighten(_0x1c2e61, _0xbf7696.damageFlash * (0x3c + 0x5 * (0x2 * Math.random() - 0x1)));
            }
            let _0x100b83 = _0x59faa3.getTransform();
            _0x59faa3.translate(_0xbf7696.x, _0xbf7696.y);
            _0x459fc9.scaleFade(_0xbf7696.fadeTime);
            let _0x34d27a = _0xbf7696.sides;
            if (_0x34d27a < 0x0) {
                _0x34d27a = [0x3, 0x6, 0x6, 0xa, 0x6][-_0x34d27a - 0x1] || 0x0;
            }
            const _0xfea0e3 = {
                color: _0x1c2e61,
                sides: _0x34d27a,
                size: _0xbf7696.size,
                'd': _0xbf7696.d
            };
            _0x459fc9.drawRegularPolygon(_0xfea0e3);
            _0x459fc9.drawPlatonic(_0xbf7696);
            _0x59faa3.setTransform(_0x100b83);
        },
        'drawRadiantAura': function (_0x233789, _0x667289, _0x1df567, _0x60ae77) {
            if (_0x233789.radiant > 0x0) {
                if (_0x459fc9.radiantParticles) {
                    let _0x2aaffd = 0x0;
                    for (let _0x551229 = _0x459fc9.round(0x1 * (_0x60ae77 || 0x1) * _0x233789.size * 0.02 * (0x1 + (_0x233789.radiant < 0x5 ? _0x233789.radiant * 0.2 : 0x1))); _0x2aaffd < _0x551229; _0x2aaffd++) {
                        let _0x3035b1 = Math.random() * 0x2 * Math.PI;
                        let _0x44ffbd = Math.sin(_0x3035b1);
                        let _0x2ff404 = Math.cos(_0x3035b1);
                        let _0x30a94e = Math.random();
                        let _0x522402 = Math.random() * 0x2 * Math.PI;
                        let _0x251630 = Math.sin(_0x522402);
                        let _0x2c4af2 = Math.cos(_0x522402);
                        _0x30a94e = (0x1 - _0x30a94e * _0x30a94e) * (_0x233789.size - 0x5);
                        let _0x47c6f4 = _0x233789.x + _0x44ffbd * _0x30a94e;
                        let _0x38ed8d = _0x233789.y + _0x2ff404 * _0x30a94e;
                        _0x459fc9.particlesOver.push(_0x459fc9.createParticle({
                            'ox': _0x47c6f4,
                            'oy': _0x38ed8d,
                            'nx': _0x47c6f4 + _0x251630 * 0xf,
                            'ny': _0x38ed8d + _0x2c4af2 * 0xf,
                            'size': 0x5 + 0x5 * Math.random() * (0x1 + Math.sqrt(_0x233789.size) * 0.1 + _0x233789.radiant * 0.15),
                            'd': 0.025,
                            'fade': 0x14,
                            'color': _0x233789.color,
                            'radiant': _0x233789.radiant,
                            'maxAlpha': 0x1
                        }));
                    }
                }
                if (_0x233789.radiant > 0x1) {
                    const _0x5199da = {
                        'sides': _0x233789.outerSides >= 0x0 ? _0x233789.outerSides : _0x233789.sides < 0x0 ? [0x3, 0x6, 0x6, 0xa, 0x6][-_0x233789.sides - 0x1] || 0x0 : _0x233789.sides,
                        outerSides: _0x233789.outerSides,
                        size: _0x233789.size,
                        'outerSize': _0x233789.outerSize
                    };
                    let _0x5c0549 = _0x59faa3.getTransform();
                    _0x59faa3.translate(_0x233789.x, _0x233789.y);
                    _0x59faa3.rotate(_0x233789.d);
                    _0x459fc9.scaleFade(_0x233789.fadeTime);
                    let _0x9857c9 = _0x233789.radiant ? _0x459fc9.averageColors(_0x233789.color, _0x459fc9.radiantColor, _0x233789.radiant / (_0x233789.radiant + 0x1)) : _0x233789.color;
                    const _0x10d303 = {
                        'r': 0xff,
                        'g': 0xff,
                        'b': 0xff
                    };
                    _0x9857c9 = _0x459fc9.averageColors(_0x9857c9, _0x10d303, 0.5);
                    let _0x5cb689 = _0x5199da.size * (_0x5199da.outerSize || 0x1);
                    let _0x2af857 = _0x5199da.outerSides || _0x5199da.sides;
                    if (_0x2af857 && _0x667289 && (!_0x1df567 || _0x2af857 !== 0x4 && _0x2af857 !== 0x8)) {
                        _0x59faa3.rotate(Math.PI / _0x2af857);
                    }
                    _0x459fc9.drawRegularPolygon({
                        'color': _0x9857c9,
                        'sides': _0x5199da.outerSides >= 0x0 ? _0x5199da.outerSides : _0x5199da.sides,
                        'size': _0x5cb689 * (1.2 + 0.1 * (0x1 + Math.sin(_0x459fc9.now / 0x320 * ((0x2 + _0x233789.radiant) / 0x4))) * _0x233789.radiant),
                        'alpha': 0x1 - 0.7 / ((0x2 + _0x233789.radiant) / 0x3)
                    });
                    if (_0x233789.radiant > 0x2) {
                        if (_0x233789.radiant > 0x3) {
                            let _0x3a5d19 = _0x59faa3.getTransform();
                            _0x59faa3.rotate(0x14 * Math.cos(_0x459fc9.now / 0x61a8) * (0x1 + _0x233789.radiant) / 0x2 % (0x2 * Math.PI) - _0x233789.d);
                            let _0x4b6fdc = 1.5 + _0x233789.radiant / 0x5 + 0.06 * (0x1 + Math.sin(_0x459fc9.now / 0xfa0 * ((0x1 + _0x233789.radiant) / 0x2))) * _0x233789.radiant;
                            const _0x19294c = {
                                size1: _0x5cb689 * _0x4b6fdc,
                                size2: 0.4 * _0x5cb689,
                                color: _0x9857c9,
                                sides: 0x3
                            };
                            _0x459fc9.drawStarShape(_0x19294c);
                            _0x59faa3.setTransform(_0x3a5d19);
                        }
                        let _0x3ce43f = _0x459fc9.now / 0x7d0 * (0x1 + _0x233789.radiant) % (0xc * Math.PI);
                        _0x59faa3.rotate(_0x3ce43f / 0x2 - _0x233789.d);
                        let _0x39be5a = (_0x233789.radiant + 0x2) / 0xa;
                        let _0x3cd6bd = _0x5cb689 * (_0x39be5a * Math.cos(_0x459fc9.now / 0x1f4 + Math.PI) + 0x1);
                        let _0x3519ff = _0x5cb689 * (_0x39be5a * Math.cos(_0x459fc9.now / 0x1f4) + 0x1);
                        _0x2af857 = 0x6;
                        let _0xd6c9e3 = 0x2 + (_0x5199da.sides >= 0x3 && _0x5199da.sides < 0x6 ? 0x6 - _0x5199da.sides : 0x0) / 0x2;
                        const _0x4902fe = {
                            size1: _0x3cd6bd,
                            size2: _0x3cd6bd / _0xd6c9e3,
                            color: _0x9857c9,
                            sides: _0x2af857
                        };
                        _0x459fc9.drawStarShape(_0x4902fe);
                        _0x59faa3.rotate(-_0x3ce43f);
                        const _0x12602b = {
                            size1: _0x3519ff,
                            size2: _0x3519ff / _0xd6c9e3,
                            color: _0x9857c9,
                            sides: _0x2af857
                        };
                        _0x459fc9.drawStarShape(_0x12602b);
                    }
                    _0x59faa3.setTransform(_0x5c0549);
                }
            }
        },
        'drawStarShape': function (_0x186f4b) {
            _0x59faa3.lineJoin = _0x59faa3.lineCap = "round";
            _0x59faa3.lineWidth = 0x5;
            _0x59faa3.beginPath();
            let _0x2e52d1 = 0x0;
            let _0x345277 = 0x2 * Math.PI;
            for (let _0x3a6db1 = _0x345277 / _0x186f4b.sides; _0x2e52d1 < _0x345277; _0x2e52d1 += _0x3a6db1) {
                _0x59faa3.lineTo(_0x186f4b.size1 * Math.sin(_0x2e52d1), -_0x186f4b.size1 * Math.cos(_0x2e52d1));
                _0x59faa3.lineTo(_0x186f4b.size2 * Math.sin(_0x2e52d1 + _0x3a6db1 / 0x2), -_0x186f4b.size2 * Math.cos(_0x2e52d1 + _0x3a6db1 / 0x2));
            }
            _0x59faa3.lineTo(0x0, -_0x186f4b.size1);
            _0x459fc9.setFillStroke(_0x186f4b.color, _0x186f4b.alpha);
            _0x59faa3.fill();
            _0x59faa3.stroke();
            _0x59faa3.closePath();
        },
        'barrelData': _0x2133e8,
        'drawBarrel': function (_0x2d4e2d) {
            _0x59faa3.lineJoin = _0x59faa3.lineCap = "round";
            _0x59faa3.lineWidth = 0x5;
            let _0x2d3811 = _0x59faa3.getTransform();
            _0x59faa3.rotate(_0x2d4e2d.d);
            _0x59faa3.translate(_0x2d4e2d.x, _0x2d4e2d.y);
            if (_0x2d4e2d.v >= 0x0) {
                let _0x33a548 = _0x2d4e2d.v < 0x1 ? _0x2d4e2d.v : _0x2d4e2d.v < 0x2 ? 0x2 - _0x2d4e2d.v : 0x0;
                if (_0x33a548 > 0x0) {
                    _0x59faa3.scale(0x1, 0x1 - _0x33a548 * 0.15);
                }
            }
            let _0x179f54 = _0x2d4e2d.visualType >= 0x0 ? _0x2d4e2d.visualType : _0x2d4e2d.type;
            let _0xcfa375 = _0x459fc9.barrelData[_0x179f54] || [];
            let _0x2c4dec = 0x0;
            for (let _0x3a9b12 = _0xcfa375.length; _0x2c4dec < _0x3a9b12; _0x2c4dec++) {
                let _0x1f216f = _0xcfa375[_0x2c4dec];
                let _0x2b74ac = _0x459fc9.getColor(_0x459fc9.barrelColor, _0x2d4e2d.color, _0x2d4e2d.colorAverage, _0x2d4e2d.tankColor);
                if (_0x2d4e2d.highlight) {
                    const _0x46189f = {
                        'r': 0xff,
                        'g': 0xff,
                        'b': 0x0
                    };
                    _0x2b74ac = _0x459fc9.averageColors(_0x2b74ac, _0x46189f, 0.2 + 0.1 * (0x1 + Math.sin(_0x459fc9.now / 0x12c)));
                }
                _0x459fc9.setFillStroke(_0x2b74ac, _0x2d4e2d.highlight === 0x2 ? 0.5 : 0x1, 0x1);
                _0x59faa3.beginPath();
                let _0x5526c8 = 0x0;
                for (let _0xce83a5 = _0x1f216f.points.length; _0x5526c8 < _0xce83a5; _0x5526c8++) {
                    let _0x3b0e39 = _0x1f216f.points[_0x5526c8];
                    _0x59faa3.moveTo(_0x3b0e39[0x0][0x0] * _0x2d4e2d.w, _0x3b0e39[0x0][0x1] * _0x2d4e2d.h);
                    let _0x187755 = 0x1;
                    for (let _0x46b7c2 = _0x3b0e39.length; _0x187755 < _0x46b7c2; _0x187755++) {
                        _0x59faa3.lineTo(_0x3b0e39[_0x187755][0x0] * _0x2d4e2d.w, _0x3b0e39[_0x187755][0x1] * _0x2d4e2d.h);
                    }
                    _0x59faa3.lineTo(_0x3b0e39[0x0][0x0] * _0x2d4e2d.w, _0x3b0e39[0x0][0x1] * _0x2d4e2d.h);
                }
                _0x59faa3.fill("evenodd");
                _0x59faa3.stroke();
                _0x59faa3.closePath();
            }
            _0x59faa3.setTransform(_0x2d3811);
        },
        'updateTank': function (_0x4777c5, _0x59c3dd, _0x14a95d) {
            if (_0x4777c5.fadeTime < 0x1) {
                _0x4777c5.fadeTime -= _0x14a95d * 0.006;
                if (_0x4777c5.fadeTime <= 0x0) {
                    _0x4777c5.fadeTime = 0x0;
                    let _0x406516 = _0x424e00.data.tanks.indexOf(_0x4777c5);
                    if (_0x406516 >= 0x0) {
                        _0x424e00.data.tanks.splice(_0x406516, 0x1);
                        return;
                    }
                }
            }
            if (_0x4777c5.team === 0x0) {
                if (_0x4777c5 === _0x424e00.data.me) {
                    _0x4777c5.color = _0x459fc9.teamColors[0x1];
                } else {
                    _0x4777c5.color = _0x459fc9.teamColors[0x0];
                }
            }
            _0x4777c5.x = _0x4777c5.ox + (_0x4777c5.nx - _0x4777c5.ox) * _0x424e00.lerp;
            _0x4777c5.y = _0x4777c5.oy + (_0x4777c5.ny - _0x4777c5.oy) * _0x424e00.lerp;
            _0x4777c5.size = _0x40dc30.average(_0x4777c5.size, _0x4777c5._size, 0xf);
            if (_0x4777c5._d) {
                let _0x5c9ef9 = _0x4777c5._d[0x1].length;
                if (_0x4777c5._d[0x2]) {
                    _0x4777c5._d[0x0] = 0x0;
                } else {
                    if (_0x4777c5._d[0x0] < _0x5c9ef9) {
                        _0x4777c5._d[0x0] += _0x59c3dd;
                    }
                }
                let _0x5eccce = Math.floor(_0x4777c5._d[0x0]);
                if (_0x5eccce > _0x5c9ef9 - 0x1) {
                    _0x5eccce = _0x4777c5._d[0x0] = _0x5c9ef9 - 0x1;
                }
                _0x4777c5.d = _0x40dc30.averageAngle(_0x4777c5.d, _0x4777c5._d[0x1][_0x5eccce], 0.75);
            }
            _0x4777c5.passiveFade = _0x40dc30.average(_0x4777c5.passiveFade, _0x4777c5.passive ? 0x1 : 0x0, 0x2);
            _0x4777c5.damageFlash = _0x40dc30.average(_0x4777c5.damageFlash, _0x4777c5._damageFlash, 0xf);
            if (_0x4777c5.weaponTurrets && _0x4777c5.weaponTurrets[0x0]) {
                let _0x36be06 = 0x0;
                for (let _0x46caa7 = _0x4777c5.weaponTurrets.length; _0x36be06 < _0x46caa7; _0x36be06++) {
                    let _0x2b854e = _0x4777c5.weaponTurrets[_0x36be06];
                    let _0xce0598 = {};
                    if (_0x2b854e.id >= 0x0) {
                        let _0x382bfc = _0x4777c5.turretData[_0x2b854e.id];
                        if (_0x382bfc) {
                            _0xce0598 = _0x382bfc;
                            _0xce0598.d = _0x40dc30.averageAngle(_0xce0598.d || _0xce0598._d, _0xce0598._d, 0x3);
                        }
                    }
                }
            }
            if (_0x4777c5.turrets && _0x4777c5.turrets[0x0]) {
                let _0xabf0c0 = 0x0;
                for (let _0x595b6d = _0x4777c5.turrets.length; _0xabf0c0 < _0x595b6d; _0xabf0c0++) {
                    let _0x1f9a9d = _0x4777c5.turrets[_0xabf0c0];
                    let _0x2b9d35 = {};
                    if (_0x1f9a9d.id >= 0x0) {
                        let _0x5415fb = _0x4777c5.turretData[_0x1f9a9d.id];
                        if (_0x5415fb) {
                            _0x2b9d35 = _0x5415fb;
                            _0x2b9d35.d = _0x40dc30.averageAngle(_0x2b9d35.d || _0x2b9d35._d, _0x2b9d35._d, 0x3);
                        }
                    }
                }
            }
            if (_0x4777c5._barrels && _0x4777c5._barrels[0x0]) {
                let _0x8e6554 = 0x0;
                for (let _0x1fe109 = _0x4777c5._barrels.length; _0x8e6554 < _0x1fe109; _0x8e6554++) {
                    let _0x4a11b9 = _0x4777c5._barrels[_0x8e6554].barrel;
                    let _0x3d46bc = 0x2 / _0x4a11b9.reload * _0x59c3dd;
                    if (_0x4a11b9.v > 0x1) {
                        _0x4a11b9.v -= 0.2 * _0x59c3dd;
                        if (_0x4a11b9.v < 0x1) {
                            _0x4a11b9.v = 0x1;
                        }
                    } else if (_0x4a11b9.v > 0x0) {
                        _0x4a11b9.v -= 0.05 * _0x3d46bc;
                        if (_0x4a11b9.v < 0x0) {
                            _0x4a11b9.v = 0x0;
                        }
                    }
                }
            }
        },
        'updateBullet': function (_0x1b8577, _0xc78bfe) {
            if (_0x1b8577.fadeTime < 0x1) {
                _0x1b8577.fadeTime -= _0xc78bfe * 0.006;
                if (_0x1b8577.fadeTime <= 0x0) {
                    _0x1b8577.fadeTime = 0x0;
                    let _0x463c54 = _0x424e00.data.bullets.indexOf(_0x1b8577);
                    if (_0x463c54 >= 0x0) {
                        _0x424e00.data.bullets.splice(_0x463c54, 0x1);
                        return;
                    }
                }
            } else if (_0x1b8577.fadeTime > 0x1) {
                _0x1b8577.fadeTime -= _0xc78bfe * 0.006;
                if (_0x1b8577.fadeTime < 0x1) {
                    _0x1b8577.fadeTime = 0x1;
                }
            }
            _0x1b8577.x = _0x1b8577.ox + (_0x1b8577.nx - _0x1b8577.ox) * _0x424e00.lerp;
            _0x1b8577.y = _0x1b8577.oy + (_0x1b8577.ny - _0x1b8577.oy) * _0x424e00.lerp;
            _0x1b8577.d = _0x40dc30.slideAngle(_0x1b8577.od, _0x1b8577.nd, _0x424e00.lerp);
            let _0xc973f9 = _0x1b8577.parent;
            if (_0xc973f9) {
                if (_0xc973f9.team === 0x5) {
                    _0x1b8577.color = _0x459fc9.getTankColor(_0xc973f9.team, _0x1b8577.sides);
                } else {
                    _0x1b8577.color = _0xc973f9.color;
                }
                _0x1b8577.radiant = _0xc973f9.radiant;
                let _0x219a1b = _0xc973f9._barrels[_0x1b8577.barrelId];
                if (_0x219a1b) {
                    _0x1b8577.size = _0xc973f9.size * _0x219a1b.barrel.relativeSize;
                }
            }
            if (_0x1b8577.turrets && _0x1b8577.turrets[0x0]) {
                let _0x36a738 = 0x0;
                for (let _0x22b2a8 = _0x1b8577.turrets.length; _0x36a738 < _0x22b2a8; _0x36a738++) {
                    let _0x11876e = _0x1b8577.turrets[_0x36a738];
                    let _0x572b96 = {};
                    if (_0x11876e.id >= 0x0) {
                        let _0x3a384b = _0x1b8577.turretData[_0x11876e.id];
                        if (_0x3a384b) {
                            _0x572b96 = _0x3a384b;
                            _0x572b96.d = _0x40dc30.averageAngle(_0x572b96.d || _0x572b96._d, _0x572b96._d, 0x3);
                        }
                    }
                }
            }
        },
        'updatePolygon': function (_0x222c11, _0x35c453) {
            if (_0x222c11.fadeTime < 0x1) {
                _0x222c11.fadeTime -= _0x35c453 * 0.006;
                if (_0x222c11.fadeTime <= 0x0) {
                    _0x222c11.fadeTime = 0x0;
                    let _0x282a21 = _0x424e00.data.polygons.indexOf(_0x222c11);
                    if (_0x282a21 >= 0x0) {
                        _0x424e00.data.polygons.splice(_0x282a21, 0x1);
                        return;
                    }
                }
            } else if (_0x222c11.fadeTime > 0x1) {
                _0x222c11.fadeTime -= _0x35c453 * 0.006;
                if (_0x222c11.fadeTime < 0x1) {
                    _0x222c11.fadeTime = 0x1;
                }
            }
            _0x222c11.x = _0x222c11.ox + (_0x222c11.nx - _0x222c11.ox) * _0x424e00.lerp;
            _0x222c11.y = _0x222c11.oy + (_0x222c11.ny - _0x222c11.oy) * _0x424e00.lerp;
            _0x222c11.d = _0x40dc30.slideAngle(_0x222c11.od, _0x222c11.nd, _0x424e00.lerp);
            _0x222c11.color = _0x459fc9.averageColors(_0x222c11.color, _0x222c11._color, 0.1);
            _0x222c11.size = _0x40dc30.average(_0x222c11.size, _0x222c11._size, 0x6);
            _0x222c11.damageFlash = _0x40dc30.average(_0x222c11.damageFlash, _0x222c11._damageFlash, 0xf);
        },
        'drawCircle': function (_0x4b8d7f) {
            _0x59faa3.beginPath();
            _0x59faa3.ellipse(_0x4b8d7f.x, _0x4b8d7f.y, _0x4b8d7f.size + 2.5, _0x4b8d7f.size + 2.5, 0x0, 0x0, 0x2 * Math.PI);
            _0x59faa3.fill();
            _0x59faa3.closePath();
            if (_0x4b8d7f.fillOnly) {
                return;
            }
            _0x59faa3.beginPath();
            _0x59faa3.ellipse(_0x4b8d7f.x, _0x4b8d7f.y, _0x4b8d7f.size, _0x4b8d7f.size, 0x0, 0x0, 0x2 * Math.PI);
            _0x59faa3.stroke();
            _0x59faa3.closePath();
        },
        'drawWormhole': function (_0x383b24) {
            _0x383b24.size = _0x40dc30.average(_0x383b24.size, _0x383b24._size, 0x5);
            _0x59faa3.lineJoin = _0x59faa3.lineCap = "round";
            _0x59faa3.lineWidth = 0x5;
            let _0x217623 = _0x59faa3.getTransform();
            _0x59faa3.translate(_0x383b24.x, _0x383b24.y);
            let _0x1c0cf5 = _0x459fc9.now / 0x3e8;
            let _0xf19967;
            const _0xc11840 = {
                'r': 0x0,
                'g': 0x0,
                'b': 0x0
            };
            let _0x2d3eb9 = _0x459fc9.averageColors(_0x459fc9.radiantColor, _0xc11840, 0.15);
            switch (_0x383b24.type) {
                case 0x0:
                    let _0x7326f3 = 0x0;
                    for (let _0x1163cf = _0x459fc9.round(0.4); _0x7326f3 < _0x1163cf; _0x7326f3++) {
                        let _0xb2925a = Math.random() * 0x2 * Math.PI;
                        let _0x2fef8f = Math.cos(_0xb2925a);
                        let _0x434c69 = Math.sin(_0xb2925a);
                        let _0x5d342c = (0x1e + Math.random() * 0x14) * _0x383b24.size / (_0x383b24.ruptured ? 0x3c : 0x4b);
                        let _0x161713 = _0x383b24.size - _0x5d342c;
                        let _0x3aab4b = _0x383b24.x + _0x2fef8f * _0x161713;
                        let _0x402879 = _0x383b24.y + _0x434c69 * _0x161713;
                        let _0x585485 = 0x2 + Math.random() * (0x1 + 0x2 * _0x383b24.ruptured);
                        const _0x44a194 = {
                            'r': 0xff,
                            'g': 0xff,
                            'b': 0xff
                        };
                        const _0x1be166 = {
                            'ox': _0x3aab4b,
                            'oy': _0x402879,
                            'nx': _0x3aab4b + _0x2fef8f * _0x585485 * 0x4b,
                            'ny': _0x402879 + _0x434c69 * _0x585485 * 0x4b,
                            size: _0x5d342c,
                            'd': 0.013333333333333334,
                            fade: 0xa,
                            color: _0x383b24.color || _0x44a194,
                            radiant: _0x383b24.radiant
                        };
                        _0x459fc9.particlesUnder.push(_0x459fc9.createParticle(_0x1be166));
                    }
                    _0x1c0cf5 *= 0.6666666666666666;
                    _0x1c0cf5 = _0x1c0cf5 - Math.floor(_0x1c0cf5);
                    const _0x57f8ff = {
                        'r': 0xff,
                        'g': 0xff,
                        'b': 0xff
                    };
                    const _0x20aab3 = {
                        'r': 0xff,
                        'g': 0xff,
                        'b': 0xff
                    };
                    _0x2d3eb9 = _0x383b24.radiant ? _0x459fc9.averageColors(_0x2d3eb9, _0x57f8ff, 0.75) : _0x383b24.color || _0x20aab3;
                    for (let _0x26da13 = 0x1; _0x26da13 >= 0x0; _0x26da13--) {
                        let _0x1a75d6 = (_0x26da13 + _0x1c0cf5) / 0x2;
                        _0x459fc9.setFillStroke(_0x2d3eb9, (0x1 - _0x1a75d6) / 0x7);
                        const _0x2fb587 = {
                            'x': 0x0,
                            'y': 0x0,
                            size: _0x383b24.size * (0x1 + 2.5 * _0x1a75d6)
                        };
                        _0x459fc9.drawCircle(_0x2fb587);
                    }
                    _0xf19967 = (0x2 - (_0x383b24.fadeTime + 0x1 || 0x2)) * 0xff;
                    _0x1c0cf5 = _0x459fc9.now;
                    if (_0x383b24.ruptured) {
                        let _0x451f25 = _0x59faa3.getTransform();
                        _0x59faa3.rotate(_0x1c0cf5 / 0x1388 % (0x2 * Math.PI));
                        const _0x897fa1 = {
                            size1: _0x383b24.size * 0.4,
                            size2: _0x383b24.size * 0x5,
                            color: _0x2d3eb9,
                            sides: 0x3
                        };
                        _0x459fc9.drawStarShape(_0x897fa1);
                        _0x59faa3.setTransform(_0x451f25);
                        let _0x121d23 = _0x459fc9.now / 0x1f4 % (0xc * Math.PI);
                        _0x59faa3.rotate(_0x121d23 / 0x2);
                        let _0x567856 = 1.5 * _0x383b24.size * (Math.cos(_0x459fc9.now / 0x1f4 + Math.PI) / 0x2 + 0x1);
                        let _0x4bdb80 = 1.5 * _0x383b24.size * (Math.cos(_0x459fc9.now / 0x1f4) / 0x2 + 0x1);
                        const _0x36df54 = {
                            'size1': _0x567856,
                            size2: _0x567856 / 0x2,
                            'color': _0x2d3eb9,
                            sides: 0x6
                        };
                        _0x459fc9.drawStarShape(_0x36df54);
                        _0x59faa3.rotate(-_0x121d23);
                        const _0x1e5fa3 = {
                            size1: _0x4bdb80,
                            size2: _0x4bdb80 / 0x2,
                            color: _0x2d3eb9,
                            sides: 0x6
                        };
                        _0x459fc9.drawStarShape(_0x1e5fa3);
                        _0x59faa3.setTransform(_0x451f25);
                    }
                    const _0x4e6667 = {
                        'r': 0x0,
                        'g': 0x0,
                        'b': 0x0
                    };
                    _0x459fc9.setFillStroke(_0x383b24.radiant ? _0x459fc9.averageColors(_0x459fc9.averageColors(_0x459fc9.radiantColor, _0x4e6667, 0.25), _0x2d3eb9, _0xf19967 / 0xff) : {
                        'r': _0xf19967,
                        'g': _0xf19967,
                        'b': _0xf19967
                    });
                    const _0x3036fd = {
                        'x': 0x0,
                        'y': 0x0,
                        size: _0x383b24.size
                    };
                    _0x459fc9.drawCircle(_0x3036fd);
                    if (_0x383b24.ruptured) {
                        let _0x25a280 = _0x59faa3.getTransform();
                        _0x59faa3.rotate(_0x459fc9.now / 0x7d0 % (0x2 * Math.PI));
                        for (let _0x33665c = 0x0; _0x33665c < 0x6; _0x33665c++) {
                            _0x59faa3.rotate(Math.PI / 0x3);
                            _0x59faa3.beginPath();
                            _0x59faa3.moveTo(-_0x383b24.size / 0x4, 0x0);
                            _0x59faa3.lineTo(0x0, _0x383b24.size * 1.5);
                            _0x59faa3.lineTo(_0x383b24.size / 0x4, 0x0);
                            _0x59faa3.stroke();
                            _0x59faa3.closePath();
                        }
                        _0x59faa3.rotate(-(_0x459fc9.now / 0x3e8) % (0x2 * Math.PI));
                        for (let _0x169f4d = 0x0; _0x169f4d < 0x8; _0x169f4d++) {
                            _0x59faa3.rotate(Math.PI / 0x4);
                            _0x59faa3.beginPath();
                            _0x59faa3.moveTo(-_0x383b24.size / 0x4, 0x0);
                            _0x59faa3.lineTo(0x0, _0x383b24.size * 1.3);
                            _0x59faa3.lineTo(_0x383b24.size / 0x4, 0x0);
                            _0x59faa3.stroke();
                            _0x59faa3.closePath();
                        }
                        _0x59faa3.setTransform(_0x25a280);
                        const _0x17104d = {
                            'x': 0x0,
                            'y': 0x0,
                            size: _0x383b24.size
                        };
                        _0x459fc9.drawCircle(_0x17104d);
                        _0x59faa3.rotate(_0x459fc9.now / 0x7d0 % (0x2 * Math.PI));
                        for (let _0x3148ed = 0x0; _0x3148ed < 0x6; _0x3148ed++) {
                            _0x59faa3.rotate(Math.PI / 0x3);
                            _0x59faa3.beginPath();
                            _0x59faa3.moveTo(-_0x383b24.size / 0x4 + 4.5, 0x0);
                            _0x59faa3.lineTo(0x0, _0x383b24.size * 1.5 - 0x5);
                            _0x59faa3.lineTo(_0x383b24.size / 0x4 - 4.5, 0x0);
                            _0x59faa3.fill();
                            _0x59faa3.closePath();
                        }
                        _0x59faa3.rotate(-(_0x459fc9.now / 0x3e8) % (0x2 * Math.PI));
                        for (let _0x32c3b0 = 0x0; _0x32c3b0 < 0x8; _0x32c3b0++) {
                            _0x59faa3.rotate(Math.PI / 0x4);
                            _0x59faa3.beginPath();
                            _0x59faa3.moveTo(-_0x383b24.size / 0x4 + 0x3, 0x0);
                            _0x59faa3.lineTo(0x0, _0x383b24.size * 1.3 - 0x4);
                            _0x59faa3.lineTo(_0x383b24.size / 0x4 - 0x3, 0x0);
                            _0x59faa3.fill();
                            _0x59faa3.closePath();
                        }
                    }
                    break;
                case 0x1:
                    let _0x6d88f8 = 0x0;
                    for (let _0x35ca88 = _0x459fc9.round(0.7); _0x6d88f8 < _0x35ca88; _0x6d88f8++) {}
                    const _0x5debcd = {
                        'r': 0xff,
                        'g': 0xff,
                        'b': 0xff
                    };
                    let _0x1cf0c2 = _0x459fc9.averageColors(_0x459fc9.radiantColor, _0x5debcd, 0.5);
                    if (_0x383b24.ruptured) {
                        let _0x10e0f3 = _0x59faa3.getTransform();
                        _0x1c0cf5 = _0x459fc9.now;
                        _0x59faa3.rotate(_0x1c0cf5 / 0x1388 % (0x2 * Math.PI));
                        const _0x2aeb1b = {
                            'size1': _0x383b24.size * 0.4,
                            size2: _0x383b24.size * 0x5,
                            color: _0x1cf0c2,
                            'sides': 0x3
                        };
                        _0x459fc9.drawStarShape(_0x2aeb1b);
                        _0x59faa3.setTransform(_0x10e0f3);
                        let _0x49b8a8 = _0x459fc9.now / 0x1f4 % (0xc * Math.PI);
                        _0x59faa3.rotate(_0x49b8a8 / 0x2);
                        let _0x35d3a1 = 1.5 * _0x383b24.size * (Math.cos(_0x459fc9.now / 0x1f4 + Math.PI) / 0x2 + 0x1);
                        let _0x28bbfd = 1.5 * _0x383b24.size * (Math.cos(_0x459fc9.now / 0x1f4) / 0x2 + 0x1);
                        const _0x305182 = {
                            size1: _0x35d3a1,
                            size2: _0x35d3a1 / 0x2,
                            color: _0x1cf0c2,
                            'sides': 0x6
                        };
                        _0x459fc9.drawStarShape(_0x305182);
                        _0x59faa3.rotate(-_0x49b8a8);
                        const _0x1260d7 = {
                            size1: _0x28bbfd,
                            size2: _0x28bbfd / 0x2,
                            color: _0x1cf0c2,
                            'sides': 0x6
                        };
                        _0x459fc9.drawStarShape(_0x1260d7);
                        _0x59faa3.setTransform(_0x10e0f3);
                    }
                    _0x1c0cf5 = _0x459fc9.now / 0x3e8;
                    _0x59faa3.rotate(_0x1c0cf5 / 0x4 % (0x2 * Math.PI));
                    _0x1c0cf5 = _0x1c0cf5 - Math.floor(_0x1c0cf5);
                    for (let _0x4b79a4 = 0x1; _0x4b79a4 >= 0x0; _0x4b79a4--) {
                        let _0x2d7988 = (_0x4b79a4 + _0x1c0cf5) / 0x2;
                        _0x459fc9.setFillStroke(_0x1cf0c2, (0x1 - _0x2d7988) / 0x5);
                        const _0x2c917d = {
                            'x': 0x0,
                            'y': 0x0,
                            size: _0x383b24.size * (0x1 + 2.5 * _0x2d7988)
                        };
                        _0x459fc9.drawCircle(_0x2c917d);
                    }
                    const _0x34eed7 = {
                        'r': 0x0,
                        'g': 0x0,
                        'b': 0x0
                    };
                    _0x1cf0c2 = _0x459fc9.averageColors(_0x1cf0c2, _0x34eed7, _0x383b24.fadeTime);
                    _0x459fc9.drawStarShape({
                        'color': _0x459fc9.averageColors(_0x459fc9.radiantColor, _0x1cf0c2, 0.15000000000000002),
                        'size1': _0x383b24.size,
                        'size2': _0x383b24.size * 1.1,
                        'sides': 0xc
                    });
                    if (_0x383b24.ruptured) {
                        _0x459fc9.setFillStroke(_0x459fc9.averageColors(_0x459fc9.radiantColor, _0x1cf0c2, 0x1 + _0x1c0cf5 * 0.225));
                        let _0x57024a = _0x59faa3.getTransform();
                        _0x59faa3.rotate(_0x459fc9.now / 0x7d0 % (0x2 * Math.PI));
                        for (let _0x23d324 = 0x0; _0x23d324 < 0x6; _0x23d324++) {
                            _0x59faa3.rotate(Math.PI / 0x3);
                            _0x59faa3.beginPath();
                            _0x59faa3.moveTo(-_0x383b24.size / 0x4, 0x0);
                            _0x59faa3.lineTo(0x0, _0x383b24.size * 1.5);
                            _0x59faa3.lineTo(_0x383b24.size / 0x4, 0x0);
                            _0x59faa3.stroke();
                            _0x59faa3.closePath();
                        }
                        _0x59faa3.rotate(-(_0x459fc9.now / 0x3e8) % (0x2 * Math.PI));
                        for (let _0x448929 = 0x0; _0x448929 < 0x8; _0x448929++) {
                            _0x59faa3.rotate(Math.PI / 0x4);
                            _0x59faa3.beginPath();
                            _0x59faa3.moveTo(-_0x383b24.size / 0x4, 0x0);
                            _0x59faa3.lineTo(0x0, _0x383b24.size * 1.3);
                            _0x59faa3.lineTo(_0x383b24.size / 0x4, 0x0);
                            _0x59faa3.stroke();
                            _0x59faa3.closePath();
                        }
                        _0x59faa3.setTransform(_0x57024a);
                        const _0x150888 = {
                            'x': 0x0,
                            'y': 0x0,
                            size: _0x383b24.size - 2.5,
                            fillOnly: true
                        };
                        _0x459fc9.drawCircle(_0x150888);
                        _0x59faa3.rotate(_0x459fc9.now / 0x7d0 % (0x2 * Math.PI));
                        for (let _0x3974cf = 0x0; _0x3974cf < 0x6; _0x3974cf++) {
                            _0x59faa3.rotate(Math.PI / 0x3);
                            _0x59faa3.beginPath();
                            _0x59faa3.moveTo(-_0x383b24.size / 0x4 + 4.5, 0x0);
                            _0x59faa3.lineTo(0x0, _0x383b24.size * 1.5 - 0x5);
                            _0x59faa3.lineTo(_0x383b24.size / 0x4 - 4.5, 0x0);
                            _0x59faa3.fill();
                            _0x59faa3.closePath();
                        }
                        _0x59faa3.rotate(-(_0x459fc9.now / 0x3e8) % (0x2 * Math.PI));
                        for (let _0x201c3e = 0x0; _0x201c3e < 0x8; _0x201c3e++) {
                            _0x59faa3.rotate(Math.PI / 0x4);
                            _0x59faa3.beginPath();
                            _0x59faa3.moveTo(-_0x383b24.size / 0x4 + 0x3, 0x0);
                            _0x59faa3.lineTo(0x0, _0x383b24.size * 1.3 - 0x4);
                            _0x59faa3.lineTo(_0x383b24.size / 0x4 - 0x3, 0x0);
                            _0x59faa3.fill();
                            _0x59faa3.closePath();
                        }
                    }
                    for (let _0x1371c1 = 0x4; _0x1371c1 >= 0x0; _0x1371c1--) {
                        let _0x391556 = (_0x1371c1 + _0x1c0cf5) / 0x4;
                        _0x459fc9.setFillStroke(_0x459fc9.averageColors(_0x459fc9.radiantColor, _0x1cf0c2, _0x391556 * (_0x383b24.ruptured ? 0.3 : 0.9) + (_0x383b24.ruptured ? 0.7 : 0.1)));
                        const _0x2c322a = {
                            'x': 0x0,
                            'y': 0x0,
                            size: _0x383b24.size * (_0x391556 < 0x1 ? _0x391556 : 0x1)
                        };
                        _0x459fc9.drawCircle(_0x2c322a);
                    }
                    break;
                case 0x2:
                    let _0x23feba = _0x459fc9.now / 0x9c4;
                    let _0x9c7c5d = _0x383b24.size * 1.2;
                    let _0x55931c = [Math.sin(_0x23feba), Math.cos(_0x23feba)];
                    let _0x76dde7 = _0x55931c[0x0] * _0x9c7c5d;
                    let _0x151c3b = _0x55931c[0x1] * _0x9c7c5d;
                    let _0xbc01ac = 0x0;
                    for (let _0x1cb9de = _0x459fc9.round(0.3 * _0x383b24.size / 0x64); _0xbc01ac < _0x1cb9de; _0xbc01ac++) {
                        let _0x324e13 = Math.random() * 0x2 * Math.PI;
                        let _0x4f6ddd = Math.sin(_0x324e13);
                        let _0x3c120d = Math.cos(_0x324e13);
                        let _0x2ec89a = Math.random();
                        let _0x18957e = Math.random() * 0x2 * Math.PI;
                        let _0x5ae701 = Math.sin(_0x18957e);
                        let _0x25bf0b = Math.cos(_0x18957e);
                        _0x2ec89a = (0x1 - _0x2ec89a * _0x2ec89a) * (_0x383b24.size - 0x5);
                        let _0xddf605 = _0x383b24.x + _0x4f6ddd * _0x2ec89a;
                        let _0x3a655d = _0x383b24.y + _0x3c120d * _0x2ec89a;
                        const _0x482544 = {
                            'r': 0x0,
                            'g': 0x0,
                            'b': 0x0
                        };
                        _0x459fc9.particlesOver.push(_0x459fc9.createParticle({
                            'ox': _0xddf605,
                            'oy': _0x3a655d,
                            'nx': _0xddf605 + _0x5ae701 * 0xf,
                            'ny': _0x3a655d + _0x25bf0b * 0xf,
                            'size': 0x5 + 0x3 * Math.random(),
                            'd': 0.025,
                            'fade': 0x14,
                            'color': _0x383b24.color || _0x482544,
                            'radiant': _0x383b24.radiant || 0x64,
                            'maxAlpha': 0.3
                        }));
                    }
                    _0x459fc9.setFillStroke(_0x459fc9.radiantColor);
                    _0x59faa3.lineCap = _0x59faa3.lineJoin = "round";
                    _0x59faa3.lineWidth = 0x5;
                    _0x59faa3.beginPath();
                    _0x59faa3.moveTo(_0x76dde7, -_0x151c3b);
                    _0x59faa3.lineTo(-_0x151c3b, -_0x76dde7);
                    _0x59faa3.lineTo(-_0x76dde7, _0x151c3b);
                    _0x59faa3.lineTo(_0x151c3b, _0x76dde7);
                    _0x59faa3.lineTo(_0x76dde7, -_0x151c3b);
                    _0x59faa3.fill();
                    _0x59faa3.stroke();
                    _0x59faa3.closePath();
                    _0x9c7c5d = (1.6 + Math.sin(_0x459fc9.now / 0x2ee) / 0x5) * _0x9c7c5d;
                    _0x459fc9.setFillStroke(_0x459fc9.radiantColor, 0.4);
                    _0x76dde7 = _0x55931c[0x0] * _0x9c7c5d;
                    _0x151c3b = _0x55931c[0x1] * _0x9c7c5d;
                    _0x59faa3.beginPath();
                    _0x59faa3.moveTo(_0x76dde7, -_0x151c3b);
                    _0x59faa3.lineTo(-_0x151c3b, -_0x76dde7);
                    _0x59faa3.lineTo(-_0x76dde7, _0x151c3b);
                    _0x59faa3.lineTo(_0x151c3b, _0x76dde7);
                    _0x59faa3.lineTo(_0x76dde7, -_0x151c3b);
                    _0x59faa3.fill();
                    _0x59faa3.closePath();
                    _0x9c7c5d += 3.5;
                    _0x76dde7 = _0x55931c[0x0] * _0x9c7c5d;
                    _0x151c3b = _0x55931c[0x1] * _0x9c7c5d;
                    _0x59faa3.beginPath();
                    _0x59faa3.moveTo(_0x76dde7, -_0x151c3b);
                    _0x59faa3.lineTo(-_0x151c3b, -_0x76dde7);
                    _0x59faa3.lineTo(-_0x76dde7, _0x151c3b);
                    _0x59faa3.lineTo(_0x151c3b, _0x76dde7);
                    _0x59faa3.lineTo(_0x76dde7, -_0x151c3b);
                    _0x59faa3.stroke();
                    _0x59faa3.closePath();
                    break;
            }
            _0x59faa3.setTransform(_0x217623);
        },
        'drawElement': function (_0x4e6b7e, _0x15bef4, _0x2fc35c) {
            let _0x294705 = _0x4e6b7e.color;
            if (_0x4e6b7e.flashColor && false) {
                _0x294705 = _0x4e6b7e.flashColor;
            }
            _0x294705 = _0x459fc9.getColor(_0x2fc35c, _0x294705, _0x4e6b7e.colorAverage, _0x2fc35c);
            if ("sides" in _0x4e6b7e) {
                let _0xc2161f = _0x4e6b7e.d || 0x0;
                let _0x30ee54 = Math.sin(_0xc2161f);
                let _0x4ef3e2 = Math.cos(_0xc2161f);
                let _0x75c4c0 = _0x4e6b7e.x || 0x0;
                let _0x4ca212 = _0x4e6b7e.y || 0x0;
                const _0x47ac5d = {
                    sides: _0x4e6b7e.sides || 0x0,
                    size: _0x15bef4.size * _0x4e6b7e.size,
                    color: _0x294705,
                    'd': _0xc2161f + ((_0x4e6b7e.sides !== 0x8 && _0x4e6b7e.sides !== 0x4 && _0x4e6b7e.sides !== 0x0) ^ _0x4e6b7e.reflect ? Math.PI / _0x4e6b7e.sides : 0x0),
                    'x': _0x15bef4.size * (_0x75c4c0 * _0x4ef3e2 - _0x4ca212 * _0x30ee54),
                    'y': _0x15bef4.size * (_0x4ca212 * _0x4ef3e2 + _0x75c4c0 * _0x30ee54),
                    alpha: "alpha" in _0x4e6b7e ? _0x4e6b7e.alpha || 0x0 : 0x1,
                    noStroke: _0x4e6b7e.noStroke,
                    'noFill': _0x4e6b7e.noFill
                };
                _0x459fc9.drawRegularPolygon(_0x47ac5d);
            } else if ('paths' in _0x4e6b7e) {
                _0x459fc9.setFillStroke(_0x294705);
                _0x59faa3.beginPath();
                let _0x2140d6 = 0x0;
                for (let _0x54d833 = _0x4e6b7e.paths.length; _0x2140d6 < _0x54d833; _0x2140d6++) {
                    let _0x2aec37 = _0x4e6b7e.paths[_0x2140d6];
                    let _0xebb9d9 = _0x4e6b7e.d || 0x0;
                    let _0x57fa63 = Math.sin(_0xebb9d9);
                    let _0x119c10 = Math.cos(_0xebb9d9);
                    let _0xa2075c = _0x4e6b7e.x || 0x0;
                    let _0x4df78a = _0x4e6b7e.y || 0x0;
                    let _0x42f16c = [_0x2aec37[0x0][0x0] + _0xa2075c, _0x2aec37[0x0][0x1] + _0x4df78a];
                    _0x42f16c = [_0x42f16c[0x0] * _0x119c10 - _0x42f16c[0x1] * _0x57fa63, _0x42f16c[0x1] * _0x119c10 + _0x42f16c[0x0] * _0x57fa63];
                    _0x59faa3.moveTo(_0x15bef4.size * _0x42f16c[0x0], _0x15bef4.size * _0x42f16c[0x1]);
                    let _0x9b94f4 = 0x1;
                    for (let _0x664ff0 = _0x2aec37.length; _0x9b94f4 < _0x664ff0; _0x9b94f4++) {
                        let _0x58b2cd = [_0x2aec37[_0x9b94f4][0x0] + _0xa2075c, _0x2aec37[_0x9b94f4][0x1] + _0x4df78a];
                        _0x59faa3.lineTo(_0x15bef4.size * (_0x58b2cd[0x0] * _0x119c10 - _0x58b2cd[0x1] * _0x57fa63), _0x15bef4.size * (_0x58b2cd[0x1] * _0x119c10 + _0x58b2cd[0x0] * _0x57fa63));
                    }
                    _0x59faa3.lineTo(_0x15bef4.size * _0x42f16c[0x0], _0x15bef4.size * _0x42f16c[0x1]);
                }
                _0x59faa3.fill();
                _0x59faa3.stroke();
                _0x59faa3.closePath();
            }
        },
        'drawTank': function (_0x42ce, _0x4234b6) {
            let _0x4d858a = _0x59faa3.getTransform();
            let _0x4de7e6 = _0x42ce.radiant ? _0x459fc9.averageColors(_0x42ce.color, _0x459fc9.radiantColor, _0x42ce.radiant / (_0x42ce.radiant + 0x1)) : _0x42ce.color;
            _0x42ce.renderColor = _0x4de7e6;
            if (_0x42ce.damageFlash > 0.05) {
                _0x4de7e6 = _0x459fc9.lighten(_0x4de7e6, _0x42ce.damageFlash * (0x3c + 0x5 * (0x2 * Math.random() - 0x1)));
            }
            if (_0x42ce.invincible) {
                const _0x2eb94a = {
                    'r': 0xff,
                    'g': 0xff,
                    'b': 0xff
                };
                _0x4de7e6 = _0x459fc9.averageColors(_0x4de7e6, _0x2eb94a, (0x1 + Math.sin(_0x459fc9.now / 0x19)) * 0.1);
            }
            if (_0x42ce.isTurret) {
                _0x59faa3.translate(_0x42ce.x, _0x42ce.y);
                _0x59faa3.rotate(_0x42ce.d);
            } else {
                _0x59faa3.translate(_0x42ce.x, _0x42ce.y);
                _0x59faa3.rotate(_0x42ce.d);
                _0x459fc9.scaleFade(_0x42ce.fadeTime);
            }
            if (_0x42ce.outerSize && _0x42ce.outerSides >= 0x0) {
                let _0x439212 = 0x0;
                if (_0x42ce.outerSides && _0x42ce.outerSides !== 0x8 && _0x42ce.outerSides !== 0x4 && _0x42ce.outerSides !== 0x0) {
                    _0x439212 = Math.PI / _0x42ce.outerSides;
                }
                _0x459fc9.drawRegularPolygon({
                    'sides': _0x42ce.outerSides,
                    'size': _0x42ce.outerSize * _0x42ce.size,
                    'color': _0x459fc9.spikeColor,
                    'd': _0x439212
                });
            }
            if (_0x42ce.barrels && _0x42ce.barrels[0x0]) {
                let _0x377382 = 0x0;
                for (let _0x3dd3a1 = _0x42ce.barrels.length; _0x377382 < _0x3dd3a1; _0x377382++) {
                    let _0x3e7e4c = _0x42ce.barrels[_0x377382];
                    const _0x4fb3d3 = {
                        'type': _0x3e7e4c.type,
                        'visualType': _0x3e7e4c.visualType,
                        'x': -_0x3e7e4c.x * _0x42ce.size,
                        'y': -_0x3e7e4c.y * _0x42ce.size,
                        'd': _0x3e7e4c.d,
                        'w': _0x3e7e4c.width * _0x42ce.size * 0x2,
                        'h': _0x3e7e4c.height * _0x42ce.size * 0x2,
                        'v': _0x3e7e4c.v,
                        highlight: _0x3e7e4c === _0x4234b6 ? 0x1 : 0x0,
                        tankColor: _0x4de7e6,
                        color: _0x3e7e4c.color,
                        colorAverage: _0x3e7e4c.colorAverage
                    };
                    _0x459fc9.drawBarrel(_0x4fb3d3);
                }
            }
            if (_0x42ce.visualElements) {
                let _0x390914 = 0x0;
                for (let _0x218cf7 = _0x42ce.visualElements.length; _0x390914 < _0x218cf7; _0x390914++) {
                    let _0x474be6 = _0x42ce.visualElements[_0x390914];
                    if (_0x474be6.renderWithBarrels) {
                        _0x459fc9.drawElement(_0x474be6, _0x42ce, _0x4de7e6);
                    }
                }
            }
            if (_0x42ce.weaponVisualElements) {
                let _0xf45fb8 = 0x0;
                for (let _0x41227b = _0x42ce.weaponVisualElements.length; _0xf45fb8 < _0x41227b; _0xf45fb8++) {
                    let _0x2f2b35 = _0x42ce.weaponVisualElements[_0xf45fb8];
                    if (_0x2f2b35.renderWithBarrels) {
                        _0x459fc9.drawElement(_0x2f2b35, _0x42ce, _0x4de7e6);
                    }
                }
            }
            if (_0x42ce.weaponTurrets && _0x42ce.weaponTurrets[0x0]) {
                let _0x465583 = 0x0;
                for (let _0x1391bc = _0x42ce.weaponTurrets.length; _0x465583 < _0x1391bc; _0x465583++) {
                    let _0x21e834 = _0x42ce.weaponTurrets[_0x465583];
                    let _0x24f997 = {};
                    if (_0x21e834.id >= 0x0) {
                        _0x24f997 = _0x42ce.turretData[_0x21e834.id] || {};
                    }
                    _0x459fc9.drawTank({
                        'x': _0x21e834.x * _0x42ce.size,
                        'y': -_0x21e834.y * _0x42ce.size,
                        'd': -_0x42ce.d + (_0x24f997.d || 0x0),
                        'size': _0x21e834.size * _0x42ce.size * 0.5,
                        'color': _0x459fc9.barrelColor,
                        'radiant': 0x0,
                        'sides': _0x21e834.sides || 0x0,
                        'isTurret': true,
                        'barrels': _0x21e834.barrels
                    });
                }
            }
            const _0x2252ea = {
                sides: _0x42ce.sides,
                size: _0x42ce.size,
                'color': _0x4de7e6,
                'd': _0x42ce.sides !== 0x8 && _0x42ce.sides !== 0x4 && _0x42ce.sides !== 0x0 ? Math.PI / _0x42ce.sides : 0x0
            };
            _0x459fc9.drawRegularPolygon(_0x2252ea);
            if (_0x42ce.visualElements) {
                let _0x27b965 = 0x0;
                for (let _0x53c836 = _0x42ce.visualElements.length; _0x27b965 < _0x53c836; _0x27b965++) {
                    let _0x413856 = _0x42ce.visualElements[_0x27b965];
                    if (!_0x413856.renderWithBarrels) {
                        _0x459fc9.drawElement(_0x413856, _0x42ce, _0x4de7e6);
                    }
                }
            }
            if (_0x42ce.turrets && _0x42ce.turrets[0x0]) {
                let _0x5d19ee = 0x0;
                for (let _0x2278d1 = _0x42ce.turrets.length; _0x5d19ee < _0x2278d1; _0x5d19ee++) {
                    let _0x48f263 = _0x42ce.turrets[_0x5d19ee];
                    let _0x34d5f3 = {};
                    if (_0x48f263.id >= 0x0) {
                        _0x34d5f3 = _0x42ce.turretData[_0x48f263.id] || {};
                    }
                    _0x459fc9.drawTank({
                        'x': _0x48f263.x * _0x42ce.size,
                        'y': -_0x48f263.y * _0x42ce.size,
                        'd': -_0x42ce.d + (_0x34d5f3.d || 0x0),
                        'size': _0x48f263.size * _0x42ce.size * 0.5,
                        'color': _0x459fc9.barrelColor,
                        'radiant': 0x0,
                        'sides': _0x48f263.sides || 0x0,
                        'isTurret': true,
                        'barrels': _0x48f263.barrels
                    });
                }
            }
            if (_0x42ce.auras && _0x42ce.auras[0x0]) {
                let _0x9e70c5 = 0x0;
                for (let _0x544104 = _0x42ce.auras.length; _0x9e70c5 < _0x544104; _0x9e70c5++) {
                    let _0x3450b9 = _0x42ce.auras[_0x9e70c5];
                    let _0x69ff6 = _0x3450b9.size * _0x42ce.size;
                    let _0x103648 = (_0x3450b9.rotate ? 0x0 : -_0x42ce.d) + (_0x3450b9.d || 0x0);
                    _0x459fc9.drawRegularPolygon({
                        'sides': _0x3450b9.sides,
                        'size': _0x69ff6,
                        'color': _0x459fc9.barrelColor,
                        'd': _0x103648,
                        'x': _0x3450b9.x * _0x42ce.size,
                        'y': -_0x3450b9.y * _0x42ce.size
                    });
                    _0x459fc9.drawRegularPolygon({
                        'sides': _0x3450b9.innerSides,
                        'size': _0x3450b9.innerSize * _0x69ff6,
                        'color': _0x459fc9.averageColors(_0x3450b9.color, _0x459fc9.spikeColor, _0x42ce.passiveFade),
                        'd': _0x103648,
                        'x': _0x3450b9.x * _0x42ce.size,
                        'y': -_0x3450b9.y * _0x42ce.size
                    });
                }
            }
            if (_0x42ce.weaponVisualElements) {
                let _0x30f585 = 0x0;
                for (let _0x17a90b = _0x42ce.weaponVisualElements.length; _0x30f585 < _0x17a90b; _0x30f585++) {
                    let _0x403265 = _0x42ce.weaponVisualElements[_0x30f585];
                    if (!_0x403265.renderWithBarrels) {
                        _0x459fc9.drawElement(_0x403265, _0x42ce, _0x4de7e6);
                    }
                }
            }
            if (_0x4234b6) {
                const _0x35a001 = {
                    type: _0x4234b6.type,
                    'visualType': _0x4234b6.visualType,
                    'x': -_0x4234b6.x * _0x42ce.size,
                    'y': -_0x4234b6.y * _0x42ce.size,
                    'd': _0x4234b6.d,
                    'w': _0x4234b6.width * _0x42ce.size * 0x2,
                    'h': _0x4234b6.height * _0x42ce.size * 0x2,
                    'v': _0x4234b6.v,
                    highlight: 0x2,
                    tankColor: _0x4de7e6,
                    color: _0x4234b6.color,
                    colorAverage: _0x4234b6.colorAverage
                };
                _0x459fc9.drawBarrel(_0x35a001);
            }
            _0x59faa3.setTransform(_0x4d858a);
        },
        'drawAuras': function (_0x408410, _0x5d1d54) {
            let _0x18da9e = _0x59faa3.getTransform();
            let _0x1ae3f5 = Math.sin(_0x408410.d);
            let _0x72b6e7 = Math.cos(_0x408410.d);
            _0x459fc9.scaleFade(_0x408410.fadeTime, false);
            if (_0x408410.auras && _0x408410.auras[0x0]) {
                let _0x25421a = 0x0;
                for (let _0x384b3f = _0x408410.auras.length; _0x25421a < _0x384b3f; _0x25421a++) {
                    let _0x22b0ad = _0x408410.auras[_0x25421a];
                    let _0x3c022a = _0x408410.x + _0x408410.size * (_0x22b0ad.x * _0x72b6e7 + _0x22b0ad.y * _0x1ae3f5);
                    let _0x1680db = _0x408410.y + _0x408410.size * (_0x22b0ad.x * _0x1ae3f5 - _0x22b0ad.y * _0x72b6e7);
                    let _0x4a4e3e = _0x22b0ad.auraSize * _0x408410.size;
                    if (!_0x408410.passive) {
                        let _0xf6c2c5 = _0x459fc9.round(0x1 * _0x4a4e3e * 0.003);
                        for (let _0xf0bf88 = 0x0; _0xf0bf88 < _0xf6c2c5; _0xf0bf88++) {
                            let _0x60deb8 = Math.random() * 0x2 * Math.PI;
                            let _0x32e580 = Math.sin(_0x60deb8);
                            let _0x2b5584 = Math.cos(_0x60deb8);
                            let _0x8be1ed = Math.random();
                            let _0x4c1894 = Math.random() * 0x2 * Math.PI;
                            let _0x42ce05 = Math.sin(_0x4c1894);
                            let _0x200919 = Math.cos(_0x4c1894);
                            _0x8be1ed = (0x1 - _0x8be1ed * _0x8be1ed) * (_0x4a4e3e - 0x5);
                            let _0x4aec1a = _0x3c022a + _0x32e580 * _0x8be1ed;
                            let _0x47c7fc = _0x1680db + _0x2b5584 * _0x8be1ed;
                            const _0x2344f9 = {
                                'ox': _0x4aec1a,
                                'oy': _0x47c7fc,
                                'nx': _0x4aec1a + _0x42ce05 * 0xa,
                                'ny': _0x47c7fc + _0x200919 * 0xa,
                                size: 0x5,
                                'd': 0.05,
                                fade: 0xa,
                                color: _0x22b0ad.color,
                                maxAlpha: 0.2
                            };
                            _0x459fc9.particlesOver.push(_0x459fc9.createParticle(_0x2344f9));
                        }
                    }
                    let _0x4075d7 = (_0x22b0ad.rotate ? _0x408410.d : 0x0) + (_0x22b0ad.d || 0x0);
                    _0x459fc9.drawRegularPolygon({
                        'sides': _0x22b0ad.innerSides,
                        'size': _0x4a4e3e,
                        'color': _0x459fc9.averageColors(_0x22b0ad.color, _0x459fc9.passiveColor, _0x408410.passiveFade),
                        'alpha': _0x22b0ad.alpha + (0.1 - _0x22b0ad.alpha) * _0x408410.passiveFade,
                        'x': _0x3c022a,
                        'y': _0x1680db,
                        'd': _0x4075d7
                    });
                    if (false && _0x5d1d54) {
                        let _0x209c90 = _0x5d1d54 * 1.5;
                        const _0x5a7c8d = {
                            'x': _0x3c022a,
                            'y': _0x1680db,
                            'size': _0x4a4e3e * _0x209c90 + 0x5,
                            sides: _0x22b0ad.innerSides,
                            'd': _0x4075d7,
                            alpha: 0x1 - _0x408410.passiveFade
                        };
                        _0x459fc9.darknessPolygon(_0x5a7c8d, true);
                        _0x209c90 *= 0x2;
                        const _0x3f7ae3 = {
                            'x': _0x3c022a,
                            'y': _0x1680db,
                            size: _0x4a4e3e * _0x209c90 + 0x5,
                            sides: _0x22b0ad.innerSides,
                            'd': _0x4075d7,
                            alpha: 0.15 * (0x1 - _0x408410.passiveFade)
                        };
                        _0x459fc9.darknessPolygon(_0x3f7ae3, true);
                    }
                }
            }
            _0x59faa3.setTransform(_0x18da9e);
        },
        'slide': function (_0x4f40b1, _0x27c29a, _0xcd6f3d) {
            return _0x4f40b1 + (_0x27c29a - _0x4f40b1) * _0xcd6f3d;
        },
        'announcements': [],
        'addAnnouncement': function (_0xf83b90, _0x375834) {
            let _0x4c5915 = performance.now();
            const _0x3c4ca5 = {
                showTime: _0x4c5915,
                'removeTime': _0x4c5915 + _0x375834,
                'text': _0xf83b90
            };
            _0x459fc9.announcements.push(_0x3c4ca5);
        },
        'healthBarWidth': 0xc,
        'drawHealthBar': function (_0x213788) {
            _0x213788.health = _0x40dc30.average(_0x213788.health, _0x213788._health, 0x4);
            if (_0x213788.health <= 0.99) {
                _0x213788.healthBarFade = _0x40dc30.average(_0x213788.healthBarFade, 0x1, 0x5);
            } else {
                _0x213788.healthBarFade = _0x40dc30.average(_0x213788.healthBarFade, 0x0, 0x5);
            }
            if (_0x213788.healthBarFade > 0.02 && _0x213788.renderColor) {
                let _0x580ed9 = _0x213788.healthBarFade;
                let _0x291892 = 0x1 - (0x1 - _0x580ed9) * (0x1 - _0x580ed9);
                let _0x1e809c = _0x459fc9.camera.size > 0x1 ? 0x1 + (_0x459fc9.camera.size - 0x1) * 0.5 : _0x459fc9.camera.size;
                let _0x5de13f = 0xc * _0x1e809c;
                let _0x13b16d = _0x213788.x;
                let _0x259b0b = _0x213788.y + _0x213788.size * 1.025 + _0x5de13f + 0x5;
                let _0x131dfa = _0x213788.size * _0x580ed9;
                _0x59faa3.lineWidth = _0x5de13f;
                _0x59faa3.lineCap = "round";
                _0x59faa3.strokeStyle = "rgba(0, 0, 0, " + _0x291892 + ')';
                _0x59faa3.beginPath();
                _0x59faa3.moveTo(_0x13b16d - _0x131dfa, _0x259b0b);
                _0x59faa3.lineTo(_0x13b16d + _0x131dfa, _0x259b0b);
                _0x59faa3.stroke();
                _0x59faa3.closePath();
                _0x59faa3.lineWidth = _0x5de13f * 0.5;
                const _0x351657 = {
                    'r': _0x213788.renderColor.r < 0x3c ? 0x3c : _0x213788.renderColor.r,
                    'g': _0x213788.renderColor.g < 0x3c ? 0x3c : _0x213788.renderColor.g,
                    'b': _0x213788.renderColor.b < 0x3c ? 0x3c : _0x213788.renderColor.b
                };
                _0x59faa3.strokeStyle = _0x459fc9.rgb(_0x351657, _0x291892 * 0.2);
                _0x59faa3.beginPath();
                _0x59faa3.moveTo(_0x13b16d - _0x131dfa, _0x259b0b);
                _0x59faa3.lineTo(_0x13b16d + _0x131dfa, _0x259b0b);
                _0x59faa3.stroke();
                _0x59faa3.closePath();
                _0x59faa3.strokeStyle = _0x459fc9.rgb(_0x351657, _0x291892);
                _0x59faa3.beginPath();
                _0x59faa3.moveTo(_0x13b16d - _0x131dfa, _0x259b0b);
                _0x59faa3.lineTo(_0x13b16d + _0x131dfa * (_0x213788.health * 0x2 - 0x1), _0x259b0b);
                _0x59faa3.stroke();
                _0x59faa3.closePath();
            }
        },
        'reset': function () {
            _0x459fc9.camera.zoom = 0x0;
            _0x459fc9.camera._zoom = 0x1;
            _0x424e00.data.tanks = [];
            _0x424e00.data.me = false;
            _0x424e00.data.polygons = [];
            _0x424e00.data.walls = [];
            _0x424e00.data.wormholes = {};
            _0x424e00.data.bullets = [];
            _0x424e00.data.bases = [];
            _0x1ca7ae.leaderboard.reset();
            for (let _0x439cbd = 0x0; _0x439cbd < 0x8; _0x439cbd++) {
                _0x1ca7ae.statBars[_0x439cbd](0x0);
            }
            _0x424e00.upgrades = [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0];
        },
        'drawBullet': function (_0xb9939e) {
            const _0x4fe0f0 = {
                auras: _0xb9939e.auras || [],
                'barrels': _0xb9939e.barrels || [],
                color: _0xb9939e.color,
                'd': _0xb9939e.d,
                fadeTime: _0xb9939e.fadeTime,
                passive: false,
                passiveFade: 0x0,
                'radiant': _0xb9939e.radiant,
                'sides': _0xb9939e.sides,
                size: _0xb9939e.size,
                turretData: _0xb9939e.turretData || {},
                barrelData: _0xb9939e.barrelData || {},
                'turrets': _0xb9939e.turrets || {},
                'weaponTurrets': _0xb9939e.weaponTurrets || {},
                visualElements: _0xb9939e.visualElements,
                weaponVisualElements: _0xb9939e.weaponVisualElements,
                outerSides: _0xb9939e.outerSides,
                outerSize: _0xb9939e.outerSize,
                'x': _0xb9939e.x,
                'y': _0xb9939e.y,
                _barrels: _0xb9939e._barrels || []
            };
            _0x459fc9.drawTank(_0x4fe0f0);
            _0xb9939e.renderColor = _0x4fe0f0.renderColor;
        },
        'inFOV': function (_0x33ca25) {
            let _0x405e5d = 0 * _0x459fc9.camera.size;
            let _0x2224f7 = 0 * _0x459fc9.camera.size;
            let _0x1de09a = _0x33ca25.w || _0x33ca25.size;
            let _0x544542 = _0x33ca25.h || _0x33ca25.size;
            return _0x33ca25.x - _0x1de09a < _0x459fc9.camera.x + _0x405e5d && _0x33ca25.y - _0x544542 < _0x459fc9.camera.y + _0x2224f7 && _0x33ca25.x + _0x1de09a > _0x459fc9.camera.x - _0x405e5d && _0x33ca25.y + _0x544542 > _0x459fc9.camera.y - _0x2224f7;
        },
        'wallCount': 0x0,
        'drawWall': function (_0x148c7a) {
            if (_0x459fc9.inFOV(_0x148c7a)) {
                0x0++;
                if (_0x148c7a.color) {
                    _0x59faa3.fillStyle = _0x459fc9.rgb(_0x148c7a.color, 0.25);
                } else {
                    _0x59faa3.fillStyle = _0x459fc9.rgb(_0x459fc9.wallColor, 0x1);
                }
                _0x59faa3.fillRect(_0x148c7a.x - _0x148c7a.w, _0x148c7a.y - _0x148c7a.h, _0x148c7a.w * 0x2, _0x148c7a.h * 0x2);
            }
        },
        'typing': false,
        'frames': [],
        'getTankColor': function (_0x23a8f9, _0x1921a7) {
            let _0x18d9ef = _0x1921a7;
            _0x1921a7 = _0x2933ec.bodies[_0x1921a7];
            if (_0x1921a7 && !(_0x1921a7 >= 0x0)) {
                _0x18d9ef = _0x1921a7.sides;
            }
            if (_0x23a8f9 === 0x5) {
                if (_0x18d9ef >= 0x3) {
                    return _0x459fc9.getPolygonColor(_0x18d9ef);
                } else {
                    const _0x44c1ba = {
                        'r': 0xff,
                        'g': 0xff,
                        'b': 0xff
                    };
                    return _0x44c1ba;
                }
            } else {
                return _0x459fc9.teamColors[_0x23a8f9];
            }
        },
        'drawFrame': function () {
            _0x459fc9.serverSelectColor = _0x459fc9.averageColors(_0x459fc9.serverSelectColor, _0x459fc9.teamColors[0x0], 0.1);
            serverSelect.style.background = _0x459fc9.rgb(_0x459fc9.serverSelectColor);
            serverSelectLower.style.background = _0x459fc9.rgb(_0x459fc9.darken(_0x459fc9.serverSelectColor));
            _0x459fc9.particleCount = 0x0;
            _0x459fc9.wallCount = 0x0;
            _0x459fc9.polygonCount = 0x0;
            let _0x596b11 = Math.max(_0x459fc9.grid.background.r, _0x459fc9.grid.background.g, _0x459fc9.grid.background.b);
            let _0x454716 = _0x596b11 > 0x46 ? _0x596b11 - 0x46 : 0x0;
            _0x459fc9.wallOpacity = _0x596b11 > 0xc ? _0x596b11 < 0x1e ? 0x1 - 0.7 * (_0x596b11 - 0xc) / 0x12 : 0.3 : 0x1;
            const _0x345604 = {
                'r': _0x454716,
                'g': _0x454716,
                'b': _0x454716
            };
            _0x459fc9.wallColor = _0x345604;
            let _0x4576d0 = 0x0;
            for (let _0x55b638 = 0x0; _0x55b638 < 0x8; _0x55b638++) {
                _0x4576d0 += _0x424e00.upgrades[_0x55b638];
            }
            _0x424e00.override = _0x424e00.splash;
            _0x459fc9.camera.zoom = 0x0;
            _0x459fc9.camera._zoom = 0x1;
            false.update();
            _0x459fc9.camera._size = _0x459fc9.camera.size = 0x1;
            _0x459fc9.camera.size = _0x40dc30.average(_0x459fc9.camera.size, _0x459fc9.camera._size * _0x459fc9.camera._zoom, 0xf);
            if (_0x424e00.animations._part < _0x424e00.animations.part) {
                _0x424e00.animations._part = _0x40dc30.average(_0x424e00.animations._part, _0x424e00.animations.part, 0x5);
            } else {
                _0x424e00.animations._part = _0x424e00.animations.part;
            }
            if (_0x424e00.animations._whole < _0x424e00.animations.whole) {
                _0x424e00.animations._whole = _0x40dc30.average(_0x424e00.animations._whole, _0x424e00.animations.whole, 0x5);
            } else {
                _0x424e00.animations._whole = _0x424e00.animations.whole;
            }
            if (_0x424e00.animations._score < _0x424e00.animations.score) {
                _0x424e00.animations._score = _0x40dc30.average(_0x424e00.animations._score, _0x424e00.animations.score, 0x5);
            } else {
                _0x424e00.animations._score = _0x424e00.animations.score;
            }
            _0x424e00.animations._tankLevelBar = _0x40dc30.average(_0x424e00.animations._tankLevelBar, _0x424e00.animations.tankLevelBar, 0x5);
            let _0x56f3fb = _0x459fc9.getRadiantMultiplier(_0x424e00.data.me.radiant);
            tankLevelDisplay.innerHTML = _0x459fc9.formatScore(_0x56f3fb * _0x424e00.animations._part) + " / " + _0x459fc9.formatScore(_0x56f3fb * _0x424e00.animations._whole);
            tankLevelBar.style.width = _0x424e00.animations._tankLevelBar + 'px';
            tankScoreDisplay.innerHTML = "Score: " + _0x459fc9.formatScore(_0x56f3fb * _0x424e00.animations._score);
            const _0x5cfe2e = _0x424e00.data;
            let _0x1c4fe0 = -_0x459fc9.now + (_0x459fc9.now = performance.now());
            _0x459fc9.flash = _0x459fc9.now % 0x12c < 0x96;
            if (_0x459fc9.now - 0x0 > 0xc8) {
                _0x459fc9.lastRadiant = _0x459fc9.now;
                _0x459fc9.radiantParticles = true;
            } else {
                _0x459fc9.radiantParticles = false;
            }
            _0x40dc30.powers = {};
            _0x459fc9.f = _0x1c4fe0 / 0x3e8 * 0x3c;
            _0x459fc9.frames.push(_0x459fc9.now + 0x3e8);
            let _0x274455 = 0x0;
            while (_0x459fc9.frames[_0x274455] < _0x459fc9.now) {
                _0x274455++;
            }
            _0x459fc9.frames.splice(0x0, _0x274455);
            _0x274455 = 0x0;
            while (_0x424e00.packetSizes[_0x274455] && _0x424e00.packetSizes[_0x274455][0x0] < _0x459fc9.now) {
                _0x274455++;
            }
            _0x424e00.packetSizes.splice(0x0, _0x274455);
            let _0x3c4af6 = _0x1c4fe0 / 0x14;
            let _0x2369f5 = {};
            for (let _0x5b7bb2 = _0x424e00.data.tanks.length - 0x1; _0x5b7bb2 >= 0x0; _0x5b7bb2--) {
                let _0x4d898c = _0x424e00.data.tanks[_0x5b7bb2];
                _0x2369f5[_0x4d898c.id] = _0x4d898c;
                _0x459fc9.updateTank(_0x4d898c, _0x3c4af6, _0x1c4fe0);
            }
            for (let _0x3653cc = _0x424e00.data.bullets.length - 0x1; _0x3653cc >= 0x0; _0x3653cc--) {
                _0x459fc9.updateBullet(_0x424e00.data.bullets[_0x3653cc], _0x1c4fe0);
            }
            let _0x45afa0 = {};
            for (let _0x2b41a0 = _0x424e00.data.polygons.length - 0x1; _0x2b41a0 >= 0x0; _0x2b41a0--) {
                let _0x5d61b0 = _0x424e00.data.polygons[_0x2b41a0];
                _0x45afa0[_0x5d61b0.id] = _0x5d61b0;
                _0x459fc9.updatePolygon(_0x5d61b0, _0x1c4fe0);
            }
            let _0x5b0408 = false;
            if (_0x424e00.data.me && true) {
                let _0x36a855 = _0x424e00.data.me.weapon;
                if (_0x36a855 in _0x2933ec.weaponUpgradeMap && (_0x459fc9.now - 0x0 > 0x3e8 || _0x36a855 !== '')) {
                    let _0x132628 = _0x2933ec.weaponUpgradeMap[_0x36a855];
                    if (_0x132628 && _0x424e00.data.me.level >= _0x132628.level && _0x132628.upgrades[0x0]) {
                        _0x1ca7ae.createWeaponUpgrades(_0x132628.upgrades, _0x36a855);
                    }
                }
                let _0x4f8df1 = _0x424e00.data.me.body;
                if (_0x4f8df1 in _0x2933ec.bodyUpgradeMap && (_0x459fc9.now - 0x0 > 0x3e8 || _0x4f8df1 !== '')) {
                    let _0x4f7fde = _0x2933ec.bodyUpgradeMap[_0x4f8df1];
                    if (_0x4f7fde && _0x424e00.data.me.level >= _0x4f7fde.level && _0x4f7fde.upgrades[0x0]) {
                        _0x1ca7ae.createBodyUpgrades(_0x4f7fde.upgrades, _0x4f8df1);
                    }
                }
                let _0x57784b = _0x424e00.data.me.level - _0x4576d0 - 0x1;
                let _0x4e8613 = _0x2933ec.bodies[_0x424e00.data.me.body];
                if (_0x4e8613 && _0x4e8613.celestial) {
                    _0x57784b -= 0xe;
                }
                if (_0x57784b >= 0x0) {
                    _0x459fc9.unusedUpgrades = _0x40dc30.average(0x0, _0x57784b, 0xa);
                    let _0x3dcfa0 = Math.round(0x0);
                    if (_0x3dcfa0 > 0x0) {
                        _0x1ca7ae.setStatDisplay(_0x3dcfa0);
                        _0x5b0408 = true;
                    } else {
                        _0x1ca7ae.setStatDisplay(0x0);
                        _0x5b0408 = false;
                    }
                } else {
                    _0x459fc9.unusedUpgrades = _0x57784b;
                    if (_0x57784b > 0x0) {
                        _0x1ca7ae.setStatDisplay(Math.floor(_0x57784b));
                        _0x5b0408 = true;
                    } else {
                        _0x5b0408 = false;
                    }
                }
                if (_0x424e00.data.me.name !== _0x1ca7ae.state.tankName) {
                    tankName.innerHTML = _0x424e00.data.me.name.replaceAll('&', "&amp;").replaceAll('<', "&lt;").replaceAll('>', "&gt;").replaceAll("\n", '<br>');
                    _0x1ca7ae.state.tankName = _0x424e00.data.me.name;
                }
                let _0x1d8ca6 = "Level " + _0x424e00.data.me.level + " " + _0x424e00.data.me.className;
                if (tankLevel.innerHTML !== _0x1d8ca6) {
                    tankLevel.innerHTML = _0x1d8ca6;
                }
                _0x459fc9.camera.targetX = _0x5cfe2e.me.x;
                _0x459fc9.camera.targetY = _0x5cfe2e.me.y;
                _0x459fc9.camera.x = _0x5cfe2e.me.x;
                _0x459fc9.camera.y = _0x5cfe2e.me.y;
                _0x459fc9.camera._size = Math.sqrt(_0x5cfe2e.me.size / 0x4b);
                if (_0x5cfe2e.me.weapon in _0x2933ec.weapons) {
                    _0x459fc9.camera._size *= _0x2933ec.weapons[_0x5cfe2e.me.weapon].cameraSizeMultiplier || 0x1;
                }
                if (_0x5cfe2e.me.body in _0x2933ec.bodies) {
                    _0x459fc9.camera._size *= _0x2933ec.bodies[_0x5cfe2e.me.body].cameraSizeMultiplier || 0x1;
                }
                _0x424e00.data.me.d = _0x40dc30.mouse.d + 0x0;
                let _0x5b3143 = document.activeElement === chat;
                if (_0x5b3143) {
                    _0x424e00.data.me.typing = true;
                }
                if (_0x5b3143 !== false) {
                    _0x459fc9.typing = _0x5b3143;
                    _0x424e00.send(_0x424e00.currentServer.ws, ["typing", !!_0x5b3143]);
                }
                _0x424e00.data.me.passive = false;
                _0x424e00.data.me._d = false;
                let _0x5f1e09 = _0x424e00.data.me.d / Math.PI * 0x64;
                if (_0x5f1e09 !== _0x40dc30.mouse.sent) {
                    _0x40dc30.mouse.sent = _0x5f1e09;
                    _0x424e00.send(_0x424e00.currentServer.ws, ['d', _0x5f1e09]);
                }
                let _0x2f28cb = (_0x40dc30.mouse.down || false || _0x424e00.keys[0x20] ? 0x1 : 0x0) + (_0x40dc30.mouse.right || _0x424e00.keys[0x10] ? 0x2 : 0x0);
                if (_0x2f28cb !== _0x40dc30.mouse.lastSent) {
                    _0x40dc30.mouse.lastSent = _0x2f28cb;
                    _0x424e00.send(_0x424e00.currentServer.ws, ["firing", _0x2f28cb]);
                }
                let _0x1ebf19 = Math.round(_0x40dc30.mouse.screenX / window.innerWidth * 0x0 * _0x459fc9.camera.size);
                let _0x32c0de = Math.round(_0x40dc30.mouse.screenY / window.innerHeight * 0x0 * _0x459fc9.camera.size);
                let _0x1a1675 = [_0x424e00.controlPosition[0x0] - _0x1ebf19, _0x424e00.controlPosition[0x1] - _0x32c0de];
                _0x1a1675 = Math.sqrt(_0x1a1675[0x0] * _0x1a1675[0x0] + _0x1a1675[0x1] * _0x1a1675[0x1]);
                if (_0x1a1675 > 0x5) {
                    _0x424e00.controlPosition = [_0x1ebf19, _0x32c0de];
                    _0x424e00.send(_0x424e00.currentServer.ws, ['controlPosition', [_0x1ebf19, _0x32c0de]]);
                }
            }
            statUpgradesRight.style.right = statUpgradesLeft.style.left = _0x5b0408 ? "10px" : '-400px';
            _0x459fc9.camera.x = _0x40dc30.average(_0x459fc9.camera.x, _0x459fc9.camera.targetX, 0x19);
            _0x459fc9.camera.y = _0x40dc30.average(_0x459fc9.camera.y, _0x459fc9.camera.targetY, 0x19);
            _0x3c4af6 = _0x3c4af6 * 0.2;
            if (_0x3c4af6 > 0x2) {
                _0x3c4af6 = 0x2;
            }
            if (_0x424e00.lerp < 1.1) {
                _0x424e00.lerp += _0x3c4af6;
            } else {
                _0x424e00.lerp += _0x3c4af6 * (1.25 - _0x424e00.lerp / 1.1);
                if (_0x424e00.lerp > 1.25) {
                    _0x424e00.lerp = 1.25;
                }
            }
            let _0x23076f = _0x459fc9.now / 0x1f4;
            _0x459fc9.radiantColor.r = 127.5 * (0x1 + Math.sin(_0x23076f));
            _0x459fc9.radiantColor.g = 127.5 * (0x1 + Math.sin(_0x23076f + 0x2 * Math.PI / 0x3));
            _0x459fc9.radiantColor.b = 127.5 * (0x1 + Math.sin(_0x23076f + 0x4 * Math.PI / 0x3));
            const _0x4a94bd = {
                'r': 0xff,
                'g': 0xff,
                'b': 0xff
            };
            let _0x3a19f0 = _0x459fc9.averageColors(_0x459fc9.radiantColor, _0x4a94bd, 0.5);
            _0x459fc9.radiantStyle.innerHTML = "\n    .radiantColor {\n      color: " + _0x459fc9.rgb(_0x3a19f0) + ";\n    }\n    ";
            const _0x57a7e2 = {
                'r': 0x64,
                'g': 0x64,
                'b': 0x64
            };
            let _0x18535c = _0x459fc9.averageColors(_0x459fc9.radiantColor, _0x57a7e2, 0.5);
            title.style.color = _0x459fc9.rgb(_0x18535c);
            title.style.webkitTextStrokeColor = _0x459fc9.rgb(_0x459fc9.darken(_0x18535c, 0x3c));
            _0x59faa3.setTransform(false);
            _0x459fc9.ctx.hudCanvas.setTransform(false);
            _0x459fc9.ctx.darknessCanvas.setTransform(false);
            let _0x2431b0 = 0x0 * _0x459fc9.camera.size * 0.5;
            let _0x72b307 = 0x0 * _0x459fc9.camera.size * 0.5;
            _0x59faa3.clearRect(-_0x2431b0, -_0x72b307, _0x2431b0 * 0x2, _0x72b307 * 0x2);
            let _0x392a3d = _0x2431b0 / _0x459fc9.camera.size;
            let _0x1157a9 = _0x72b307 / _0x459fc9.camera.size;
            _0x459fc9.ctx.hudCanvas.clearRect(-_0x392a3d, -_0x1157a9, _0x392a3d * 0x2, _0x1157a9 * 0x2);
            let _0x5853b2 = 0x1 / _0x459fc9.camera.size;
            _0x59faa3.scale(_0x5853b2, _0x5853b2);
            _0x59faa3.translate(-_0x459fc9.camera.x, -_0x459fc9.camera.y);
            let _0x197a57 = _0x59faa3.getTransform();
            _0x59faa3.fillStyle = _0x459fc9.rgb(_0x459fc9.grid.background);
            _0x59faa3.fillRect(_0x459fc9.camera.x - _0x2431b0, _0x459fc9.camera.y - _0x72b307, _0x2431b0 * 0x2, _0x72b307 * 0x2);
            let _0x3b9d9f = 0x5 / _0x459fc9.camera.size;
            if (_0x3b9d9f < 0x1) {
                _0x59faa3.globalAlpha = _0x3b9d9f * _0x3b9d9f;
            }
            _0x59faa3.fillStyle = _0x459fc9.grid.pattern;
            _0x59faa3.fillRect(_0x459fc9.camera.x - _0x2431b0, _0x459fc9.camera.y - _0x72b307, _0x2431b0 * 0x2, _0x72b307 * 0x2);
            if (_0x59faa3.globalAlpha < 0x1) {
                _0x59faa3.globalAlpha = 0x1;
            }
            let _0x263527 = _0x459fc9.particlesUnder.length;
            for (let _0x5bd549 = _0x263527 - 0x1; _0x5bd549 >= 0x0; _0x5bd549--) {
                _0x459fc9.drawParticle(_0x459fc9.particlesUnder[_0x5bd549], _0x459fc9.particlesUnder, 0x1);
            }
            _0x59faa3.fillStyle = _0x459fc9.rgb(_0x459fc9.wallColor, 0x1);
            _0x59faa3.beginPath();
            let _0x400486 = _0x72b307 - _0x459fc9.camera.y - _0x5cfe2e.mapSize;
            if (_0x400486 > 0x0) {
                _0x59faa3.rect(_0x459fc9.camera.x - _0x2431b0, _0x459fc9.camera.y - _0x72b307, _0x2431b0 * 0x2, _0x400486);
            }
            _0x400486 = _0x2431b0 - _0x459fc9.camera.x - _0x5cfe2e.mapSize;
            if (_0x400486 > 0x0) {
                _0x59faa3.rect(_0x459fc9.camera.x - _0x2431b0, _0x459fc9.camera.y - _0x72b307, _0x400486, _0x72b307 * 0x2);
            }
            _0x400486 = _0x72b307 + _0x459fc9.camera.y - _0x5cfe2e.mapSize;
            if (_0x400486) {
                _0x59faa3.rect(_0x459fc9.camera.x - _0x2431b0, _0x459fc9.camera.y + _0x72b307 - _0x400486, _0x2431b0 * 0x2, _0x400486);
            }
            _0x400486 = _0x2431b0 + _0x459fc9.camera.x - _0x5cfe2e.mapSize;
            if (_0x400486) {
                _0x59faa3.rect(_0x459fc9.camera.x + _0x2431b0 - _0x400486, _0x459fc9.camera.y - _0x72b307, _0x400486, _0x72b307 * 0x2);
            }
            _0x59faa3.fill();
            _0x59faa3.closePath();
            _0x400486 = true;
            let _0xb9a5c2 = _0x5cfe2e.walls.length;
            let _0xc8a3d3 = _0x5cfe2e.gates.length;
            let _0x187dc9 = _0x5cfe2e.tanks.length;
            let _0x5389e1 = _0x5cfe2e.bullets.length;
            let _0xc7d58e = _0x5cfe2e.polygons.length;
            for (let _0x1f950e = 0x0; _0x1f950e < _0x187dc9; _0x1f950e++) {
                let _0x318f63 = _0x5cfe2e.tanks[_0x1f950e];
                _0x459fc9.drawRadiantAura(_0x318f63, true, true);
            }
            for (let _0x543935 = 0x0; _0x543935 < _0x5389e1; _0x543935++) {
                let _0x36136f = _0x5cfe2e.bullets[_0x543935];
                _0x459fc9.drawRadiantAura(_0x36136f, true, true, 0.1);
            }
            for (let _0x417d0f = 0x0; _0x417d0f < _0xc7d58e; _0x417d0f++) {
                _0x459fc9.drawRadiantAura(_0x5cfe2e.polygons[_0x417d0f]);
            }
            if (_0x59faa3.globalAlpha < 0x1) {
                _0x59faa3.globalAlpha = 0x1;
            }
            for (let _0x41162b in _0x5cfe2e.wormholes) {
                _0x459fc9.drawWormhole(_0x5cfe2e.wormholes[_0x41162b]);
            }
            for (let _0x403652 = 0x0; _0x403652 < _0xb9a5c2; _0x403652++) {
                _0x459fc9.drawWall(_0x5cfe2e.walls[_0x403652]);
            }
            for (let _0x4a8c4c = 0x0; _0x4a8c4c < _0xc8a3d3; _0x4a8c4c++) {
                _0x459fc9.drawGate(_0x5cfe2e.gates[_0x4a8c4c]);
            }
            for (let _0x1d7d11 = 0x0; _0x1d7d11 < _0xc7d58e; _0x1d7d11++) {
                let _0x503884 = _0x5cfe2e.polygons[_0x1d7d11];
                if (_0x459fc9.inFOV(_0x503884)) {
                    0x0++;
                    _0x459fc9.drawPolygon(_0x503884);
                } else {
                    let _0x3168d7 = _0x503884.color;
                    if (_0x503884.radiant) {
                        _0x3168d7 = _0x503884.radiant ? _0x459fc9.averageColors(_0x3168d7, _0x459fc9.radiantColor, _0x503884.radiant / (_0x503884.radiant + 0x1)) : _0x3168d7;
                    }
                    _0x503884.renderColor = _0x3168d7;
                }
            }
            for (let _0x58c323 = 0x0; _0x58c323 < _0x187dc9; _0x58c323++) {
                _0x459fc9.drawTank(_0x5cfe2e.tanks[_0x58c323]);
            }
            for (let _0x32282a = 0x0; _0x32282a < _0x5389e1; _0x32282a++) {
                _0x459fc9.drawBullet(_0x5cfe2e.bullets[_0x32282a]);
            }
            if (_0x59faa3.globalAlpha < 0x1) {
                _0x59faa3.globalAlpha = 0x1;
            }
            _0x59faa3 = _0x459fc9.ctx.hudCanvas;
            _0x59faa3.setTransform(_0x197a57);
            for (let _0x43fa2e = 0x0; _0x43fa2e < _0x187dc9; _0x43fa2e++) {
                let _0x11fd3b = _0x5cfe2e.tanks[_0x43fa2e];
                _0x459fc9.scaleFade(_0x11fd3b.fadeTime, false);
                _0x459fc9.drawHealthBar(_0x11fd3b);
            }
            for (let _0x3bc4a8 = 0x0; _0x3bc4a8 < _0xc7d58e; _0x3bc4a8++) {
                let _0x20464c = _0x5cfe2e.polygons[_0x3bc4a8];
                _0x459fc9.scaleFade(_0x20464c.fadeTime, false);
                _0x459fc9.drawHealthBar(_0x20464c);
            }
            for (let _0x48071e = 0x0; _0x48071e < _0x187dc9; _0x48071e++) {
                let _0x35cc66 = _0x5cfe2e.tanks[_0x48071e];
                let _0x19ee01 = 0x14;
                _0x459fc9.scaleFade(_0x35cc66.fadeTime, false);
                _0x32b303.drawText("lv. " + _0x35cc66.level, _0x35cc66.x, _0x35cc66.y - _0x35cc66.size - _0x19ee01 * _0x459fc9.camera.size, 0x1e, _0x459fc9.camera.size);
                _0x19ee01 += 0x1e;
                if (_0x35cc66.name) {
                    _0x32b303.drawText(_0x35cc66.name, _0x35cc66.x, _0x35cc66.y - _0x35cc66.size - _0x19ee01 * _0x459fc9.camera.size, 0x32, _0x459fc9.camera.size);
                    _0x19ee01 += 0x32;
                }
            }
            for (let _0x43f9cf = 0x0; _0x43f9cf < _0x187dc9; _0x43f9cf++) {
                let _0x417a76 = _0x5cfe2e.tanks[_0x43f9cf];
                let _0x203856 = _0x417a76.chat;
                let _0x326308 = _0x417a76.typingFade;
                _0x417a76.typingFade = _0x40dc30.average(_0x417a76.typingFade, _0x417a76.typing ? 0x1 : 0x0, 0x5);
                if (_0x203856[0x0] || _0x326308 > 0x0) {
                    let _0x3f68e8 = true;
                    _0x459fc9.scaleFade(_0x417a76.fadeTime, false);
                    let _0x43cc91 = 0x82;
                    if (_0x326308 > 0.01 || _0x417a76.typing) {
                        _0x32b303.drawTextBox("...", _0x417a76.x, _0x417a76.y - _0x417a76.size - (_0x43cc91 - 0x19 * (0x1 - _0x326308) * (0x1 - _0x326308)) * _0x459fc9.camera.size, 0x24, _0x459fc9.camera.size, _0x326308, _0x326308);
                        _0x43cc91 += 0x3f * _0x326308;
                        if (_0x417a76.typing) {
                            _0x3f68e8 = false;
                        }
                    } else {
                        _0x417a76.typingFade = 0x0;
                    }
                    for (let _0x488635 = _0x203856.length - 0x1; _0x488635 >= 0x0; _0x488635--) {
                        let _0x14ee16 = _0x203856[_0x488635];
                        let _0x2d7844 = _0x459fc9.now - _0x14ee16[0x1];
                        let _0x38de03 = _0x14ee16[0x2] - _0x459fc9.now;
                        let _0x58a66e = 0x1;
                        let _0x91f08 = 0x0;
                        if (_0x2d7844 < 0xfa) {
                            _0x58a66e = 0x1 - _0x2d7844 / 0xfa;
                            _0x58a66e = 0x1 - _0x58a66e * _0x58a66e;
                            _0x91f08 = -0x19 * (_0x58a66e - 0x1) * (0x1 - _0x58a66e);
                        } else if (_0x38de03 < 0xfa) {
                            _0x58a66e = _0x38de03 / 0xfa;
                            _0x91f08 = 0x19 * (_0x58a66e - 0x1) * (0x1 - _0x58a66e);
                            _0x58a66e = _0x58a66e * _0x58a66e;
                        }
                        if (_0x38de03 <= 0x0) {
                            _0x203856.slice(_0x488635, 0x1);
                        } else {
                            if (_0x3f68e8) {
                                _0x14ee16[0x3] = _0x40dc30.average(_0x14ee16[0x3], 0x1, 0x3);
                                _0x3f68e8 = false;
                            } else if (_0x14ee16[0x3] > 0.01) {
                                _0x14ee16[0x3] = _0x40dc30.average(_0x14ee16[0x3], 0x0, 0x3);
                            } else {
                                _0x14ee16[0x3] = 0x0;
                            }
                            _0x32b303.drawTextBox(_0x14ee16[0x0], _0x417a76.x, _0x417a76.y - _0x417a76.size - (_0x43cc91 - _0x91f08) * _0x459fc9.camera.size, 0x24, _0x459fc9.camera.size, _0x58a66e, _0x14ee16[0x3]);
                            _0x43cc91 += 0x3f * _0x58a66e;
                        }
                    }
                }
            }
            if (_0x59faa3.globalAlpha < 0x1) {
                _0x59faa3.globalAlpha = 0x1;
            }
            _0x59faa3.setTransform(false);
            if (_0x424e00.data.me) {
                let _0x2485b2 = _0x459fc9.rgb(_0x424e00.data.me.renderColor);
                tankScoreBar.style.background = _0x2485b2;
                tankLevelBar.style.background = _0x2485b2;
            }
            for (let _0x47e75d in _0x1ca7ae.leaderboard.entries) {
                _0x1ca7ae.updateEntry(_0x1ca7ae.leaderboard.entries[_0x47e75d], _0x2369f5, _0x45afa0);
            }
            for (let _0x61142d = _0x1ca7ae.leaderboard.removedEntries.length - 0x1; _0x61142d >= 0x0; _0x61142d--) {
                _0x1ca7ae.updateEntry(_0x1ca7ae.leaderboard.removedEntries[_0x61142d], _0x2369f5, _0x45afa0);
            }
            _0x59faa3 = _0x459fc9.ctx.mapCanvas;
            _0x59faa3.resetTransform();
            _0x59faa3.clearRect(0x0, 0x0, 0x1f4, 0x1f4);
            _0x59faa3.fillStyle = _0x459fc9.rgb(_0x459fc9.grid.background);
            _0x59faa3.fillRect(0x0, 0x0, 0x1f4, 0x1f4);
            _0x59faa3.translate(0xfa, 0xfa);
            if (true || window.$admin) {
                let _0x40fe3b = 0xfa / _0x5cfe2e.mapSize;
                let _0x493a89 = _0x59faa3.getTransform();
                let _0x58e1da = 0x0;
                for (let _0x304012 = _0x5cfe2e.walls.length; _0x58e1da < _0x304012; _0x58e1da++) {
                    let _0x585676 = _0x5cfe2e.walls[_0x58e1da];
                    if (_0x585676.color) {
                        _0x59faa3.fillStyle = _0x459fc9.rgb(_0x585676.color, 0.25);
                    } else {
                        _0x59faa3.fillStyle = _0x459fc9.rgb(_0x459fc9.wallColor, 0x1);
                    }
                    _0x59faa3.fillRect(_0x40fe3b * (_0x585676.x - _0x585676.w), _0x40fe3b * (_0x585676.y - _0x585676.h), _0x40fe3b * _0x585676.w * 0x2, _0x40fe3b * _0x585676.h * 0x2);
                }
                _0x59faa3.fillStyle = "rgb(0, 0, 0)";
                const _0x70e1e3 = {
                    'x': 0x0,
                    'y': 0x0
                };
                let _0x154747 = _0x424e00.data.me || _0x70e1e3;
                for (let _0x18fd4b = _0x5cfe2e.tanks.length - 0x1; _0x18fd4b >= 0x0; _0x18fd4b--) {
                    let _0x235a3f = _0x5cfe2e.tanks[_0x18fd4b];
                    let _0x1d8bbf = _0x235a3f.x - _0x154747.x;
                    let _0x512f25 = _0x235a3f.y - _0x154747.y;
                    let _0x572284 = Math.sqrt(_0x1d8bbf * _0x1d8bbf + _0x512f25 * _0x512f25);
                    let _0x540990 = 0x1;
                    let _0xc9bad2 = _0x235a3f.team === _0x424e00.data.me.team ? 0x320 : 0xfa;
                    if (_0x572284 > _0xc9bad2 && !window.$admin) {
                        _0x540990 = (_0x572284 + _0xc9bad2) / _0x572284 - 0x1;
                        _0x540990 = _0x540990 * _0x540990;
                    }
                    const _0xad2e44 = {
                        'r': 0x0,
                        'g': 0x0,
                        'b': 0x0
                    };
                    _0x59faa3.fillStyle = _0x459fc9.rgb(_0x459fc9.averageColors(_0x235a3f.renderColor, _0xad2e44, 0.5), _0x540990);
                    _0x59faa3.translate(_0x235a3f.x * _0x40fe3b, _0x235a3f.y * _0x40fe3b);
                    _0x59faa3.rotate(_0x235a3f.d);
                    _0x59faa3.beginPath();
                    _0x59faa3.moveTo(-0x9, -0xc);
                    _0x59faa3.lineTo(0x9, -0xc);
                    _0x59faa3.lineTo(0x0, 0x14);
                    _0x59faa3.lineTo(-0x9, -0xc);
                    _0x59faa3.fill();
                    _0x59faa3.closePath();
                    _0x59faa3.setTransform(_0x493a89);
                }
                for (let _0x30bb8a in _0x5cfe2e.wormholes) {
                    let _0x55b3f2 = _0x5cfe2e.wormholes[_0x30bb8a];
                    if (_0x55b3f2.type === 0x2 || _0x55b3f2.type === 0x1) {
                        const _0x7ebe06 = {
                            'r': 0x0,
                            'g': 0x0,
                            'b': 0x0
                        };
                        _0x59faa3.fillStyle = _0x459fc9.rgb(_0x459fc9.averageColors(_0x459fc9.radiantColor, _0x7ebe06, 0.5));
                    } else {
                        const _0x967151 = {
                            'r': 0xff,
                            'g': 0xff,
                            'b': 0xff
                        };
                        _0x59faa3.fillStyle = _0x459fc9.rgb(_0x459fc9.averageColors(_0x55b3f2.mapColor, _0x967151, 0.5 - _0x55b3f2.fadeTime * 0.5));
                    }
                    _0x59faa3.beginPath();
                    _0x59faa3.ellipse(_0x55b3f2.x * _0x40fe3b, _0x55b3f2.y * _0x40fe3b, 0x7, 0x7, 0x0, 0x0, 0x2 * Math.PI);
                    _0x59faa3.fill();
                    _0x59faa3.closePath();
                }
            }
            _0x59faa3 = _0x459fc9.ctx.gameCanvas;
            for (let _0x4300ee = 0x0; _0x4300ee < _0x187dc9; _0x4300ee++) {
                _0x459fc9.drawAuras(_0x5cfe2e.tanks[_0x4300ee], 0x0);
            }
            for (let _0x4bdca7 = 0x0; _0x4bdca7 < _0x5389e1; _0x4bdca7++) {
                _0x459fc9.drawAuras(_0x5cfe2e.bullets[_0x4bdca7], 0x0);
            }
            if (_0x59faa3.globalAlpha < 0x1) {
                _0x59faa3.globalAlpha = 0x1;
            }
            let _0x343661 = _0x459fc9.particlesOver.length;
            for (let _0x4fef7e = _0x343661 - 0x1; _0x4fef7e >= 0x0; _0x4fef7e--) {
                _0x459fc9.drawParticle(_0x459fc9.particlesOver[_0x4fef7e], _0x459fc9.particlesOver, 0x1);
            }
            _0x59faa3 = _0x459fc9.ctx.hudCanvas;
            _0x3c4af6 = 62;
            for (let _0x20efe1 = _0x459fc9.announcements.length - 0x1; _0x20efe1 >= 0x0; _0x20efe1--) {
                let _0x2a01a8 = _0x459fc9.announcements[_0x20efe1];
                let _0x2bc125 = _0x2a01a8.removeTime - _0x459fc9.now;
                let _0x8b7d70 = _0x459fc9.now - _0x2a01a8.showTime;
                let _0x2d7d94 = 0x1;
                let _0x5c82b3 = 0x0;
                if (_0x8b7d70 < 0xfa) {
                    _0x2d7d94 = 0x1 - _0x8b7d70 / 0xfa;
                    _0x2d7d94 = 0x1 - _0x2d7d94 * _0x2d7d94;
                } else if (_0x2bc125 < 0xfa) {
                    _0x2d7d94 = _0x2bc125 / 0xfa;
                    _0x5c82b3 = 0x19 * (_0x2d7d94 - 0x1) * (0x1 - _0x2d7d94);
                    _0x2d7d94 = _0x2d7d94 * _0x2d7d94;
                }
                if (_0x2bc125 <= 0x0) {
                    _0x459fc9.announcements.slice(_0x20efe1, 0x1);
                } else {
                    _0x32b303.drawTextBox(_0x2a01a8.text, 0x0, _0x3c4af6 + _0x5c82b3, 0x24, 0x1, _0x2d7d94);
                    _0x3c4af6 += 0x3f * _0x2d7d94;
                }
            }
            _0x59faa3 = _0x459fc9.ctx.gameCanvas;
            let _0x54cec6 = [0x0, 0x0];
            for (let _0x656e41 = _0x424e00.packetSizes.length - 0x1; _0x656e41 >= 0x0; _0x656e41--) {
                let _0x35c2ec = _0x424e00.packetSizes[_0x656e41];
                _0x54cec6[_0x35c2ec[0x2] ? 0x1 : 0x0] += _0x35c2ec[0x1];
            }
            let _0x9c6908 = _0x459fc9.frames.length;
            let _0x3ae3ad = [["FPS: " + _0x9c6908, (_0x9c6908 - 0x32) / 0xa], ["Send: " + _0x459fc9.formatPacketSize(_0x54cec6[0x1]) + " kb/s", (0x3e8 - _0x54cec6[0x1]) / (_0x54cec6[0x1] > 0x3e8 ? 0xc8 : 0x2ee)], ["Recieve: " + _0x459fc9.formatPacketSize(_0x54cec6[0x0]) + " kb/s", (0x3a98 - _0x54cec6[0x0]) / (_0x54cec6[0x0] > 0x3a98 ? 0x1388 : 0x7d0)], ["Particles Rendered: 0"], ["Walls Rendered: 0"], ["Polygons Rendered: 0"], ["Tank Count: " + _0x424e00.data.tanks.length], ["Polygon Count: " + _0x424e00.data.polygons.length]];
            _0x23076f = '';
            let _0x1b7d6e = [];
            const _0xd8e181 = {
                darkness: _0x1b7d6e
            };
            if (false && _0x400486 || _0xd8e181.darkness !== _0x1b7d6e) {
                _0x459fc9.drawFrame = function () {};
            }
            let _0x4dadba = 0x0;
            for (let _0xe97da0 = _0x3ae3ad.length; _0x4dadba < _0xe97da0; _0x4dadba++) {
                let _0x567976 = _0x3ae3ad[_0x4dadba];
                let _0x1276ea = 0x0;
                let _0xc8e1f9 = 0x64;
                if (_0x567976[0x1] > 0x0) {
                    let _0x19472f = _0x567976[0x1] < 0x1 ? _0x567976[0x1] : 0x1;
                    _0x1276ea = 0xb4 - 0x28 * _0x19472f;
                    _0xc8e1f9 = 0x64 - 0x32 * _0x19472f;
                } else if (_0x567976[0x1] < 0x0) {
                    let _0x4cef60 = _0x567976[0x1] > -0x1 ? _0x567976[0x1] : -0x1;
                    _0x1276ea = 0x3c + 0x3c * _0x4cef60;
                    _0xc8e1f9 = 0x64 + 0x32 * _0x4cef60;
                }
                _0x23076f += "<div style=\"color:hsl(" + _0x1276ea + ", " + 0x64 + "%, " + _0xc8e1f9 + "%)\">" + _0x567976[0x0] + "</div>";
            }
            debugText.innerHTML = _0x23076f;
            for (let _0x587cc0 = _0x1ca7ae.upgradeList.length - 0x1; _0x587cc0 >= 0x0; _0x587cc0--) {
                let _0x5a3e00 = _0x1ca7ae.upgradeList[_0x587cc0];
                for (let _0x4f9f4c in _0x5a3e00.buttons) {
                    _0x1ca7ae.updateUpgradeBox(_0x5a3e00.buttons[_0x4f9f4c]);
                }
            }
            _0x59faa3 = _0x459fc9.ctx.gameCanvas;
        },
        'loop': function () {
            _0x459fc9.drawFrame();
            requestAnimationFrame(_0x459fc9.loop);
        },
        'getTankData': function (_0x55009c, _0x513fcc) {
            let _0x256355 = _0x2933ec.weapons[_0x55009c] || {};
            let _0x2694dd = _0x2933ec.bodies[_0x513fcc] || {};
            const _0x5c2181 = {
                weapon: _0x55009c,
                body: _0x513fcc,
                'x': 0x0,
                'y': 0x0,
                'd': 0x0,
                size: 0x2d,
                'color': _0x459fc9.teamColors[0x0],
                'radiant': 0x0,
                'sides': _0x2694dd.sides || 0x0,
                outerSides: _0x2694dd.outerSides || 0x0,
                outerSize: _0x2694dd.outerSize || 0x0,
                barrels: _0x256355.barrels || [],
                weaponTurrets: _0x256355.weaponTurrets || [],
                turrets: _0x2694dd.turrets || [],
                auras: _0x2694dd.auras || [],
                visualElements: _0x2694dd.visualElements || [],
                weaponVisualElements: _0x256355.weaponVisualElements || [],
                fadeTime: 0x1,
                passive: false,
                passiveFade: 0x0
            };
            return _0x5c2181;
        }
    };
    const _0x5b1bee = {
        inGame: false,
        sentConnecting: false,
        'scoreDisplay': false,
        levelDisplay: false,
        tankName: false
    };
    const _0x1ca7ae = {
        'openChangelog': function () {
            changelogFull.style.top = "50%";
            changelogDark.style.opacity = 0x1;
            changelogDark.style.pointerEvents = 'all';
        },
        'openTips': function () {
            tips.style.top = '50%';
            tipsDark.style.opacity = 0x1;
            tipsDark.style.pointerEvents = "all";
        },
        'openFeedback': function () {
            contact.style.top = '50%';
            contactDark.style.opacity = 0x1;
            contactDark.style.pointerEvents = "all";
        },
        'state': _0x5b1bee,
        'setPlayButton': function (_0x38a586) {
            playMenu.style.opacity = _0x38a586 ? 0x1 : 0x0;
            playMenu.style.pointerEvents = _0x38a586 ? "inherit" : "none";
            connectingSmall.style.opacity = _0x38a586 ? 0x0 : 0x1;
        },
        'setLargeConnecting': function (_0x5de8a1) {
            connecting.style.opacity = _0x5de8a1 ? 0x1 : 0x0;
            connecting.style.top = _0x5de8a1 ? "50%" : "-175px";
        },
        'overlay': 0x0,
        'setOverlay': function (_0x43c710) {
            _0x1ca7ae.overlay = _0x43c710;
            overlay1.style.visibility = _0x43c710 === 0x2 ? 'visible' : 'hidden';
            overlay2.style.pointerEvents = _0x43c710 === 0x0 ? "inherit" : "none";
            overlay2.style.visibility = _0x43c710 === 0x0 ? "visible" : "hidden";
            connecting.style.visibility = _0x43c710 > 0x0 ? "visible" : 'hidden';
            _0x1ca7ae.setLargeConnecting(_0x43c710 === 0x1);
            if (_0x43c710 === 0x1) {
                _0x459fc9.waiting = true;
            } else {
                _0x459fc9.waiting = false;
            }
        },
        'statBars': [],
        'setStatDisplay': function (_0x376576) {
            statDisplayLeft.innerHTML = 'x' + _0x376576;
            statDisplayRight.innerHTML = _0x376576 + 'x';
        },
        'createEntry': function (_0x2fbec3) {
            let _0x762f76 = {
                'div': document.createElement("div"),
                'text': document.createElement('div'),
                'bar': document.createElement("div"),
                'slide': document.createElement('div'),
                'canvas': document.createElement("canvas"),
                'ctx': false,
                'transform': false
            };
            _0x762f76.div.className = "leaderboardEntry";
            _0x762f76.div.style.left = '300px';
            _0x762f76.bar.className = "leaderboardBar";
            _0x762f76.slide.className = "leaderboardSlide";
            _0x762f76.bar.appendChild(_0x762f76.slide);
            _0x762f76.text.className = 'leaderboardText';
            _0x762f76.canvas.className = "leaderboardCanvas";
            _0x762f76.canvas.width = _0x762f76.canvas.height = 0x50;
            _0x762f76.ctx = _0x762f76.canvas.getContext('2d');
            false.translate(0x28, 0x28);
            _0x762f76.transform = false.getTransform();
            leaderboardEntries.appendChild(_0x762f76.div);
            _0x762f76.div.appendChild(_0x762f76.canvas);
            _0x762f76.div.appendChild(_0x762f76.bar);
            _0x762f76.div.appendChild(_0x762f76.text);
            return _0x762f76;
        },
        'updateEntry': function (_0x422847, _0x3bc232, _0xbf9858) {
            let _0xf557c3 = '';
            if (false && !window.$admin) {
                if (_0x422847.name) {
                    _0xf557c3 = _0x422847.name.replace(/\S/g, '?');
                } else {
                    _0xf557c3 = '???';
                }
                _0x422847.displayScore = _0x459fc9.getRadiantMultiplier(_0x422847.radiant) * _0x422847.score;
            } else if (_0x422847.id < 0x0) {
                _0xf557c3 = "???";
                _0x422847.displayScore = _0x459fc9.getRadiantMultiplier(_0x422847.radiant) * _0x422847.score;
            } else {
                if (!_0x422847.name) {
                    _0xf557c3 = _0x459fc9.formatScore(_0x422847.displayScore = _0x459fc9.getRadiantMultiplier(_0x422847.radiant) * _0x422847.score);
                } else {
                    _0xf557c3 = _0x422847.name + " - " + _0x459fc9.formatScore(_0x422847.displayScore = _0x459fc9.getRadiantMultiplier(_0x422847.radiant) * _0x422847.score);
                }
            }
            if (_0xf557c3 !== _0x422847.entry.text.innerHTML) {
                _0x422847.entry.text.innerHTML = _0xf557c3;
            }
            _0x59faa3 = _0x422847.entry.ctx;
            _0x59faa3.setTransform(_0x422847.entry.transform);
            _0x59faa3.clearRect(-0x28, -0x28, 0x50, 0x50);
            _0x59faa3.scale(0.7, 0.7);
            if (_0x422847.type === "tank") {
                let _0x36a329 = _0x3bc232[_0x422847.id];
                let _0x107a36;
                if (_0x36a329) {
                    _0x107a36 = _0x36a329.renderColor;
                } else {
                    let _0x59b8de = _0x424e00.tankData[_0x422847.id];
                    if (!_0x59b8de) {
                        const _0x256d2a = {
                            radiant: 0x0
                        };
                        _0x59b8de = _0x256d2a;
                    } else {
                        _0x422847.radiant = _0x59b8de.radiant;
                    }
                    _0x107a36 = _0x459fc9.averageColors(_0x459fc9.getTankColor(_0x59b8de.team, _0x59b8de.body), _0x459fc9.radiantColor, _0x59b8de.radiant / (_0x59b8de.radiant + 0x1));
                }
                _0x422847.entry.slide.style.background = _0x459fc9.rgb(_0x107a36);
                const _0x2d6687 = {
                    'r': 0x0,
                    'g': 0x0,
                    'b': 0x0
                };
                _0x422847.entry.bar.style.background = _0x459fc9.rgb(_0x459fc9.averageColors(_0x107a36, _0x2d6687, 0.8));
                const _0x3db370 = {
                    size: 0x13,
                    'x': 0x0,
                    'y': 0x0,
                    color: _0x107a36,
                    'd': _0x459fc9.now / 0xbb8 % (0x2 * Math.PI),
                    passiveFade: 0x0
                };
                let _0x3c991f = _0x424e00.tankData[_0x422847.id];
                const _0x5303a1 = {
                    ..._0x3db370,
                    ..._0x2933ec.weapons[_0x3c991f.weapon || "node"],
                    ..._0x2933ec.bodies[_0x3c991f.body || 'base']
                };
                _0x459fc9.drawTank(_0x5303a1);
            } else {
                let _0x5b7d83 = _0xbf9858[_0x422847.id];
                let _0x19e684;
                if (_0x422847.id < 0x0) {
                    _0x19e684 = _0x459fc9.teamColors[0x7];
                } else {
                    if (_0x5b7d83) {
                        _0x19e684 = _0x5b7d83.renderColor;
                    } else {
                        _0x19e684 = _0x459fc9.averageColors(_0x459fc9.getPolygonColor(_0x422847.sides), _0x459fc9.radiantColor, _0x422847.radiant / (_0x422847.radiant + 0x1));
                    }
                }
                _0x422847.entry.slide.style.background = _0x459fc9.rgb(_0x19e684);
                const _0x5b887a = {
                    'r': 0x0,
                    'g': 0x0,
                    'b': 0x0
                };
                _0x422847.entry.bar.style.background = _0x459fc9.rgb(_0x459fc9.averageColors(_0x19e684, _0x5b887a, 0.8));
                _0x459fc9.drawPolygon({
                    'x': 0x0,
                    'y': 0x0,
                    'size': 0x1a,
                    'sides': _0x422847.sides,
                    'color': _0x19e684,
                    'd': _0x459fc9.now / 0xbb8 % (0x2 * Math.PI),
                    'fadeTime': 0x1
                });
            }
            let _0x1a5def = _0x1ca7ae.leaderboard.order[0x0];
            if (_0x1a5def) {
                if (_0x1a5def.displayScore) {
                    _0x422847.percent = _0x422847.displayScore / _0x1a5def.displayScore;
                } else {
                    _0x422847.percent = 0x1;
                }
            }
            _0x422847._percent = _0x40dc30.average(_0x422847._percent, _0x422847.percent, 0xf) || 0x0;
            _0x422847.entry.slide.style.right = 0x64 * (0x1 - _0x422847._percent) + '%';
            _0x59faa3 = _0x459fc9.ctx.gameCanvas;
        },
        'leaderboard': {
            'entries': {},
            'order': [],
            'removedEntries': [],
            'reset': function () {
                for (let _0x569688 in _0x1ca7ae.leaderboard.entries) {
                    _0x1ca7ae.leaderboard.entries[_0x569688].entry.div.remove();
                }
                _0x1ca7ae.leaderboard.entries = {};
            },
            'update': function (_0x49aab7) {
                let _0x3c9ba3 = _0x1ca7ae.leaderboard;
                let _0x2129c4 = {};
                _0x3c9ba3.order = [];
                for (let _0x4dbfc4 = 0x0; _0x4dbfc4 < 0x8; _0x4dbfc4++) {
                    let _0x575b31 = _0x49aab7[_0x4dbfc4];
                    if (_0x575b31) {
                        let _0x111c31 = _0x575b31.type + _0x575b31.id;
                        let _0x346423;
                        if (_0x111c31 in _0x3c9ba3.entries) {
                            _0x346423 = _0x3c9ba3.entries[_0x111c31];
                            delete _0x3c9ba3.entries[_0x111c31];
                            _0x346423.score = _0x575b31.score;
                            _0x346423.name = _0x575b31.name;
                            _0x346423.sides = _0x575b31.sides || 0x0;
                            _0x346423.radiant = _0x575b31.radiant || 0x0;
                        } else {
                            _0x346423 = {
                                'id': _0x575b31.id,
                                'type': _0x575b31.type,
                                'name': _0x575b31.name,
                                'score': _0x575b31.score,
                                'radiant': _0x575b31.radiant || 0x0,
                                'displayScore': _0x459fc9.getRadiantMultiplier(_0x575b31.radiant) * _0x575b31.score,
                                'percent': 0x0,
                                '_percent': 0x0,
                                'sides': _0x575b31.sides || 0x0,
                                'entry': false
                            };
                            _0x346423.entry = _0x1ca7ae.createEntry(_0x346423);
                            setTimeout(function () {
                                _0x346423.entry.div.style.left = '0px';
                            }, 0x64);
                        }
                        _0x3c9ba3.order.push(_0x346423);
                        _0x346423.entry.div.style.top = _0x4dbfc4 * 0x1a + 'px';
                        if (_0x346423.type === "tank") {
                            let _0x4a86bd = _0x424e00.tankData[_0x346423.id];
                            if (_0x4a86bd) {
                                _0x346423.radiant = _0x4a86bd.radiant;
                            }
                        }
                        _0x2129c4[_0x111c31] = _0x346423;
                    } else {
                        _0x3c9ba3.order.push({});
                    }
                }
                for (let _0x1fbd4b in _0x3c9ba3.entries) {
                    let _0xc69578 = _0x3c9ba3.entries[_0x1fbd4b];
                    _0xc69578.entry.div.style.left = "300px";
                    _0x3c9ba3.removedEntries.push(_0xc69578);
                    setTimeout(function () {
                        _0xc69578.entry.div.remove();
                        let _0xc04e3c = _0x3c9ba3.removedEntries.indexOf(_0xc69578);
                        if (_0xc04e3c >= 0x0) {
                            _0x3c9ba3.removedEntries.splice(_0xc04e3c, 0x1);
                        }
                    }, 0x64);
                }
                _0x3c9ba3.entries = _0x2129c4;
            }
        },
        'upgradeList': [],
        'createUpgradeBox': function (_0x120541, _0x477c45, _0x1c4a41) {
            let _0x2ac8e2 = {
                'box': document.createElement("div"),
                'lower': document.createElement("div"),
                'canvas': document.createElement('canvas'),
                'name': document.createElement("div"),
                'weapon': _0x120541,
                'body': _0x477c45,
                'transform': false,
                'ctx': false,
                'tank': false
            };
            _0x2ac8e2.box.className = "upgradeBox";
            _0x2ac8e2.lower.className = "upgradeBoxLower";
            _0x2ac8e2.box.appendChild(_0x2ac8e2.lower);
            _0x2ac8e2.canvas.className = "upgradeCanvas";
            _0x2ac8e2.box.appendChild(_0x2ac8e2.canvas);
            _0x2ac8e2.canvas.width = _0x2ac8e2.canvas.height = 0xc8;
            _0x2ac8e2.name.className = "upgradeName";
            _0x2ac8e2.box.appendChild(_0x2ac8e2.name);
            _0x2ac8e2.name.innerHTML = _0x1c4a41[0x0].toUpperCase() + _0x1c4a41.slice(0x1);
            _0x2ac8e2.ctx = _0x2ac8e2.canvas.getContext('2d');
            false.translate(0x64, 0x64);
            _0x2ac8e2.transform = false.getTransform();
            _0x2ac8e2.tank = _0x459fc9.getTankData(_0x120541, _0x477c45);
            false.size = 0x1c;
            return _0x2ac8e2;
        },
        'updateUpgradeBox': function (_0x21fbec) {
            _0x59faa3 = _0x21fbec.ctx;
            _0x59faa3.setTransform(_0x21fbec.transform);
            _0x59faa3.clearRect(-0x64, -0x64, 0xc8, 0xc8);
            _0x59faa3.scale(1.4, 1.4);
            if (_0x21fbec.tank) {
                if (_0x424e00.data.me) {
                    _0x21fbec.tank.radiant = _0x424e00.data.me.radiant;
                    _0x21fbec.tank.color = _0x424e00.data.me.color;
                    _0x21fbec.tank.invincible = _0x424e00.data.me.invincible;
                }
                let _0x11cb33 = _0x2933ec.bodies[_0x21fbec.tank.body];
                if (_0x11cb33.celestial) {
                    _0x21fbec.tank.size = 0x28;
                } else {
                    _0x21fbec.tank.size = 0x1c;
                }
                _0x21fbec.tank.d = _0x459fc9.now / 0x5dc;
                _0x459fc9.drawTank(_0x21fbec.tank);
            }
        },
        'currentWeaponUpgrades': false,
        'weaponUpgradeTimer': 0x0,
        'lastWeapon': '',
        'createWeaponUpgrades': function (_0x432de2, _0x22a830) {
            let _0x90e9b0 = {
                'div': document.createElement("div"),
                'buttons': {},
                'remove': function () {
                    _0x90e9b0.div.style.left = '-450px';
                    _0x90e9b0.div.style.pointerEvents = "none";
                    if (false === _0x90e9b0) {
                        _0x1ca7ae.currentWeaponUpgrades = false;
                    }
                    setTimeout(function () {
                        _0x90e9b0.div.remove();
                        let _0x13e7b5 = _0x1ca7ae.upgradeList.indexOf(_0x90e9b0);
                        if (_0x13e7b5 >= 0x0) {
                            _0x1ca7ae.upgradeList.splice(_0x13e7b5, 0x1);
                        }
                    }, 0x3e8);
                },
                'label': _0x22a830
            };
            _0x1ca7ae.currentWeaponUpgrades = _0x90e9b0;
            _0x90e9b0.div.className = "weaponUpgrades";
            let _0x563b2d = 0x0;
            for (let _0x179c22 = _0x432de2.length; _0x563b2d < _0x179c22; _0x563b2d++) {
                let _0x15a6e1 = _0x432de2[_0x563b2d];
                let _0x4c70f1 = _0x2933ec.weapons[_0x15a6e1];
                let _0x4e77e1 = _0x90e9b0.buttons[_0x15a6e1] = _0x1ca7ae.createUpgradeBox(_0x15a6e1, _0x4c70f1.renderBody || "base", _0x15a6e1);
                _0x4e77e1.box.style.left = 0x46 + 0x8c * (_0x563b2d % 0x3) + 'px';
                _0x4e77e1.box.style.bottom = 0x46 + 0x8c * Math.floor(_0x563b2d / 0x3) + 'px';
                _0x4e77e1.box.style.background = _0x459fc9.rgb(_0x459fc9.polygonColors[_0x563b2d]);
                _0x90e9b0.div.appendChild(_0x4e77e1.box);
                _0x4e77e1.box.addEventListener("click", function () {
                    if (_0x424e00.data.me) {
                        _0x424e00.send(_0x424e00.currentServer.ws, ["upgradeWeapon", _0x15a6e1]);
                        _0x1ca7ae.weaponUpgradeTimer = performance.now();
                        _0x1ca7ae.lastWeapon = _0x424e00.data.me.weapon;
                    }
                    _0x90e9b0.remove();
                });
            }
            setTimeout(function () {
                _0x90e9b0.div.style.left = "10px";
            }, 0x64);
            overlay1.appendChild(_0x90e9b0.div);
            _0x1ca7ae.upgradeList.push(_0x90e9b0);
        },
        'currentBodyUpgrades': false,
        'bodyUpgradeTimer': 0x0,
        'lastBody': '',
        'createBodyUpgrades': function (_0x3f452f, _0x7afa42) {
            let _0x1b5ba7 = {
                'div': document.createElement("div"),
                'buttons': {},
                'remove': function () {
                    _0x1b5ba7.div.style.right = "-450px";
                    _0x1b5ba7.div.style.pointerEvents = "none";
                    if (false === _0x1b5ba7) {
                        _0x1ca7ae.currentBodyUpgrades = false;
                    }
                    setTimeout(function () {
                        _0x1b5ba7.div.remove();
                        let _0x117753 = _0x1ca7ae.upgradeList.indexOf(_0x1b5ba7);
                        if (_0x117753 >= 0x0) {
                            _0x1ca7ae.upgradeList.splice(_0x117753, 0x1);
                        }
                    }, 0x3e8);
                },
                'label': _0x7afa42
            };
            _0x1ca7ae.currentBodyUpgrades = _0x1b5ba7;
            _0x1b5ba7.div.className = "bodyUpgrades";
            let _0x6ad8b7 = 0x0;
            for (let _0x31fde2 = _0x3f452f.length; _0x6ad8b7 < _0x31fde2; _0x6ad8b7++) {
                let _0x237deb = _0x3f452f[_0x6ad8b7];
                let _0x27ba03 = _0x1b5ba7.buttons[_0x237deb] = _0x1ca7ae.createUpgradeBox('node', _0x237deb, _0x237deb);
                _0x27ba03.box.style.transform = "translate(50%, 50%)";
                _0x27ba03.box.style.right = 0x46 + 0x8c * (_0x6ad8b7 % 0x3) + 'px';
                _0x27ba03.box.style.bottom = 0x46 + 0x8c * Math.floor(_0x6ad8b7 / 0x3) + 'px';
                _0x27ba03.box.style.background = _0x459fc9.rgb(_0x459fc9.polygonColors[_0x6ad8b7]);
                _0x1b5ba7.div.appendChild(_0x27ba03.box);
                _0x27ba03.box.addEventListener("click", function () {
                    if (_0x424e00.data.me) {
                        _0x424e00.send(_0x424e00.currentServer.ws, ["upgradeBody", _0x237deb]);
                        _0x1ca7ae.bodyUpgradeTimer = performance.now();
                        _0x1ca7ae.lastBody = _0x424e00.data.me.body;
                    }
                    _0x1b5ba7.remove();
                });
            }
            setTimeout(function () {
                _0x1b5ba7.div.style.right = '10px';
            }, 0x64);
            overlay1.appendChild(_0x1b5ba7.div);
            _0x1ca7ae.upgradeList.push(_0x1b5ba7);
        }
    };
    window.page = _0x1ca7ae;
    let _0x59faa3 = _0x459fc9.ctx.gameCanvas;
    for (let _0x3fcf25 = 0x1; _0x3fcf25 <= 0x8; _0x3fcf25++) {
        let _0x166b96 = !!(_0x3fcf25 <= 0x4);
        let _0x5cfe37 = _0x166b96 ? "right" : 'left';
        let _0x347bd9 = document.createElement('div');
        _0x347bd9.className = 'statBar' + (_0x166b96 ? "Left" : "Right");
        _0x347bd9.style.bottom = (_0x3fcf25 - (_0x166b96 ? 0x1 : 0x5)) * 0x23 + 'px';
        let _0x45d455 = document.createElement("div");
        _0x45d455.className = 'statBarInner';
        _0x45d455.style[_0x166b96 ? 'left' : 'right'] = "5px";
        _0x347bd9.appendChild(_0x45d455);
        let _0x2ea115 = document.createElement('div');
        _0x2ea115.className = "statBarSlide";
        _0x2ea115.style[_0x5cfe37] = "100%";
        _0x45d455.appendChild(_0x2ea115);
        let _0x4e0714 = document.createElement('div');
        _0x4e0714.className = "statBarSlide2";
        _0x4e0714.style[_0x5cfe37] = "100%";
        _0x45d455.appendChild(_0x4e0714);
        let _0x219e04 = document.createElement("center");
        _0x219e04.className = "statBarText";
        _0x219e04.innerHTML = ["Bullet Penetration", "Bullet Speed", "Bullet Damage", "Reload", "Movement Speed", "Body Damage", "Health Regeneration", "Max Health"][_0x3fcf25 - 0x1];
        _0x45d455.appendChild(_0x219e04);
        let _0x42446e = document.createElement('div');
        _0x42446e.className = "statButton";
        _0x42446e.style[_0x5cfe37] = '5px';
        _0x42446e.innerHTML = '+';
        let _0x23f0ce = _0x3fcf25 - 0x1;
        let _0x8e2e6f = _0x459fc9.polygonColors[[0x2, 0x0, 0x4, 0x1][_0x3fcf25 % 0x4]];
        _0x2ea115.style.background = _0x459fc9.rgb(_0x8e2e6f);
        _0x4e0714.style.background = _0x459fc9.rgb(_0x8e2e6f, 0.2);
        _0x42446e.addEventListener("click", function (_0x8537f1) {
            _0x424e00.upgrade(_0x23f0ce);
        });
        _0x347bd9.appendChild(_0x42446e);
        (_0x166b96 ? statUpgradesLeft : statUpgradesRight).appendChild(_0x347bd9);
        _0x1ca7ae.statBars.push(function (_0x551751) {
            _0x4e0714.style[_0x5cfe37] = _0x2ea115.style[_0x5cfe37] = 0x64 * (0x1 - _0x551751 / 0xf) + '%';
        });
    }
    respawnContinue.addEventListener("click", function () {
        respawnPanel.style.top = '-100%';
        panel.style.opacity = 0x1;
    });
    hudOpacity.addEventListener("input", function () {
        let _0x16169a = hudOpacity.value;
        hudOpacityDisplay.innerHTML = "HUD Opacity: " + _0x16169a + '%';
        overlay1.style.opacity = _0x459fc9.hudOpacity = _0x16169a * 0.01;
    });
    qualityDisplay.innerHTML = "Render Quality: " + (quality.value = Math.round(100)) + '%';
    quality.addEventListener("input", function () {
        let _0x47262e = quality.value;
        qualityDisplay.innerHTML = "Render Quality: " + _0x47262e + '%';
        _0x459fc9.quality = _0x47262e * 0.01;
        _0x459fc9.resize();
    });
    particlesDisplay.innerHTML = "Particles: " + (particles.value = Math.round(100)) + '%';
    particles.addEventListener("input", function () {
        let _0x54abcf = particles.value;
        particlesDisplay.innerHTML = "Particles: " + _0x54abcf + '%';
        _0x459fc9.particles = _0x54abcf * 0.01;
    });
    playButton.addEventListener("click", function () {
        if (_0x1ca7ae.state.inGame === false && _0x1ca7ae.state.sentConnecting === false) {
            _0x459fc9.reset();
            _0x1ca7ae.leaderboard.reset();
            _0x424e00.autoFire = false;
            _0x424e00.autoSpin = false;
            _0x424e00.passive = false;
            _0x459fc9.typing = false;
            panel.style.opacity = 0x0;
            _0x1ca7ae.setOverlay(0x1);
            _0x424e00.checkAlt(true);
            setTimeout(function () {
                if (_0x424e00.checkAlt()) {
                    _0x424e00.connect = function () {};
                    _0x424e00.currentServer.ws.close();
                    _0x1ca7ae.setOverlay(0x0);
                } else {
                    let _0x23caa8 = document.getElementById("serverSelectOptions").value;
                    if (_0x23caa8 === "ffa" || _0x23caa8 === "2teams" || _0x23caa8 === '4teams' || _0x23caa8 === "pvp") {
                        _0x424e00.send(_0x424e00.currentServer.ws, ["joinGame", [(_0x47f54b.value || '').slice(0x0, 0x32), _0x23caa8]]);
                    }
                }
            }, 0x1f4);
        }
    });
    _0x47f54b.value = localStorage.username || '';
    _0x47f54b.addEventListener("input", function () {
        localStorage.username = _0x47f54b.value;
    });
    window.addEventListener("resize", _0x459fc9.resize);
    document.addEventListener('keydown', _0x424e00.keydown);
    document.addEventListener('keyup', _0x424e00.keyup);
    document.addEventListener('mousemove', _0x424e00.mousemove);
    document.addEventListener('mousedown', _0x424e00.mousedown);
    document.addEventListener("wheel", _0x424e00.wheel);
    document.addEventListener('mouseup', _0x424e00.mouseup);
    window.oncontextmenu = function () {
        return false;
    };
    fetch("changelog").then(_0x12bf83 => _0x12bf83.text()).then(_0x17c3b9 => {
        let _0x5d2dca = [];
        let _0x1acb8f = _0x17c3b9.split("\n");
        let _0x42ec63 = false;
        let _0x58b2ab = 0x0;
        for (let _0x5428e0 = _0x1acb8f.length; _0x58b2ab < _0x5428e0; _0x58b2ab++) {
            let _0x5e8284 = _0x1acb8f[_0x58b2ab];
            if (_0x5e8284.startsWith("BETA")) {
                if (_0x42ec63) {
                    _0x5d2dca.push(_0x42ec63);
                }
                const _0x1ea895 = {
                    'title': _0x5e8284,
                    contents: []
                };
                _0x42ec63 = _0x1ea895;
            } else if (_0x42ec63 && _0x5e8284[0x0] === '-') {
                if (_0x5e8284[0x1] === '-') {
                    _0x42ec63.contents.push({
                        'indent': 0x1,
                        'text': _0x5e8284.slice(0x2)
                    });
                } else {
                    _0x42ec63.contents.push({
                        'indent': 0x0,
                        'text': _0x5e8284.slice(0x1)
                    });
                }
            }
        }
        if (_0x42ec63) {
            _0x5d2dca.push(_0x42ec63);
        }
        let _0x381622 = _0x5d2dca[0x0];
        let _0x4fbc11 = "<div style=\"line-height:140%;\">CHANGELOG - " + _0x381622.title + "</div>";
        let _0x11e52d = 0x0;
        for (let _0x458c10 = Math.min(0x5, _0x381622.contents.length); _0x11e52d < _0x458c10; _0x11e52d++) {
            let _0x4a29e9 = _0x381622.contents[_0x11e52d];
            _0x4fbc11 += "<div style=\"line-height:140%;margin-left:" + _0x4a29e9.indent * 0x32 + "px;\">- " + _0x4a29e9.text + "</div>";
        }
        _0x4fbc11 += "<div style=\"line-height:140%;margin-left:20px;\">...<span style=\"margin-left:20px;\"></span>...<span style=\"margin-left:20px;\"></span>...<span style=\"margin-left:20px;\"></span>...<span style=\"margin-left:20px;\"></span>...<span style=\"margin-left:20px;\"></span>...<span style=\"margin-left:20px;\"></span>...<span style=\"margin-left:20px;\"></span>...<span style=\"margin-left:20px;\"></span>...</div>";
        changelog.innerHTML = _0x4fbc11;
        _0x4fbc11 = '';
        let _0x2d3382 = 0x0;
        for (let _0x446262 = _0x5d2dca.length; _0x2d3382 < _0x446262; _0x2d3382++) {
            let _0x95847a = _0x5d2dca[_0x2d3382];
            _0x4fbc11 += "<div style=\"line-height:210%;\">" + _0x95847a.title + "</div>";
            let _0x8ec7fc = 0x0;
            for (let _0x482453 = _0x95847a.contents.length; _0x8ec7fc < _0x482453; _0x8ec7fc++) {
                let _0x5cd5a8 = _0x95847a.contents[_0x8ec7fc];
                _0x4fbc11 += "<div style=\"line-height:140%;margin-left:" + (0x32 + _0x5cd5a8.indent * 0x32) + "px;\">- " + _0x5cd5a8.text + "</div>";
            }
            if (_0x2d3382 < _0x446262 - 0x1) {
                _0x4fbc11 += "<hr>";
            }
        }
        changelogContent.innerHTML = _0x4fbc11;
        let _0x391c13 = document.createElement("div");
        _0x391c13.style.lineHeight = "200%";
        _0x391c13.innerHTML = "you can view the full changelog ";
        let _0x4db77b = document.createElement("span");
        _0x4db77b.className = "link";
        _0x4db77b.innerHTML = "here";
        _0x391c13.appendChild(_0x4db77b);
        _0x4db77b.addEventListener("click", function () {
            _0x1ca7ae.openChangelog();
        });
        changelog.appendChild(_0x391c13);
    });
    changelogBack.addEventListener("click", function () {
        changelogFull.style.top = "-100%";
        changelogDark.style.opacity = 0x0;
        changelogDark.style.pointerEvents = "none";
    });
    tipsBack.addEventListener("click", function () {
        tips.style.top = "-100%";
        tipsDark.style.opacity = 0x0;
        tipsDark.style.pointerEvents = "none";
    });
    contactSubmit.addEventListener("click", function () {
        contactContent.value = '';
        contact.style.top = '-100%';
        contactDark.style.opacity = 0x0;
        contactDark.style.pointerEvents = "none";
    });
    contactCancel.addEventListener("click", function () {
        contactContent.value = '';
        contact.style.top = "-100%";
        contactDark.style.opacity = 0x0;
        contactDark.style.pointerEvents = "none";
    });
    _0x459fc9.grid.generate();
    _0x459fc9.resize();
    document.body.style.visibility = 'visible';
    if (location.href.includes("8443")) {
        _0x424e00.connectTo("wss://scenexe2.io:8443/ws");
    }
    if (_0x459fc9.tankEditor) {
        let _0x2c4279 = document.getElementById("tankEditor");
        _0x2c4279.style.visibility = "visible";
        let _0x11c014 = document.createElement("canvas");
        _0x11c014.width = _0x11c014.height = 0x3e8;
        const _0x35b121 = {
            'width': "500px",
            height: "500px",
            position: "absolute",
            'top': '0',
            left: '0',
            cursor: "crosshair"
        };
        _0x459fc9.style(_0x11c014, _0x35b121);
        const _0x31e950 = {
            'lx': 0x0,
            'ly': 0x0,
            'x': 0x0,
            'y': 0x0,
            active: false
        };
        const _0x4b4689 = document.createElement("div");
        _0x4b4689.className = "tankEditorInput";
        _0x4b4689.style.position = "absolute";
        _0x4b4689.style.transform = "translate(10px, 0)";
        _0x4b4689.style.zIndex = 0x3e7;
        _0x4b4689.style.pointerEvents = "none";
        _0x4b4689.style.paddingLeft = _0x4b4689.style.paddingRight = "5px";
        _0x4b4689.styleopacity = 0x0;
        _0x4b4689.style.transition = "opacity 0.1s ease";
        _0x2c4279.appendChild(_0x4b4689);
        _0x11c014.addEventListener("wheel", function (_0x322083) {
            let _0x206f69 = _0x322083.deltaY * 0.01;
            _0x459fc9.camera.zoom += _0x206f69;
            if (_0x459fc9.camera.zoom < -0x4) {
                _0x459fc9.camera.zoom = -0x4;
            }
            _0x459fc9.camera._zoom = Math.pow(1.5, _0x459fc9.camera.zoom);
            if (_0x459fc9.camera._zoom > 0xa) {
                _0x459fc9.camera._zoom = 0xa;
                _0x459fc9.camera.zoom = Math.log(_0x459fc9.camera._zoom) / Math.log(1.5);
            }
        });
        document.addEventListener('mousemove', function (_0x55c91f) {
            _0x31e950.x = _0x55c91f.clientX * 0x1;
            _0x31e950.y = _0x55c91f.clientY * 0x1;
            _0x4b4689.style.left = "0px";
            _0x4b4689.style.top = "0px";
            let _0x448a35 = _0x55c91f.target;
            if (_0x448a35.tooltip) {
                _0x4b4689.innerHTML = _0x448a35.tooltip;
                _0x4b4689.style.opacity = 0x1;
            } else {
                _0x4b4689.style.opacity = 0x0;
            }
        });
        _0x11c014.addEventListener('mousedown', function (_0x491e2e) {
            _0x31e950.active = true;
            _0x31e950.lx = 0x0;
            _0x31e950.ly = 0x0;
        });
        document.addEventListener('mouseup', function (_0x5eea38) {
            _0x31e950.active = false;
        });
        _0x2c4279.appendChild(_0x11c014);
        const _0x50a318 = document.createElement("button");
        _0x50a318.innerHTML = "reset view";
        const _0x38861a = {
            position: "absolute",
            top: "505px",
            left: "5px",
            'width': "242px"
        };
        _0x459fc9.style(_0x50a318, _0x38861a);
        _0x50a318.className = "tankEditorButton";
        _0x50a318.tooltip = "Reset the camera position and zoom";
        _0x50a318.addEventListener("click", function () {
            _0x459fc9.camera.x = _0x459fc9.camera.y = 0x0;
            _0x459fc9.camera.zoom = 0x0;
            _0x459fc9.camera._zoom = 0x1;
            _0x459fc9.camera.size = 0x1;
        });
        const _0x1409bd = document.createElement('button');
        _0x1409bd.innerHTML = "clear selection";
        const _0x5a3dea = {
            position: "absolute",
            'top': "505px",
            left: "257px",
            width: "242px"
        };
        _0x459fc9.style(_0x1409bd, _0x5a3dea);
        _0x1409bd.className = "tankEditorButton";
        _0x1409bd.tooltip = "Clears selected item";
        _0x1409bd.addEventListener('click', function () {
            _0x4de3a9 = false;
        });
        const _0x315167 = document.createElement('button');
        _0x315167.innerHTML = "toggle passive";
        const _0x48316a = {
            'position': 'absolute',
            top: "550px",
            left: "5px",
            width: "242px"
        };
        _0x459fc9.style(_0x315167, _0x48316a);
        _0x315167.className = "tankEditorButton";
        _0x315167.tooltip = "Toggles whether tank is rendered on passive or not";
        _0x315167.addEventListener("click", function () {
            _0x58815a.passive = true;
        });
        const _0x196d15 = function (_0x5b0c48, _0x754b96, _0x388725, _0x5eda6b, _0x3b5de4, _0x20ff70) {
            const _0x1a17a1 = document.createElement("div");
            const _0x1b1f82 = document.createElement("span");
            _0x1b1f82.style.color = "rgb(100, 100, 100)";
            _0x1b1f82.innerHTML = _0x5b0c48;
            const _0x4b1c11 = document.createElement('input');
            _0x4b1c11.className = "tankEditorInput";
            _0x4b1c11.style.marginLeft = "5px";
            _0x4b1c11.style.paddingLeft = _0x4b1c11.style.paddingRight = '5px';
            _0x4b1c11.placeholder = _0x754b96;
            _0x4b1c11.tooltip = _0x20ff70;
            _0x4b1c11.value = _0x3b5de4;
            _0x4b1c11.style.width = "calc(100% - 30px)";
            _0x1a17a1.appendChild(_0x1b1f82);
            _0x1a17a1.appendChild(_0x4b1c11);
            const _0x185a40 = {
                value: _0x3b5de4
            };
            _0x1a17a1.style.marginBottom = '10px';
            _0x4b1c11.addEventListener('input', function (_0x3694ca) {
                _0x388725(_0x3694ca, _0x4b1c11, _0x185a40);
            });
            _0x4b1c11.addEventListener("blur", function (_0x114b32) {
                _0x5eda6b(_0x114b32, _0x4b1c11, _0x185a40);
            });
            _0x1a17a1.set = function (_0x22317f) {
                _0x185a40.value = _0x22317f;
                _0x4b1c11.value = arguments.length > 0x1 ? arguments[0x1] : _0x22317f;
            };
            return _0x1a17a1;
        };
        const _0x38063f = {
            position: 'absolute',
            top: "600px",
            left: "5px"
        };
        _0x2c4279.appendChild(_0x459fc9.style(_0x196d15("[visual] Radiant:", "radiant", function (_0x53bc90, _0x28715, _0x52bc27) {
            let _0xc021e9 = parseInt(_0x28715.value);
            if (_0xc021e9 >= 0x0 || _0xc021e9 <= 0x0) {
                if (_0xc021e9 > 0x64) {
                    _0xc021e9 = 0x64;
                } else if (_0xc021e9 < -0x64) {
                    _0xc021e9 = -0x64;
                }
                _0x58815a.radiant = _0x52bc27.value = _0xc021e9;
            }
        }, function (_0x338171, _0x46388d, _0x2d3f9f) {
            let _0x4725fa = parseInt(_0x46388d.value);
            if (_0x4725fa >= 0x0 || _0x4725fa <= 0x0) {
                if (_0x4725fa > 0x64) {
                    _0x4725fa = 0x64;
                } else if (_0x4725fa < -0x64) {
                    _0x4725fa = -0x64;
                }
                _0x46388d.value = _0x2d3f9f.value = _0x58815a.radiant = _0x4725fa;
            } else {
                _0x46388d.value = _0x2d3f9f.value = 0x0;
            }
        }, 0x0, "This won't export in the tank code<br>It will only affect how it is rendered here"), _0x38063f));
        const _0x5fefdd = {
            position: "absolute",
            'top': "670px",
            left: "5px"
        };
        _0x2c4279.appendChild(_0x459fc9.style(_0x196d15("[visual] Size:", 'size', function (_0x2252f1, _0x1b444b, _0x349284) {
            let _0x5c90b1 = parseInt(_0x1b444b.value);
            if (_0x5c90b1 >= 0x0) {
                if (_0x5c90b1 > 0x3e8) {
                    _0x5c90b1 = 0x3e8;
                }
                _0x48edfc = _0x349284.value = _0x5c90b1;
            }
        }, function (_0x1f2ad6, _0x187437, _0x3ae6b6) {
            let _0x3e5006 = parseInt(_0x187437.value);
            if (_0x3e5006 >= 0x0) {
                if (_0x3e5006 > 0x3e8) {
                    _0x3e5006 = 0x3e8;
                }
                _0x187437.value = _0x3ae6b6.value = _0x48edfc = _0x3e5006;
            } else {
                _0x187437.value = _0x3ae6b6.value = _0x48edfc;
            }
        }, 0x32, "This won't export in the tank code<br>It will only affect how it is rendered here"), _0x5fefdd));
        const _0x72cf7a = {
            position: "absolute",
            top: '740px',
            left: "5px"
        };
        _0x2c4279.appendChild(_0x459fc9.style(_0x196d15("[visual] Color (team id):", "team id", function (_0x3efd5d, _0x1a925c, _0x45d518) {
            let _0x4a51a0 = parseInt(_0x1a925c.value);
            if (_0x4a51a0 >= 0x0 && _0x459fc9.teamColors[_0x4a51a0]) {
                _0x45d518.value = _0x58815a.team = _0x4a51a0;
                _0x58815a.color = _0x459fc9.teamColors[_0x4a51a0];
            }
        }, function (_0x54e473, _0x5a8e45, _0x3d22da) {
            let _0x7f9c64 = parseInt(_0x5a8e45.value);
            if (_0x459fc9.teamColors[_0x7f9c64]) {
                _0x5a8e45.value = _0x3d22da.value = _0x58815a.team = _0x7f9c64;
                _0x58815a.color = _0x459fc9.teamColors[_0x7f9c64];
            } else {
                _0x5a8e45.value = _0x3d22da.value = _0x58815a.team;
            }
        }, 0x0, "This won't export in the tank code<br>It will only affect how it is rendered here"), _0x72cf7a));
        const _0x4bf886 = document.createElement("div");
        const _0x3f2bf9 = {
            position: 'absolute',
            top: '5px',
            left: "505px",
            'width': "300px",
            height: "calc(100% - 10px)",
            overflowY: "scroll",
            overflowX: 'hidden'
        };
        _0x2c4279.appendChild(_0x459fc9.style(_0x4bf886, _0x3f2bf9));
        let _0x8ca70e;
        _0x4bf886.appendChild(_0x8ca70e = _0x196d15("[weapon] Camera Size:", "number", function (_0x721deb, _0x1de9c5, _0x560404) {
            let _0x37fd0f = parseFloat(_0x1de9c5.value);
            if (_0x37fd0f > 0x0) {
                if (_0x37fd0f > 0x64) {
                    _0x37fd0f = 0x64;
                }
                _0x58815a.weaponCameraSize = _0x560404.value = _0x37fd0f;
            }
        }, function (_0x447aa6, _0x4a02e7, _0x5db523) {
            let _0x176ab9 = parseFloat(_0x4a02e7.value);
            if (_0x176ab9 > 0x0) {
                if (_0x176ab9 > 0x64) {
                    _0x176ab9 = 0x64;
                }
                _0x4a02e7.value = _0x5db523.value = _0x58815a.weaponCameraSize = _0x176ab9;
            } else {
                _0x4a02e7.value = _0x5db523.value = 0x1;
            }
        }, 0x1, "How far this weapon can see"));
        let _0x450b42;
        _0x4bf886.appendChild(_0x450b42 = _0x196d15("[body] Camera Size:", "number", function (_0x4b6483, _0x58bf01, _0x4ff569) {
            let _0x5485a3 = parseFloat(_0x58bf01.value);
            if (_0x5485a3 > 0x0) {
                if (_0x5485a3 > 0x64) {
                    _0x5485a3 = 0x64;
                }
                _0x58815a.bodyCameraSize = _0x4ff569.value = _0x5485a3;
            }
        }, function (_0x5d3e29, _0x35c66a, _0x215b83) {
            let _0x26040d = parseFloat(_0x35c66a.value);
            if (_0x26040d > 0x0) {
                if (_0x26040d > 0x64) {
                    _0x26040d = 0x64;
                }
                _0x35c66a.value = _0x215b83.value = _0x58815a.bodyCameraSize = _0x26040d;
            } else {
                _0x35c66a.value = _0x215b83.value = _0x58815a.bodyCameraSize;
            }
        }, 0x1, "How far this body can see"));
        let _0x357555;
        _0x4bf886.appendChild(_0x357555 = _0x196d15("[body] Sides:", "sides", function (_0x1fbf64, _0x587692, _0x92c10b) {
            let _0x14062a = parseInt(_0x587692.value);
            if (_0x14062a >= 0x0 || _0x14062a <= 0x0) {
                if (_0x14062a > 0x64) {
                    _0x14062a = 0x64;
                } else if (_0x14062a < 0x0) {
                    _0x14062a = 0x0;
                }
                _0x58815a.sides = _0x92c10b.value = _0x14062a;
            }
        }, function (_0x283055, _0x282459, _0x4db1bc) {
            let _0x35accb = parseInt(_0x282459.value);
            if (_0x35accb >= 0x0 || _0x35accb <= 0x0) {
                if (_0x35accb > 0x64) {
                    _0x35accb = 0x64;
                } else if (_0x35accb < 0x0) {
                    _0x35accb = 0x0;
                }
                _0x282459.value = _0x4db1bc.value = _0x58815a.sides = _0x35accb;
            } else {
                _0x282459.value = _0x4db1bc.value = 0x0;
            }
        }, 0x0, "Number of sides the body has<br>Set to 0 for circle<br>Set to 1 to not render<br>Use visual elements for custom bodies"));
        let _0x29db02;
        _0x4bf886.appendChild(_0x29db02 = _0x196d15("[body] Outer Sides:", "sides", function (_0x360650, _0x3768dc, _0x38eae8) {
            if (!_0x3768dc.value) {
                _0x58815a.outerSides = _0x38eae8.value = false;
            }
            let _0x38e340 = parseInt(_0x3768dc.value);
            if (_0x38e340 >= 0x0 || _0x38e340 <= 0x0) {
                if (_0x38e340 > 0x64) {
                    _0x38e340 = 0x64;
                } else if (_0x38e340 < 0x0) {
                    _0x38e340 = 0x0;
                }
                _0x58815a.outerSides = _0x38eae8.value = _0x38e340;
            }
        }, function (_0x2dd97f, _0x5ba111, _0x1cbc06) {
            if (!_0x5ba111.value) {
                _0x58815a.outerSides = _0x1cbc06.value = false;
            }
            let _0x16bf5b = parseInt(_0x5ba111.value);
            if (_0x16bf5b >= 0x0 || _0x16bf5b <= 0x0) {
                if (_0x16bf5b > 0x64) {
                    _0x16bf5b = 0x64;
                } else if (_0x16bf5b < 0x0) {
                    _0x16bf5b = 0x0;
                }
                _0x5ba111.value = _0x1cbc06.value = _0x58815a.outerSides = _0x16bf5b;
            } else {
                _0x5ba111.value = _0x1cbc06.value = _0x58815a.outerSides;
                if (!(_0x58815a.outerSides >= 0x0 || _0x58815a.outerSides <= 0x0)) {
                    _0x58815a.outerSides = _0x1cbc06.value = false;
                }
            }
            if (_0x1cbc06.value === false) {
                _0x5ba111.value = '';
            }
        }, '', "Rendering for spike thing<br>Leave blank if you don't want"));
        let _0x475f78;
        _0x4bf886.appendChild(_0x475f78 = _0x196d15("[body] Outer Size:", "outer size", function (_0x385293, _0x4c0196, _0x3470b0) {
            if (!_0x4c0196.value) {
                _0x58815a.outerSize = _0x3470b0.value = false;
            }
            let _0x31f9cb = parseFloat(_0x4c0196.value);
            if (_0x31f9cb > 0x0) {
                if (_0x31f9cb > 0x64) {
                    _0x31f9cb = 0x64;
                }
                _0x58815a.outerSize = _0x3470b0.value = _0x31f9cb;
            }
        }, function (_0xd359a, _0xf8335a, _0x573eac) {
            if (!_0xf8335a.value) {
                _0x58815a.outerSize = _0x573eac.value = false;
            }
            let _0x3d02d9 = parseFloat(_0xf8335a.value);
            if (_0x3d02d9 >= 0x0 || _0x3d02d9 <= 0x0) {
                if (_0x3d02d9 > 0x64) {
                    _0x3d02d9 = 0x64;
                } else if (_0x3d02d9 < 0x0) {
                    _0x3d02d9 = 0x0;
                }
                _0xf8335a.value = _0x573eac.value = _0x58815a.outerSize = _0x3d02d9;
            } else {
                _0xf8335a.value = _0x573eac.value = _0x58815a.outerSize;
                if (!(_0x58815a.outerSides > 0x0)) {
                    _0x58815a.outerSize = _0x573eac.value = false;
                }
            }
            if (_0x573eac.value === false) {
                _0xf8335a.value = '';
            }
        }, '', "Rendering for spike thing<br>Leave blank if you don't want"));
        let _0x16c23f;
        _0x4bf886.appendChild(_0x16c23f = _0x196d15("[body] Movement Speed:", "number", function (_0x1fb636, _0x1f4494, _0x64c0a1) {
            let _0xf69567 = parseFloat(_0x1f4494.value);
            if (_0xf69567 >= 0x0) {
                if (_0xf69567 > 0x64) {
                    _0xf69567 = 0x64;
                }
                _0x58815a.movementSpeed = _0x64c0a1.value = _0xf69567;
            }
        }, function (_0x2a058f, _0x20c716, _0x391792) {
            let _0x5592bc = parseFloat(_0x20c716.value);
            if (_0x5592bc >= 0x0) {
                if (_0x5592bc > 0x64) {
                    _0x5592bc = 0x64;
                }
                _0x20c716.value = _0x391792.value = _0x58815a.movementSpeed = _0x5592bc;
            } else {
                _0x20c716.value = _0x391792.value = 0x1;
            }
        }, 0x1, "How fast this body goes"));
        let _0x47348c;
        _0x4bf886.appendChild(_0x47348c = _0x196d15("[body] Max Health:", "number", function (_0x28c8c8, _0x2822e0, _0x1398b3) {
            let _0x5d6809 = parseFloat(_0x2822e0.value);
            if (_0x5d6809 >= 0x0) {
                if (_0x5d6809 > 0xf4240) {
                    _0x5d6809 = 0xf4240;
                }
                _0x58815a.maxHealth = _0x1398b3.value = _0x5d6809;
            }
        }, function (_0x30f2a9, _0x340dff, _0xc171fa) {
            let _0x4b12c6 = parseFloat(_0x340dff.value);
            if (_0x4b12c6 >= 0x0) {
                if (_0x4b12c6 > 0xf4240) {
                    _0x4b12c6 = 0xf4240;
                }
                _0x340dff.value = _0xc171fa.value = _0x58815a.maxHealth = _0x4b12c6;
            } else {
                _0x340dff.value = _0xc171fa.value = 0x1;
            }
        }, 0x1, "How much health this body has"));
        let _0xf97091;
        _0x4bf886.appendChild(_0xf97091 = _0x196d15("[body] Body Damage:", 'number', function (_0x1bf45d, _0x2abd94, _0x5839ae) {
            let _0x54c173 = parseFloat(_0x2abd94.value);
            if (_0x54c173 >= 0x0) {
                if (_0x54c173 > 0xf4240) {
                    _0x54c173 = 0xf4240;
                }
                _0x58815a.bodyDamage = _0x5839ae.value = _0x54c173;
            }
        }, function (_0x3114c9, _0x2624a0, _0x393e99) {
            let _0x1076c7 = parseFloat(_0x2624a0.value);
            if (_0x1076c7 >= 0x0) {
                if (_0x1076c7 > 0xf4240) {
                    _0x1076c7 = 0xf4240;
                }
                _0x2624a0.value = _0x393e99.value = _0x58815a.bodyDamage = _0x1076c7;
            } else {
                _0x2624a0.value = _0x393e99.value = 0x1;
            }
        }, 0x1, "How much body damage this body does"));
        const _0x13e953 = function (_0x5ee8b8) {
            let _0x2a89a9 = document.createElement("span");
            let _0x42359b = document.createElement("button");
            _0x42359b.className = "tankEditorButton";
            _0x42359b.innerHTML = '+';
            _0x42359b.tooltip = 'Create';
            _0x42359b.style.fontSize = "14px";
            _0x42359b.style.marginLeft = "10px";
            _0x42359b.style.fontWeight = 0x384;
            _0x2a89a9.innerHTML = _0x5ee8b8;
            _0x2a89a9.style.color = "rgb(100, 100, 100)";
            _0x4bf886.appendChild(_0x2a89a9);
            _0x4bf886.appendChild(_0x42359b);
            let _0x5dec8f = document.createElement('div');
            _0x5dec8f.style.borderLeft = "2px solid rgb(100, 100, 100)";
            _0x5dec8f.style.marginBottom = _0x5dec8f.style.marginLeft = "10px";
            _0x4bf886.appendChild(_0x5dec8f);
            _0x5dec8f.set = function (_0x5cb497) {
                _0x5dec8f.innerHTML = '';
                let _0x40bf66 = 0x0;
                for (let _0x240042 = _0x5cb497.length; _0x40bf66 < _0x240042; _0x40bf66++) {
                    let _0xa773eb = _0x5cb497[_0x40bf66];
                    let _0x366c9f = document.createElement("div");
                    _0x366c9f.innerHTML = _0xa773eb[0x0];
                    _0x366c9f.style.marginBottom = '5px';
                    _0x366c9f.style.paddingLeft = "5px";
                    _0x366c9f.style.marginLeft = "3px";
                    _0x366c9f.style.color = "rgb(100, 100, 100)";
                    _0x366c9f.className = "tankEditorEntry";
                    _0x366c9f.addEventListener("click", _0xa773eb[0x1]);
                    _0x5dec8f.appendChild(_0x366c9f);
                }
            };
            _0x5dec8f.set([['a'], ['b'], ['c']]);
            return _0x5dec8f;
        };
        const _0x51c93f = _0x13e953("[weapon] Barrels:");
        const _0x1ca53a = document.createElement('div');
        const _0x2a4059 = function (_0x5562f0) {
            _0x4de3a9 = _0x5562f0;
            _0x52ee3a.set(_0x4de3a9.width);
            _0x40cec3.set(_0x4de3a9.height);
        };
        const _0x35436a = function () {
            let _0x3a26c9 = [];
            let _0x24e070 = 0x0;
            for (let _0x541d74 = _0x58815a.barrels.length; _0x24e070 < _0x541d74; _0x24e070++) {
                let _0xb4e5f4 = _0x58815a.barrels[_0x24e070];
                _0x3a26c9.push(["Barrel Type " + _0xb4e5f4.type, function () {
                    _0x2a4059(_0xb4e5f4);
                }]);
            }
            _0x51c93f.set(_0x3a26c9.reverse());
        };
        const _0x4fc458 = {
            position: 'absolute',
            top: '5px',
            left: "810px",
            width: "300px",
            height: "calc(100% - 10px)",
            overflowY: 'scroll',
            overflowX: 'hidden'
        };
        _0x2c4279.appendChild(_0x459fc9.style(_0x1ca53a, _0x4fc458));
        let _0x4de3a9 = false;
        let _0x52ee3a;
        let _0x40cec3;
        _0x1ca53a.appendChild(_0x52ee3a = _0x196d15("[barrel] Width:", "number", function (_0x5c8420, _0x5f5979, _0x21ca38) {
            let _0x196f19 = parseFloat(_0x5f5979.value);
            if (_0x196f19 > 0x0 && _0x4de3a9) {
                if (_0x196f19 > 0x64) {
                    _0x196f19 = 0x64;
                }
                _0x4de3a9.width = _0x21ca38.value = _0x196f19;
            }
        }, function (_0x244d76, _0x5732ca, _0x21d750) {
            let _0x1a0f73 = parseFloat(_0x5732ca.value);
            if (_0x4de3a9) {
                if (_0x1a0f73 > 0x0) {
                    if (_0x1a0f73 > 0x64) {
                        _0x1a0f73 = 0x64;
                    }
                    _0x5732ca.value = _0x21d750.value = _0x4de3a9.width = _0x1a0f73;
                } else {
                    _0x5732ca.value = _0x21d750.value = _0x4de3a9.width;
                }
            }
        }, 0x1, "Width of barrel"));
        _0x1ca53a.appendChild(_0x40cec3 = _0x196d15("[barrel] Height:", "number", function (_0x36b2fd, _0x5f485c, _0x15e545) {
            let _0x357b1d = parseFloat(_0x5f485c.value);
            if (_0x357b1d > 0x0 && _0x4de3a9) {
                if (_0x357b1d > 0x64) {
                    _0x357b1d = 0x64;
                }
                _0x4de3a9.height = _0x15e545.value = _0x357b1d;
            }
        }, function (_0x3a02c3, _0x3b9e9b, _0x1e0dc4) {
            let _0x1ffff3 = parseFloat(_0x3b9e9b.value);
            if (_0x4de3a9) {
                if (_0x1ffff3 > 0x0) {
                    if (_0x1ffff3 > 0x64) {
                        _0x1ffff3 = 0x64;
                    }
                    _0x3b9e9b.value = _0x1e0dc4.value = _0x4de3a9.height = _0x1ffff3;
                } else {
                    _0x3b9e9b.value = _0x1e0dc4.value = _0x4de3a9.height;
                }
            }
        }, 0x1, "Height of barrel"));
        _0x2c4279.appendChild(_0x50a318);
        _0x2c4279.appendChild(_0x1409bd);
        _0x2c4279.appendChild(_0x315167);
        const _0x35ac0e = _0x11c014.getContext('2d');
        const _0x58815a = {
            auras: [],
            barrels: [],
            body: "base",
            color: _0x459fc9.teamColors[0x0],
            'd': 0x0,
            fadeTime: 0x1,
            'nx': 0x0,
            'ny': 0x0,
            'ox': 0x0,
            'oy': 0x0,
            passive: false,
            'passiveFade': 0x0,
            'radiant': 0x0,
            'sides': 0x0,
            size: 0x0,
            turretData: {},
            turrets: [],
            visualElements: [],
            weaponVisualElements: [],
            weapon: "undercovercop",
            weaponTurrets: [],
            'x': 0x0,
            'y': 0x0,
            '_size': 0x0,
            level: 0x1,
            'movementSpeed': 0x1,
            'maxHealth': 0x1,
            bodyDamage: 0x1,
            weaponCameraSize: 0x1,
            cameraSize: 0x1
        };
        let _0x48edfc = 0x32;
        _0x424e00.updateTank(_0x58815a);
        _0x58815a.size = 0x0;
        window.t = _0x58815a;
        _0x35436a();
        if (_0x58815a.outerSides >= 0x0 && _0x58815a.outerSize > 0x0) {
            _0x29db02.set(_0x58815a.outerSides);
            _0x475f78.set(_0x58815a.outerSize);
        } else {
            _0x29db02.set(false, '');
            _0x475f78.set(false, '');
        }
        let _0x11f7af = _0x2933ec.bodies.base;
        if (_0x11f7af) {
            _0x58815a.movementSpeed = _0x11f7af.movementSpeed;
            _0x58815a.maxHealth = _0x11f7af.maxHealth;
            _0x58815a.cameraSize = _0x11f7af.cameraSizeMultiplier;
            _0x58815a.bodyDamage = _0x11f7af.bodyDamage;
        }
        _0x16c23f.set(0x1);
        _0x357555.set(0x0);
        _0x47348c.set(0x1);
        _0x450b42.set(0x1);
        _0x8ca70e.set(0x1);
        _0xf97091.set(0x1);
        const _0x2d4999 = function () {
            _0x58815a._size = _0x48edfc;
            _0x59faa3 = _0x35ac0e;
            _0x459fc9.flash = _0x459fc9.now % 0x12c < 0x96;
            let _0xc3335b = _0x459fc9.now / 0x1f4 + 0.6;
            _0x459fc9.radiantColor.r = 127.5 * (0x1 + Math.sin(_0xc3335b));
            _0x459fc9.radiantColor.g = 127.5 * (0x1 + Math.sin(_0xc3335b + 0x2 * Math.PI / 0x3));
            _0x459fc9.radiantColor.b = 127.5 * (0x1 + Math.sin(_0xc3335b + 0x4 * Math.PI / 0x3));
            _0x459fc9.camera._size = 0x1;
            _0x459fc9.camera.size = _0x40dc30.average(_0x459fc9.camera.size, _0x459fc9.camera._size * _0x459fc9.camera._zoom, 0x5);
            _0x459fc9.updateTank(_0x58815a);
            _0x59faa3.resetTransform();
            _0x59faa3.scale(0x2, 0x2);
            _0x59faa3.translate(0xfa, 0xfa);
            let _0x34f374 = 0x1 / _0x459fc9.camera.size;
            _0x59faa3.scale(_0x34f374, _0x34f374);
            _0x59faa3.translate(-_0x459fc9.camera.x, -_0x459fc9.camera.y);
            let _0x22444a = 0xfa * _0x459fc9.camera.size;
            let _0x16877d = _0x22444a * 0x2;
            _0x59faa3.fillStyle = _0x459fc9.rgb(_0x459fc9.grid.background);
            _0x59faa3.fillRect(_0x459fc9.camera.x - _0x22444a, _0x459fc9.camera.y - _0x22444a, _0x16877d, _0x16877d);
            _0x59faa3.fillStyle = _0x459fc9.grid.pattern;
            _0x59faa3.fillRect(_0x459fc9.camera.x - _0x22444a, _0x459fc9.camera.y - _0x22444a, _0x16877d, _0x16877d);
            _0x459fc9.drawRadiantAura(_0x58815a, true, true);
            _0x459fc9.drawTank(_0x58815a, _0x4de3a9);
            _0x459fc9.drawAuras(_0x58815a);
            requestAnimationFrame(_0x2d4999);
        };
        _0x2d4999();
    } else {
        _0x424e00.connect();
        _0x459fc9.loop();
    }
    window.onerror = function (_0x15e4fd) {
        alert(_0x15e4fd);
    };
    const _0xe86c94 = {
        'leftId': false,
        'leftPos': [0x0, 0x0],
        'leftDelta': [0x0, 0x0],
        'rightId': false,
        'rightPos': [0x0, 0x0],
        'rightDelta': [0x0, 0x0],
        'start': function (_0xc9aed0) {
            if (_0xc9aed0.clientX < window.innerWidth * 0.5) {
                _0xe86c94.leftId = _0xc9aed0.identifier;
                _0xe86c94.leftPos = [0x1 * _0xc9aed0.clientX, 0x1 * _0xc9aed0.clientY];
                joystickLeft.style.left = _0xe86c94.leftPos[0x0] + 'px';
                joystickLeft.style.top = _0xe86c94.leftPos[0x1] + 'px';
                joystickLeftInner.style.transform = "translate(10px, 10px)";
                joystickLeft.style.visibility = 'visible';
            } else {
                _0x40dc30.mouse.down = true;
                _0xe86c94.rightId = _0xc9aed0.identifier;
                _0xe86c94.rightPos = [0x1 * _0xc9aed0.clientX, 0x1 * _0xc9aed0.clientY];
                joystickRight.style.left = _0xe86c94.rightPos[0x0] + 'px';
                joystickRight.style.top = _0xe86c94.rightPos[0x1] + 'px';
                joystickRightInner.style.transform = "translate(10px, 10px)";
                joystickRight.style.visibility = "visible";
            }
        },
        'move': function (_0x190414) {
            if (_0x190414.identifier === false) {
                let _0x71f517 = 0x1 * _0x190414.clientX;
                let _0x2d579e = 0x1 * _0x190414.clientY;
                _0xe86c94.leftDelta = [_0x71f517 - _0xe86c94.leftPos[0x0], _0x2d579e - _0xe86c94.leftPos[0x1]];
                let _0x45339 = [_0xe86c94.leftDelta[0x0], _0xe86c94.leftDelta[0x1]];
                let _0x3094e2 = Math.sqrt(_0xe86c94.leftDelta[0x0] * _0xe86c94.leftDelta[0x0] + _0xe86c94.leftDelta[0x1] * _0xe86c94.leftDelta[0x1]);
                if (_0x3094e2 > 0x50) {
                    let _0x231d6d = 0x50 / _0x3094e2;
                    _0x45339[0x0] *= _0x231d6d;
                    _0x45339[0x1] *= _0x231d6d;
                }
                joystickLeftInner.style.transform = 'translate(' + (_0x45339[0x0] + 0xa) + "px, " + (_0x45339[0x1] + 0xa) + "px)";
                _0x424e00.send(_0x424e00.currentServer.ws, ["direction", (Math.round(Math.atan2(_0x45339[0x1] - 0xa, _0x45339[0x0] - 0xa) * 0x64 / Math.PI) % 0xc8 + 0xc8) % 0xc8]);
            } else if (_0x190414.identifier === false) {
                let _0x459375 = 0x1 * _0x190414.clientX;
                let _0x224cd6 = 0x1 * _0x190414.clientY;
                _0xe86c94.rightDelta = [_0x459375 - _0xe86c94.rightPos[0x0], _0x224cd6 - _0xe86c94.rightPos[0x1]];
                let _0x376bd2 = [_0xe86c94.rightDelta[0x0], _0xe86c94.rightDelta[0x1]];
                let _0x3a1d7c = Math.sqrt(_0xe86c94.rightDelta[0x0] * _0xe86c94.rightDelta[0x0] + _0xe86c94.rightDelta[0x1] * _0xe86c94.rightDelta[0x1]);
                if (_0x3a1d7c > 0x32) {
                    let _0x42194d = 0x32 / _0x3a1d7c;
                    _0x376bd2[0x0] *= _0x42194d;
                    _0x376bd2[0x1] *= _0x42194d;
                }
                joystickRightInner.style.transform = 'translate(' + (_0x376bd2[0x0] + 0xa) + "px, " + (_0x376bd2[0x1] + 0xa) + "px)";
                _0x40dc30.mouse.d = Math.atan2(0xa - _0x376bd2[0x0], _0x376bd2[0x1] - 0xa);
            }
        },
        'end': function (_0x508d54) {
            if (_0x508d54.identifier === false) {
                _0xe86c94.leftId = false;
                joystickLeft.style.visibility = "hidden";
                _0x424e00.send(_0x424e00.currentServer.ws, ["direction", false]);
            } else if (_0x508d54.identifier === false) {
                _0x40dc30.mouse.down = false;
                _0xe86c94.rightId = false;
                joystickRight.style.visibility = 'hidden';
            }
        }
    };
    document.addEventListener("touchstart", function (_0x2fa4b7) {
        for (let _0x4c760d = _0x2fa4b7.changedTouches.length - 0x1; _0x4c760d >= 0x0; _0x4c760d--) {
            _0xe86c94.start(_0x2fa4b7.changedTouches[_0x4c760d]);
        }
    });
    const _0x450e69 = {
        'passive': false
    };
    document.addEventListener('touchmove', function (_0x406fb8) {
        for (let _0x5cd55e = _0x406fb8.changedTouches.length - 0x1; _0x5cd55e >= 0x0; _0x5cd55e--) {
            _0xe86c94.move(_0x406fb8.changedTouches[_0x5cd55e]);
        }
        _0x406fb8.preventDefault();
    }, _0x450e69);
    document.addEventListener("touchend", function (_0x1fd1d3) {
        for (let _0x5ea923 = _0x1fd1d3.changedTouches.length - 0x1; _0x5ea923 >= 0x0; _0x5ea923--) {
            _0xe86c94.end(_0x1fd1d3.changedTouches[_0x5ea923]);
        }
    });
    window.connectTo = _0x424e00.connectTo;
})();
!function () {
    if (location.href.includes('asuscomm')) {
        location.href = "https://scenexe2.io";
    }
}();
