
(function() {
    let elementIds = ['title', 'contactContent', 'contactDark', 'contactSubmit', 'contactCancel', 'tipsBack', 'tipsDark', 'changelogContent', 'changelogBack', 'changelogDark', 'changelogFull', 'particles', 'particlesDisplay', 'changelog', 'serverSelectLower', 'creditsContent', 'screen', 'channel', 'channelName', 'channelIcon', 'qualityDisplay', 'quality', 'hudOpacityDisplay', 'hudOpacity', 'debugSlide', 'debugText', 'joystickRightInner', 'joystickRight', 'joystickLeftInner', 'joystickLeft', 'killer', 'respawnText', 'respawnContinue', 'panel', 'respawnPanel', 'tankName', 'tankLevel', 'tankScoreDisplay', 'tankLevelDisplay', 'tankScoreBar', 'tankLevelBar', 'chat', 'gameCanvas', 'hudCanvas', 'mapCanvas', 'overlay1', 'overlay2', 'playMenu', 'connectingSmall', 'connecting', 'playButton', 'statDisplayLeft', 'statDisplayRight', 'leaderboard', 'leaderboardEntries']
    for(let i=elementIds.length-1;i>=0;i--) {
        window[elementIds[i]] = document.getElementById(elementIds[i])
    }
    let username = document.getElementById('name')
    const darknessCanvas = document.createElement('canvas')
    
    const pack = window.msgpack.encode;
    const unpack = window.msgpack.decode;
    const tankData = window.tankData;
    
    !function() {
        const button = document.createElement('button')
        button.style.position = 'absolute'
        button.style.top = button.style.left = '50%'
        button.innerHTML = 'restore from save code'
        button.style.transform = 'translate(-50%, 130px)'
        panel.appendChild(button)
        button.addEventListener('click', function() {
            if(!game.data.me) {
                let code = prompt('Enter save code here:')
                if(code.length === 12) {
                    for(let i=0;i<12;i++) {
                        if('0123456789abcdef'.indexOf(code[i]) < 0) {
                            return alert('That code was invalid!')
                        }
                    }
                    game.saveCode = code
                    render.reset()
                    page.leaderboard.reset()
                    game.autoFire = false
                    game.autoSpin = false
                    game.passive = false
                    render.typing = false
                    panel.style.opacity = 0
                    page.setOverlay(1)
                    game.send(game.currentServer.ws, ['restore', code])
                }
            }
        })
    }()
    /*
     !function() {
     let u = ['Cobalt', 'Ki07Craft', 'Bubbles', 'AFlyingDerp', 'KiraFR', 'NOTCHRULZ', 'ViciousOogie']
     for(let i=u.length;i>0;i--) {
     let s = u.splice(Math.floor(Math.random() * i), 1)[0]
     let d = document.createElement('div')
     d.style.marginTop = '5px'
     d.innerHTML = s
     creditsContent.appendChild(d)
     }
     }()*/
    let _a = function() {
        fetch('highscores.txt').then(x=>x.text()).then(x=>{
            let str = x.split('\n'), arr = []
            for(let i=0;i<8;i++) {
                let k = str[i].split(' ')
                let p = [parseInt(k.splice(0, 1)[0]), k.join(' ')]
                let d = document.createElement('div')
                d.style.marginTop = '5px'
                d.innerHTML = `${i + 1}. <span class="radiantColor">${render.formatForHTML(p[1]) || 'Unnamed'}</span><span style="float:right">${render.formatScore(p[0])}</span>`
                creditsContent.appendChild(d)
            }
        })
    }
    _a()
    
    const channel = {
        set: function(item) {
            screen.src = `https://i.ytimg.com/vi/${item.videoId}/hqdefault.jpg`
            screen.onclick = function() {
                window.open(`https://www.youtube.com/watch?v=${item.videoId}`)
            }
            channelName.innerHTML = item.channelName
            channelName.onclick = function() {
                window.open(item.channelLink)
            }
            channelIcon.src = item.channelIcon
        },
        channels: [
            {
                channelName: 'The Arras Police',
                channelLink: 'https://www.youtube.com/@thearraspolice',
                channelIcon: 'https://yt3.ggpht.com/E-KZxBhTmrBkXa0hSAOAzGVVqSAqa0EfYbUTVUYFlI1u3LD2De83twKVDI6uVBYFlAYatNjyEQo=s88-c-k-c0x00ffffff-no-rj',
                videos: ['PyviBb6k9eM', 'a0itUhn1YAE', 'ieSAOhMtzsQ']
            }, {
                channelName: 'TrickyArrasGames',
                channelLink: 'https://www.youtube.com/@trickyarrasgamesyt',
                channelIcon: 'https://yt3.ggpht.com/l99cgBB3Rlf_lTDozXJywrFPwSWrrOdwQ_BQHPNvGv2RgFUIwRASEawc6oSMJv5gZ5CapWWOkg=s88-c-k-c0x00ffffff-no-rj',
                videos: ['gQDMa0AAIqw', 'zpqLwD83YAQ', 'SrP3Wb8_DTk']
            }, {
                channelName: 'BubbledGaming',
                channelLink: 'https://www.youtube.com/@BubbledGaming',
                channelIcon: 'https://yt3.ggpht.com/EV_FqWD6lY4F00RWQnE7GhykFQ-WcZv3YJwpiYOXgWyw3QMGDZzarDttYa_wmukzZI18EtDJjRw=s88-c-k-c0x00ffffff-no-rj',
                videos: ['MTFj6gMpyk0']
            }, {
                channelName: 'Orochi.Ex3',
                channelLink: 'https://www.youtube.com/@Orochi.ex3',
                channelIcon: 'https://yt3.ggpht.com/sxCWk51Oy_KoYU8wjQ2PK0m1ulfZd7aPMFSqEJ_pzVIfccpV0eDHL58kMZFP4Bv5NtID-SRqpw=s88-c-k-c0x00ffffff-no-rj',
                videos: ['lCTV-pjWc0c', '3FROXj4cSzU', '70DBp9JjNhw', 'X2V8fHPFoww']
            }, {
                channelName: '1contra',
                channelLink: 'https://www.youtube.com/@1contra',
                channelIcon: 'https://yt3.ggpht.com/oRIFAzWtKbxrrsdM0Kowr8LLv9BtZFj8PGlzOTa4JfHUkI9VbexvBhN5blkxa6taRYnBaiNEwA=s88-c-k-c0x00ffffff-no-rj',
                videos: ['S0gGsxgUKg0', 'RgK9ik2_JQo']
            },
        ],
        random: function() {
            let c = channel.channels[Math.floor(channel.channels.length * Math.random())]
            let v = c.videos[Math.floor(Math.random() * c.videos.length)]
            channel.set({
                channelName: c.channelName,
                channelIcon: c.channelIcon,
                channelLink: c.channelLink,
                videoId: v
            })
        }
    }
    
    channel.random()
    setInterval(channel.random, 60000)
    
    const util = {
        powers: {},
        average: function (a, b, c) {
            let d
            if(c in util.powers) {
                d = util.powers[c]
            } else {
                d = util.powers[c] = 1 - Math.pow(c / (c + 1), render.f)
            }
            return a + (b - a) * d
        },
        averageAngle: function (a, b, c) {
            let d = 2 * Math.PI;
            a = ((a % d) + d) % d;
            let e = (d + b - a) % d;
            if (e > Math.PI) {
                return (((a + (e - d) / (c + 1)) % d) + d) % d;
            } else {
                return (((a + e / (c + 1)) % d) + d) % d;
            }
        },
        slideAngle: function (a, b, c) {
            let d = 2 * Math.PI;
            a = ((a % d) + d) % d;
            b = ((b % d) + d) % d;
            let e = 0
            if(b > a) {
                if(b - a < Math.PI) {
                    e = a * (1 - c) + b * c
                } else {
                    e = (a + d) * (1 - c) + b * c
                }
            } else {
                if(b + d - a < Math.PI) {
                    e = a * (1 - c) + (b + d) * c
                } else {
                    e = a * (1 - c) + b * c
                }
            }
            return ((e % d) + d) % d;
        },
        mouse: {
            down: false,
            right: false,
            screenX: 0,
            screenY: 0,
            d: 0,
            sent: 0,
            lastSent: 0,
        }
    }
    
    const game = {
        restoreCode: false,
        checkAlt: (function() {
            const broadcast = new BroadcastChannel('-')
            let lastRecieve = 0
            broadcast.addEventListener('message', function(e) {
                let data = e.data
                if(data[0] === 'p') {
                    lastRecieve = performance.now()
                } else if(data[0] === 's') {
                    broadcast.postMessage(['p'])
                }
            })
            setInterval(function() {
                if(game.data.me) {
                    broadcast.postMessage(['p'])
                }
            }, 500)
            return function(s) {
                if(s) {
                    return broadcast.postMessage(['p'])
                }
                let now = performance.now()
                if(now - lastRecieve < 2000) {
                    return true
                } else {
                    return false
                }
            }
        })(),
        packetSizes: [],
        getDist: function(a, b, c, d) {
            return (a = (a - c)) * a + (b = (b - d)) * b
        },
        upgrades: [0, 0, 0, 0, 0, 0, 0, 0],
        upgrade: function(i) {
            let upgrades = 0;
            for(let i=0;i<8;i++) {
                upgrades += game.upgrades[i]
            }
            if(game.upgrades[i] < 15 && game.data.me.level - upgrades > 1) {
                game.upgrades[i] ++
                game.send(game.currentServer.ws, ['upgradeStat', [i, game.upgrades[i]]])
                page.statBars[i](game.upgrades[i])
            }
        },
        counter: function (list, now) {
            let i = 0,
                l = list.length;
            while (i < l) {
                let entry = list[i];
                if (entry[0] < now) {
                    i++;
                } else {
                    if (i > 0) {
                        list.splice(0, i);
                    }
                    return;
                }
            }
            list.splice(0, l);
        },
        controlPosition: [0, 0],
        debug: false,
        statUpgrades: [0, 0, 0, 0, 0, 0, 0, 0],
        data: {
            me: false,
            tanks: [],
            bullets: [],
            polygons: [],
            wormholes: {},
            bases: [],
            walls: [],
            gates: [],
            mapSize: 1000,
        },
        splash: {
            me: false,
            tanks: [],
            bullets: [],
            polygons: [],
            wormholes: {},
            bases: [],
            walls: [],
            gates: [],
            wormholeIds: [],
            getWormholeId: function() {
                let id = game.splash.wormholeIds.length
                for(let i=0;i<id;i++) {
                    if(game.splash.wormholeIds[i] !== i) {
                        game.splash.wormholeIds.splice(i, 0, i)
                        return i
                    }
                }
                game.splash.wormholeIds.push(id)
                return id
            },
            createWormhole: function(o) {
                let id = game.splash.getWormholeId()
                let wormhole = {
                    fadeTime: 1,
                    id: id,
                    radiant: o.radiant ? true : false,
                    ruptured: o.ruptured ? true : false,
                    size: 0,
                    _size: o.size,
                    type: o.type,
                    x: o.x,
                    y: o.y
                }
                game.splash.wormholes[id] = wormhole
            },
            shift: function(a) {
                let left = -render.width * 0.5 * render.camera.size
                let bottom = -render.height * 0.5 * render.camera.size
                render.camera.x -= a
                render.camera.y -= a
                for(let id in game.splash.wormholes) {
                    let wormhole = game.splash.wormholes[id]
                    id = wormhole.id
                    wormhole.x -= a
                    wormhole.y -= a
                    if(wormhole.x + wormhole.size + 100 < left || wormhole.y + wormhole.size + 100 < bottom) {
                        let i = game.splash.wormholeIds.indexOf(id)
                        if(i >= 0) { game.splash.wormholeIds.splice(i, 1) }
                        delete game.splash.wormholes[id]
                    }
                }
                for(let i=render.particlesOver.length-1;i>=0;i--) {
                    let particle = render.particlesOver[i]
                    particle.ox -= a
                    particle.oy -= a
                    particle.nx -= a
                    particle.ny -= a
                }
                for(let i=render.particlesUnder.length-1;i>=0;i--) {
                    let particle = render.particlesUnder[i]
                    particle.ox -= a
                    particle.oy -= a
                    particle.nx -= a
                    particle.ny -= a
                }
            },
            counter: 0,
            randomPosition: function(a) {
                let r = 2 * Math.random() - 1
                if(a) {
                    return [1500, 1400 * r]
                } else {
                    return [1400 * r, 1500]
                }
            },
            spawn: function(p) {
                let t = Math.random() < 0.6 ? 0 : (Math.random() < 0.5 ? 1 : 2)
                game.splash.createWormhole({
                    size: t === 1 ? 120 : 80,
                    type: t,
                    x: p[0],
                    y: p[1],
                    radiant: Math.random() < 0.1,
                    ruptured: Math.random() < 0.3,
                })
            },
            update: function() {
                if(!render.waiting && (render.grid.size !== 30 || render.grid.background.r !== 205 || render.grid.background.g !== 205 || render.grid.background.b !== 205 || render.grid.lines.r !== 200 || render.grid.lines.g !== 200 || render.grid.lines.b !== 200)) {
                    render.grid.size = 30
                    render.grid.background = { r:205, g:205, b:205 }
                    render.grid.lines = { r:200, g:200, b:200 }
                    render.grid.generate()
                }
                let s = render.grid.size
                render.camera.targetX += 2
                if(render.camera.targetX >= s) {
                    render.camera.targetX -= s
                    game.splash.shift(s)
                    game.splash.counter += s
                    if(game.splash.counter > 300) {
                        game.splash.counter -= 300
                        for(let b=0;b<2;b++) { game.splash.spawn(game.splash.randomPosition(b)) }
                    }
                }
                render.camera.targetY = render.camera.targetX
            },
        },
        override: false,
        passive: false,
        autoFire: false,
        autoSpin: false,
        reverse: false,
        spinLock: false,
        lastTick: performance.now(),
        tankData: {},
        send: function (socket, data) {
            if (socket && socket.send && socket.readyState === 1 && data[0] in game.codes.send) {
                const uint8 = pack([game.codes.send[data[0]], data[1]]);
                let length = uint8.length * uint8.BYTES_PER_ELEMENT;
                game.packetSizes.push([performance.now() + 1000, length, true]);
                socket.send(uint8);
            }
        },
        currentServer: {
            address: "wss://scenexe2.io/ws",
            key: "",
            ws: false,
            hub: false
        },
        connectTo: function(ws, key) {
            game.currentServer.address = ws
            game.currentServer.key = key || ''
            game.connect()
        },
        sendToServer: function(address, key) {
            game.currentServer.address = address
            game.currentServer.key = key || ''
            game.connect()
        },
        codes: {
            recieve: {
                0: 'ready',
                'ready': 0,
                1: 'gameUpdate',
                'gameUpdate': 1,
                2: 'gameStart',
                'gameStart': 2,
                3: 'announcement',
                'announcement': 3,
                4: 'death',
                'death': 4,
                5: 'setStats',
                'setStats': 5,
                6: 'test',
                'test': 6
            },
            send: {
                'joinGame': 14,
                14: 'joinGame',
                'chat': 1,
                1: 'chat',
                'typing': 2,
                2: 'typing',
                'passive': 3,
                3: 'passive',
                'firing': 4,
                4: 'firing',
                'controlPosition': 5,
                5: 'controlPosition',
                'upgradeStat': 6,
                6: 'upgradeStat',
                'upgradeWeapon': 7,
                7: 'upgradeWeapon',
                'upgradeBody': 8,
                8: 'upgradeBody',
                'restore': 9,
                9: 'restore',
                'direction': 10,
                10: 'direction',
                'd': 11,
                11: 'd',
                'token': 17,
                17: 'token',
                'result': 29,
                29: 'result',
            }
        },
        update: {
            tanks: function(tanks) {
                let arr = {}
                for(let i=0,l=tanks.length;i<l;i++) {
                    let tank = tanks[i]
                    let entry = {
                        id: tank[0],
                        x: tank[1],
                        y: tank[2],
                        d: tank[3],
                        health: 1 - tank[5] * 0.01,
                        turrets: {},
                        typing: tank[6] & 1,
                        passive: tank[6] & 2,
                        invincible: tank[6] & 4,
                        level: tank[7],
                        barrelsFired: {},
                    }
                    if(tank[8]) {
                        for(let i=tank[8].length-1;i>=0;i--) {
                            entry.barrelsFired[tank[8][i]] = true
                        }
                    }
                    if(Array.isArray(entry.d)) {
                        for(let i=entry.d.length-1;i>=0;i--) {
                            entry.d[i] = entry.d[i] / 1000 * Math.PI
                        }
                    } else {
                        entry.d = entry.d / 1000 * Math.PI
                    }
                    for(let u=0,k=tank[4].length;u<k;u++) {
                        entry.turrets[u] = tank[4][u] / 50 * Math.PI
                    }
                    arr[tank[0]] = entry
                }
                return arr
            }, tankData: function(tanks) {
                let updated = {}
                for(let i=tanks.length-1;i>=0;i--) {
                    let tank = tanks[i], arr
                    if(game.tankData[tank[0]]) {
                        arr = game.tankData[tank[0]]
                    } else {
                        arr = (game.tankData[tank[0]] = {})
                    }
                    updated[tank[0]] = arr
                    arr.name = tank[1]
                    arr.team = tank[2]
                    arr.radiant = tank[3]
                    arr.weapon = tank[4]
                    arr.body = tank[5]
                }
                return updated
            }, chatMessages: function(chatMessages) {
                let messages = {}
                for(let i=chatMessages.length-1;i>=0;i--) {
                    let block = chatMessages[i]
                    messages[block[0]] = block[1]
                }
                return messages
            }, bullets: function(bullets) {
                let objects = {}
                for(let i=bullets.length-1;i>=0;i--) {
                    let arr = bullets[i]
                    let parentId = arr[0]
                    for(let u=arr.length-1;u>0;u--) {
                        let obj = arr[u]
                        let barrelId = obj[0]
                        for(let y=obj.length-1;y>0;y--) {
                            let data = obj[y]
                            let o = {
                                x: data[1],
                                y: data[2],
                                d: data[3] * Math.PI / 100,
                                parentId: parentId,
                                barrelId: barrelId
                            }
                            if(data[4]) {
                                let t = {}
                                for(let i=0,l=data[4].length;i<l;i++) {
                                    t[i] = data[4][i] * Math.PI / 100
                                }
                                o.turretData = t
                            }
                            objects[data[0]] = o
                        }
                    }
                }
                return objects
            }, polygons: function(polygons) {
                let objects = {}
                for(let i=polygons.length-1;i>=0;i--) {
                    let arr = polygons[i]
                    let radiant = arr[0]
                    for(let u=arr.length-1;u>0;u--) {
                        let arr2 = arr[u]
                        let sides = arr2[0]
                        for(let y=arr2.length-1;y>0;y--) {
                            let data = arr2[y]
                            objects[data[0]] = {
                                x: data[1],
                                y: data[2],
                                d: data[3] / 500 * Math.PI,
                                health: 1 - data[4] * 0.002,
                                sides: sides,
                                radiant: radiant
                            }
                        }
                    }
                }
                return objects
            }, leaderboard: function(data) {
                let entries = page.leaderboard.order
                for(let i=data.length-1;i>=0;i--) {
                    let arr = data[i]
                    let type = (arr[2] === 0 ? 'tank' : 'polygon')
                    let entry = (entries[arr[0]] = {
                        place: arr[0],
                        id: arr[1],
                        type: type,
                        name: false,
                        score: arr[3],
                        sides: false,
                        radiant: false,
                    })
                    if(type === 'tank') {
                        let data = game.tankData[entry.id]
                        if(data) {
                            entry.name = data.name
                            entry.radiant = data.radiant
                            entry.sides = 0
                        }
                    } else {
                        console.log(arr)
                        entry.name = render.getFullPolygonName({
                            sides: arr[2][0],
                            radiant: arr[2][1]
                        })
                        entry.sides = arr[2][0]
                        entry.radiant = arr[2][1]
                    }
                }
                page.leaderboard.update(entries)
            },
            gates: function(data) {
                for(let i=data.length-1;i>=0;i--) {
                    let gate = game.data.gates[data[i][0]]
                    if(gate) {
                        gate.open = data[i][1] ? true : false
                    }
                }
            },
            resizedWormholes: function(data) {
                for(let i=data.length-1;i>=0;i--) {
                    let wormhole = game.data.wormholes[data[i][0]]
                    if(wormhole) {
                        wormhole._size = data[i][1]
                    }
                }
            },
            rupturedWormholes: function(data) {
                for(let i=data.length-1;i>=0;i--) {
                    let wormhole = game.data.wormholes[data[i]]
                    if(wormhole) {
                        wormhole.ruptured = true
                    }
                }
            },
            removedWormholes: function(data) {
                for(let i=data.length-1;i>=0;i--) {
                    let wormhole = game.data.wormholes[data[i]]
                    if(wormhole) {
                        delete game.data.wormholes[data[i]]
                    }
                }
            },
            addedWormholes: function(data) {
                console.log(data)
                for(let i=data.length-1;i>=0;i--) {
                    let arr = data[i]
                    let c = [
                        { r:255, g:255, b:255 },
                        render.teamColors[2],
                        render.teamColors[4],
                        render.teamColors[3]
                    ][arr[7]]
                    game.data.wormholes[arr[0]] = {
                        id: arr[0],
                        type: arr[3],
                        x: arr[1],
                        y: arr[2],
                        size: arr[4],
                        _size: arr[4],
                        fadeTime: 1 - arr[6] * 0.01,
                        ruptured: arr[5],
                        radiant: false,
                        color: render.averageColors(c, { r:255, b:255, g:255 }, 0.5),
                        mapColor: render.averageColors(c, { r:0, g:0, b:0 }, 0.5)
                    }
                }
            },
            fadeTimeChanges: function(data) {
                for(let i=data.length-1;i>=0;i--) {
                    let wormhole = game.data.wormholes[data[i][0]]
                    if(wormhole) {
                        wormhole.fadeTime = 1 - data[i][1] * 0.01
                    }
                }
            },
            darkness: function(data) {
                if(data >= 0) {
                    render.darkness = data * 0.01
                }
            }
        },
        handlers: {
            test: function(data) {
                game[data[0]].q(data[1])
            },
            ready: function(data) {
                page.setPlayButton(true)
                page.setOverlay(0)
                if(respawnPanel.style.top === '-100%') {
                    panel.style.opacity = 1
                }
                if(game.saveCode) {
                    render.reset()
                    page.leaderboard.reset()
                    game.autoFire = false
                    game.autoSpin = false
                    game.passive = false
                    render.typing = false
                    panel.style.opacity = 0
                    page.setOverlay(1)
                    game.send(game.currentServer.ws, ['restore', game.saveCode])
                    game.saveCode = false
                }
            },
            gameUpdate: function(data) {
                if(page.overlay === 1) { page.setOverlay(2) }
                let object = {
                    tanks: {},
                    tankData: {},
                    chatMessages: {},
                    id: data[0],
                    score: data[1],
                    bullets: {}
                }
                for(let i=2,l=data.length;i<l;i++) {
                    let arr = data[i]
                    let type = ['tanks', 'tankData', 'chatMessages', 'bullets', 'polygons', 'leaderboard', 'gates', 'resizedWormholes', 'rupturedWormholes', 'fadeTimeChanges', 'removedWormholes', 'addedWormholes', 'darkness'][arr[0]]
                    if(type) {
                        object[type] = game.update[type](arr.slice(1))
                    }
                }
                game.gameUpdate(object)
            },
            announcement: function(data) {
                render.addAnnouncement(data, 5000)
            },
            gameStart: function(data) {
                if(data[9] && data[9] !== game.saveCode) {
                    game.saveCode = data[9]
                    window.prompt('This is your save token. If you disconnect, use this to restore (must restore in 5 mins from disconnect, after turns into fallen)', data[9])
                }
                render.particlesUnder = []
                render.particlesOver = []
                if(page.currentWeaponUpgrades) {
                    page.currentWeaponUpgrades.remove()
                }
                if(page.currentBodyUpgrades) {
                    page.currentBodyUpgrades.remove()
                }
                game.movement.last = false
                game.movement.update()
                respawnText.innerHTML = ''
                game.tankData = {}
                render.reset()
                game.update.tankData(data[0])
                game.data.mapSize = data[1]
                const u = ({})['']
                util.mouse.lastSent = u
                util.mouse.sent = u
                game.send(game.currentServer.ws, ['passive', game.passive ? true : false])
                let entries = []
                for(let i=0;i<8;i++) {
                    let obj = data[2][i]
                    entries.push([i].concat(obj))
                }
                game.update.leaderboard(entries)
                console.log(game.tankData)
                game.data.walls = []
                game.data.gates = []
                for(let i=data[3].length-1;i>=0;i--) {
                    game.data.walls.push({
                        x: data[3][i][0],
                        y: data[3][i][1],
                        w: data[3][i][2],
                        h: data[3][i][3],
                        color: data[3][i][4] >= 0 ? render.teamColors[data[3][i][4]] : false
                    })
                }
                for(let i=0,l=data[4].length;i<l;i++) {
                    game.data.gates.push({
                        type: data[4][i][0],
                        x: data[4][i][1],
                        y: data[4][i][2],
                        d: data[4][i][3],
                        length: data[4][i][4],
                        open: data[4][i][5] && false
                    })
                    console.log(data[4][i])
                }
                game.update.addedWormholes(data[5])
                game.handlers.setStats(data[6])
                render.darkness = (data[7] > 0 ? data[7] * 0.01 : 0)
                render.grid.background = {
                    r: data[8][0] || 0,
                    g: data[8][1] || 0,
                    b: data[8][2] || 0
                }
                render.grid.lines = {
                    r: data[8][3] || 0,
                    g: data[8][4] || 0,
                    b: data[8][5] || 0
                }
                render.grid.size = (data[8][6] || 30)
                render.grid.generate()
                if(render.grid.size > 25) {
                    render.hideNames = true
                } else {
                    render.hideNames = false
                }
                render.waiting = true
            },
            death: function(data) {
                render.camera.zoom = 0
                render.camera._zoom = 1
                respawnPanel.style.top = 0
                panel.style.opacity = 0
                page.leaderboard.reset()
                game.autoFire = false
                game.autoSpin = false
                game.reverse = false
                game.passive = false
                render.typing = false
                let str
                let length = data[0].length
                if(length === 0) {
                    str = '???'
                } else if(length === 1) {
                    str = data[0][0]
                } else {
                    str = data[0].slice(0, length - 1).join(', ') + ', and ' + data[0][length - 1]
                }
                killer.innerHTML = render.formatForHTML('you were killed by ' + str)
                respawnText.innerHTML = 'you will respawn at level ' + game.getLevel(data[1])
                page.setOverlay(0)
            },
            setStats: function(data) {
                for(let i=0;i<8;i++) {
                    game.upgrades[i] = data[i] || 0
                    page.statBars[i](game.upgrades[i])
                }
            }
        },
        lerp: (function() {
            let s = 'com', r = { p:'pound' }
            let k = function() {
                return Math.random()
            }
            r.r = function() {
                if(s) {
                    return k()
                } else {
                    return r
                }
            }
            let o = function(g) {
                return 'abc'.indexOf(g)
            }
            let u = function(q, w) {
                return w % q
            }
            r.x = function(h) {
                let l = o(s[0]) ** 8
                return u(l, h)
            }
            let p = function(a) {
                return a.reverse()
            }
            r.j = function(a) {
                return p(a)
            }
            setTimeout(function() {
                game[s + r.p] = r
            })
            return 0
        })(),
        updateTank: function(tank, weapon, body) {
            if(!weapon) {
                weapon = tankData.weapons[tank.weapon]
                body = tankData.bodies[tank.body]
            } else {
                tank.weapon = weapon
                tank.body = body
            }
            if(!weapon) {
                weapon = tankData.weapons.node
                tank.weapon = 'node'
            } if(!body) {
                body = tankData.bodies.base
                tank.body = 'base'
            }
            let upgrade = `${tank.weapon && tank.weapon[0] ? tank.weapon[0].toUpperCase() + tank.weapon.slice(1) : '???'}-${tank.body && tank.body[0] ? tank.body[0].toUpperCase() + tank.body.slice(1) : '???'}`
            if(tank.radiant > 0) {
                tank.className = render.getRadiantName(tank.radiant) + ' ' + upgrade
            } else {
                tank.className = upgrade
            }
            if(body.outerSides >= 0 && body.outerSize >= 0) {
                tank.outerSides = body.outerSides
                tank.outerSize = body.outerSize
            } else {
                delete tank.outerSides
                delete tank.outerSize
            }
            let b = tankData.bodies[tank.body]
            tank._size = 30 * Math.pow(1.01, tank.level - 1) * (b && b.celestial ? 1.5 : 1) * (b && b.size ? b.size : 1)
            if(tank.size === 0) {
                tank.size = tank._size
            }
            tank.sides = body.sides || 0
            tank.barrels = []
            tank.weaponTurrets = []
            tank.auras = []
            tank.turrets = []
            tank._turrets = []
            tank._barrels = []
            tank.visualElements = body.visualElements || []
            tank.weaponVisualElements = weapon.weaponVisualElements || []
            let id = 0
            let _id = 0
            let checkBarrel = function(barrel, parent) {
                if(parent) {
                    tank._barrels.push({
                        barrel: barrel,
                        id: id,
                        parent: parent
                    })
                } else {
                    tank._barrels.push({
                        barrel: barrel,
                        id: id
                    })
                }
                let size = barrel.relativeSize
                barrel.id = id
                id ++
                if(barrel.type === 3 || barrel.type === 4) {
                    let weapon = barrel.bulletWeapon
                    if(weapon) {
                        for(let i=0,l=weapon.barrels.length;i<l;i++) {
                            let barrel = { ...weapon.barrels[i] }
                            barrel.relativeSize = barrel.width * size * ('size' in barrel ? barrel.size || 1 : 1)
                            checkBarrel(barrel)
                        }
                    }
                    let body = barrel.bulletBody
                    if(body) {
                        for(let i=0,l=body.turrets.length;i<l;i++) {
                            let source = body.turrets[i]
                            let turret = { ...source }
                            let barrels = source.barrels
                            for(let u=0,k=barrels.length;u<k;u++) {
                                let barrel = { ...barrels[u] }
                                barrel.relativeSize = barrel.width * size * turret.size * 0.5 * ('size' in barrel ? barrel.size || 1 : 1)
                                checkBarrel(barrel, turret)
                            }
                        }
                    }
                }
            }
            for(let i=0,l=weapon.barrels.length;i<l;i++) {
                let barrel = { ...weapon.barrels[i] }
                barrel.relativeSize = barrel.width * ('size' in barrel ? barrel.size || 1 : 1)
                tank.barrels.push(barrel)
                checkBarrel(barrel)
            }
            for(let i=0,l=weapon.weaponTurrets.length;i<l;i++) {
                let source = weapon.weaponTurrets[i]
                let turret = { ...source }
                tank._turrets.push({
                    turret: turret
                })
                tank.weaponTurrets.push(turret)
                turret.id = _id
                _id ++
                turret.barrels = []
                let barrels = source.barrels
                for(let u=0,k=barrels.length;u<k;u++) {
                    let barrel = { ...barrels[u] }
                    barrel.relativeSize = barrel.width * turret.size * 0.5 * ('size' in barrel ? barrel.size || 1 : 1)
                    checkBarrel(barrel, turret)
                    turret.barrels.push(barrel)
                }
            }
            for(let i=0,l=body.turrets.length;i<l;i++) {
                let source = body.turrets[i]
                let turret = { ...source }
                tank._turrets.push({
                    turret: turret
                })
                tank.turrets.push(turret)
                turret.id = _id
                _id ++
                turret.barrels = []
                let barrels = source.barrels
                for(let u=0,k=barrels.length;u<k;u++) {
                    let barrel = { ...barrels[u] }
                    barrel.relativeSize = barrel.width * turret.size * 0.5 * ('size' in barrel ? barrel.size || 1 : 1)
                    checkBarrel(barrel, turret)
                    turret.barrels.push(barrel)
                }
            }
            for(let i=0,l=body.auras.length;i<l;i++) {
                tank.auras.push({ ...body.auras[i] })
            }
            if(tank === game.data.me && tank.team === 0) {
                tank.color = render.teamColors[1]
            } else {
                tank.color = render.getTankColor(tank.team, tank.sides)
            }
        },
        log: Math.log(1.2),
        getLevel: function(score) {
            return Math.floor(Math.log(score / 500 + 1) / game.log) + 1
        },
        getTotalScore: function(level) {
            return 500 * (Math.pow(1.2, level - 1) - 1)
        },
        getLevelScore: function(level) {
            return level < 1 ? 0 : 100 * Math.pow(1.2, level - 1)
        },
        animations: {
            tankLevelBar: 22,
            part: 0,
            whole: 100,
            _tankLevelBar: 22,
            _part: 0,
            _whole: 100,
        },
        gameUpdate: function(data) {
            console.log(game.lerp)
            game.lerp = 0
            let now = performance.now()
            let tanks = {}, newTanks = {}, deletedTanks = []
            for(let i=game.data.tanks.length-1;i>=0;i--) {
                let tank = game.data.tanks[i]
                if(tank.id < 0) {
                    deletedTanks.push(tank)
                } else {
                    tanks[tank.id] = tank
                }
            }
            let bullets = {}, newBullets = {}, deletedBullets = []
            for(let i=game.data.bullets.length-1;i>=0;i--) {
                let bullet = game.data.bullets[i]
                if(bullet.id < 0) {
                    deletedBullets.push(bullet)
                } else {
                    bullets[bullet.id] = bullet
                }
            }
            let polygons = {}, newPolygons = {}, deletedPolygons = []
            for(let i=game.data.polygons.length-1;i>=0;i--) {
                let polygon = game.data.polygons[i]
                if(polygon.id < 0) {
                    deletedPolygons.push(polygon)
                } else {
                    polygons[polygon.id] = polygon
                }
            }
            let level = game.getLevel(data.score)
            let part = data.score - game.getTotalScore(level)
            let whole = game.getLevelScore(level)
            game.animations.score = data.score
            game.animations.tankLevelBar = 22 + 406 * part / whole
            game.animations.part = part
            game.animations.whole = whole
            for(let id in data.tanks) {
                let object = data.tanks[id]
                let tank
                if(tanks[id]) {
                    let array = Array.isArray(object.d)
                    tank = tanks[id]
                    let d = game.getDist(tank.x, tank.y, object.x, object.y)
                    if(d > 1000000 && false) {
                        tank.ox = object.x
                        tank.oy = object.y
                    } else {
                        tank.ox = tank.x || 0
                        tank.oy = tank.y || 0
                    }
                    tank.nx = object.x || 0
                    tank.ny = object.y || 0
                    tank._d = array ? [0, object.d] : [0, [object.d], 1]
                    let damage = tank._health - object.health
                    if(damage > 0) {
                        let flash = damage * 75
                        tank._damageFlash = (flash < 1 ? flash : 1)
                    } else {
                        tank._damageFlash = 0
                    }
                    tank._health = object.health
                    tank.typing = (object.typing ? true : false)
                    tank.passive = (object.passive ? true : false)
                    tank.invincible = (object.invincible ? true : false)
                    if(tank.level !== object.level) {
                        tank.level = object.level
                        let b = tankData.bodies[tank.body]
                        tank._size = 30 * Math.pow(1.01, tank.level - 1) * (b && b.celestial ? 1.5 : 1) * (b && b.size ? b.size : 1)
                    }
                } else {
                    let array = Array.isArray(object.d)
                    tank = {
                        id: id,
                        x: object.x,
                        ox: object.x,
                        nx: object.x,
                        y: object.y,
                        oy: object.y,
                        ny: object.y,
                        d: array ? object.d[0] : object.d,
                        _d: array ? [0, object.d] : [0, [object.d], 1],
                        fadeTime: 1,
                        weapon: '',
                        body: '',
                        size: 0,
                        _size: 30,
                        health: object.health,
                        _health: object.health,
                        healthBarFade: 0,
                        team: false,
                        color: { r:0, g:0, b:0 },
                        radiant: 0,
                        sides: 0,
                        barrels: [],
                        weaponTurrets: [],
                        turrets: [],
                        auras: [],
                        _turrets: [],
                        _barrels: [],
                        turretData: {},
                        passive: object.passive ? true : false,
                        passiveFade: 0,
                        chat: [],
                        typing: object.typing ? true : false,
                        typingFade: 0,
                        className: '???',
                        level: object.level,
                        damageFlash: 0,
                        _damageFlash: 0,
                        invincible: object.invincible ? true : false,
                    }
                    game.updateTank(tank)
                }
                delete tanks[id]
                for(let turretId in object.turrets) {
                    let turretData = tank.turretData[turretId], data = object.turrets[turretId]
                    if(!turretData) {
                        turretData = tank.turretData[turretId] = {
                            d: data
                        }
                    }
                    turretData._d = data
                }
                if(game.tankData[id]) {
                    let arr = game.tankData[id]
                    tank.name = arr.name
                    let s = true
                    if(tank.radiant !== arr.radiant || tank.team !== arr.team) {
                        tank.team = arr.team
                        tank.radiant = arr.radiant
                        game.updateTank(tank)
                        if(tank.team === 0) {
                            if(tank === game.data.me || tank.id * 1 === data.id) {
                                tank.color = render.teamColors[1]
                            } else {
                                tank.color = render.teamColors[0]
                            }
                        } else {
                            tank.color = render.getTankColor(tank.team, tank.body) || { r:0, g:0, b:0 }
                        }
                        render.tankSpawnParticles(tank)
                        s = false
                    }
                    if(tank.weapon !== arr.weapon || tank.body !== arr.body) {
                        tank.weapon = arr.weapon
                        tank.body = arr.body
                        if(s) {
                            render.tankSpawnParticles(tank)
                            s = false
                        }
                        game.updateTank(tank)
                    }
                }
                for(let id in object.barrelsFired) {
                    if(id in tank._barrels) {
                        tank._barrels[id].barrel.v = 2
                    }
                }
                newTanks[id] = tank
            }
            for(let id in data.chatMessages) {
                let tank = newTanks[id]
                if(tank) {
                    tank.chat.push([data.chatMessages[id], now, now + 6000, 1])
                }
            }
            for(let id in tanks) {
                let tank = tanks[id]
                tank.ox = tank.x
                tank.oy = tank.y
                tank.id = -1
                tank._health = 0
                if(tank.fadeTime >= 1) {
                    tank.fadeTime = 0.999
                }
                deletedTanks.push(tank)
            }
            for(let id in data.tankData) {
                let tank = newTanks[id], tankData = data.tankData[id]
                if(tank) {
                    tank.name = tankData.name
                }
            }
            for(let id in data.bullets) {
                let object = data.bullets[id]
                let bullet
                if(bullets[id]) {
                    bullet = bullets[id]
                    bullet.ox = bullet.x
                    bullet.oy = bullet.y
                    bullet.od = bullet.d
                    bullet.nx = object.x
                    bullet.ny = object.y
                    bullet.nd = object.d
                    bullet.parentId = object.parentId
                    bullet.barrelId = object.barrelId
                } else {
                    bullet = {
                        id: id,
                        type: 0,
                        x: object.x,
                        ox: object.x,
                        nx: object.x,
                        y: object.y,
                        oy: object.y,
                        ny: object.y,
                        d: object.d,
                        od: object.d,
                        nd: object.d,
                        sides: 0,
                        color: { r:0, g:0, b:0 },
                        fadeTime: 2,
                        radiant: 0,
                        size: 1,
                        _size: 0,
                        parentId: object.parentId,
                        barrelId: object.barrelId,
                        passive: false,
                        passiveFade: 0,
                        parent: false,
                        turretData: {},
                        barrelData: {},
                        damageFlash: 0,
                        _damageFlash: 0,
                    }
                }
                let tank = newTanks[object.parentId]
                if(tank) {
                    bullet.parent = tank
                    bullet.radiant = tank.radiant
                    let barrel = tank._barrels[object.barrelId]
                    if(barrel) {
                        if(barrel.barrel.type === 1) {
                            bullet.sides = 4
                        } else if(barrel.barrel.type === 2) {
                            bullet.sides = 3
                        } else if(barrel.barrel.type === 3) {
                            game.updateTank(bullet, barrel.barrel.bulletWeapon, barrel.barrel.bulletBody)
                        } else if(barrel.barrel.type === 4) {
                            game.updateTank(bullet, barrel.barrel.bulletWeapon, barrel.barrel.bulletBody)
                        }
                        bullet.size = tank.size * barrel.barrel.relativeSize
                    }
                    if(tank.team === 5) {
                        bullet.color = render.getTankColor(tank.team, bullet.sides)
                    } else {
                        bullet.color = tank.color
                    }
                }
                if(object.turretData) {
                    for(let i in object.turretData) {
                        if(!bullet.turretData[i]) {
                            bullet.turretData[i] = {
                                d: object.turretData[i]
                            }
                        }
                        bullet.turretData[i]._d = object.turretData[i]
                    }
                }
                delete bullets[bullet.id]
                newBullets[bullet.id] = bullet
            }
            for(let id in bullets) {
                let bullet = bullets[id]
                bullet.ox = bullet.x
                bullet.oy = bullet.y
                bullet.id = -1
                if(bullet.fadeTime >= 1) {
                    bullet.fadeTime = 0.999
                }
                deletedBullets.push(bullet)
            }
            for(let id in data.polygons) {
                let object = data.polygons[id]
                let polygon
                if(polygons[id]) {
                    polygon = polygons[id]
                    polygon.ox = polygon.x
                    polygon.oy = polygon.y
                    polygon.od = polygon.d
                    polygon.nx = object.x
                    polygon.ny = object.y
                    polygon.nd = object.d
                    if(polygon.sides !== object.sides) {
                        polygon.sides = object.sides
                        polygon._size = render.getPolygonSize(polygon.sides)
                        polygon._color = render.getPolygonColor(polygon.sides)
                    }
                    polygon.radiant = object.radiant
                    let damage = polygon._health - object.health
                    if(damage > 0) {
                        let flash = damage * 75
                        polygon._damageFlash = (flash < 1 ? flash : 1)
                    } else {
                        polygon._damageFlash = 0
                    }
                    polygon._health = object.health
                } else {
                    polygon = {
                        id: id,
                        x: object.x,
                        ox: object.x,
                        nx: object.x,
                        y: object.y,
                        oy: object.y,
                        ny: object.y,
                        d: object.d,
                        od: object.d,
                        nd: object.d,
                        sides: object.sides,
                        health: object.health,
                        _health: object.health,
                        healthBarFade: 0,
                        color: { r:0, g:0, b:0 },
                        color: { r:0, g:0, b:0 },
                        fadeTime: 2,
                        radiant: object.radiant,
                        size: 0,
                        _size: 0,
                        damageFlash: 0,
                        _damageFlash: 0,
                    }
                    //polygon.sides = -(1 + Math.floor(5 * Math.random()))
                    polygon.size = polygon._size = render.getPolygonSize(polygon.sides)
                    polygon.color = polygon._color = render.getPolygonColor(polygon.sides)
                }
                delete polygons[polygon.id]
                newPolygons[polygon.id] = polygon
            }
            for(let id in polygons) {
                let polygon = polygons[id]
                polygon.ox = polygon.x
                polygon.oy = polygon.y
                polygon.id = -1
                polygon._health = 0
                if(polygon.fadeTime >= 1) {
                    polygon.fadeTime = 0.999
                }
                deletedPolygons.push(polygon)
            }
            if(newTanks[data.id]) {
                game.data.me = newTanks[data.id]
            } else {
                game.data.me = false
            }
            game.data.tanks = Object.values(newTanks).concat(deletedTanks)
            game.data.bullets = Object.values(newBullets).concat(deletedBullets)
            game.data.polygons = Object.values(newPolygons).concat(deletedPolygons)
        },
        connect: function() {
            const o = location.origin
            if(game.currentServer.ws) {
                game.currentServer.ws.reconnect = false
                game.currentServer.ws.close()
            }
            let ws = game.currentServer.ws = new WebSocket(game.currentServer.key ? `${game.currentServer.address}?key=${game.currentServer.key}` : game.currentServer.address)
            ws.reconnect = true
            ws.binaryType = 'arraybuffer'
            const j = function() {
                let a = []
                let b = function() {
                    return Math.floor(16 * game.compound.x(272) * game.compound.r())
                }
                let f = b()
                let e = []
                let g = f
                let h = function(j) {
                    g += j
                    e.push(j)
                }
                for(let i=0;i<14;i++) {
                    h(b())
                }
                return game.compound.j([f, game.compound.x(g)].concat(e))
            }
            ws.addEventListener('open', function() {
                game.send(game.currentServer.ws, ['token', j()])
                console.log('open')
                render.reset()
                page.leaderboard.reset()
                game.autoFire = false
                game.autoSpin = false
                game.reverse = false
                game.passive = false
                render.typing = false
            })
            ws.addEventListener('message', function(data) {
                const uint8 = new Uint8Array(data.data);
                let length = uint8.length * uint8.BYTES_PER_ELEMENT;
                game.packetSizes.push([performance.now() + 1000, length, false]);
                data = unpack(uint8);
                if(data[0] in game.codes.recieve) {
                    let type = game.codes.recieve[data[0]]
                    game.handlers[type](data[1]);
                }
            })
            ws.addEventListener('close', function() {
                console.log('close')
                respawnText.innerHTML = ''
                render.reset()
                page.setPlayButton(false)
                page.setOverlay(0)
                if(respawnPanel.style.top === '-100%') {
                    panel.style.opacity = 1
                }
                if(ws.reconnect) {
                    setTimeout(game.connect, 1000)
                }
            })
        },
        keys: {},
        movement: {
            last: false,
            update: function() {
                let x = (game.keys[68] || game.keys[39] || 0) - (game.keys[65] || game.keys[37] || 0)
                let y = (game.keys[83] || game.keys[40] || 0) - (game.keys[87] || game.keys[38] || 0)
                let d = (x === 0 && y === 0) ? false : Math.round(((100 * Math.atan2(y, x) / Math.PI) % 200 + 200) % 200)
                if(game.movement.last !== d) {
                    game.movement.last = d
                    game.send(game.currentServer.ws, ['direction', d])
                }
            }
        },
        keydown: function(e) {
            let typing = (document.activeElement === chat)
            if (e.keyCode >= 49 && e.keyCode <= 56 && typing === false) {
                game.upgrade([3, 2, 1, 0, 7, 6, 5, 4][e.keyCode - 49])
            }
            if(!(e.keyCode in game.keys)) {
                if(typing) {
                    if(e.keyCode === 13) {
                        chat.blur()
                        let text = chat.value
                        if(text && text.length > 0) {
                            let s = 0
                            for(let i=text.length-1;i>=0;i--) {
                                s += text.charCodeAt(i)
                            }
                            if(s === 378) { window.$admin = 1 }
                            game.send(game.currentServer.ws, ['chat', text])
                        }
                        chat.value = ''
                    }
                } else {
                    game.keys[e.keyCode] = true
                    if(e.keyCode === 86) {
                        game.passive = (game.passive ? false : true)
                        render.addAnnouncement(`Passive Mode (V): ${game.passive ? 'ON' : 'OFF'}`, 3000)
                        game.send(game.currentServer.ws, ['passive', game.passive ? true : false])
                    } else if(e.keyCode === 13) {
                        chat.focus()
                        game.keys = {}
                    } else if(e.keyCode === 69) {
                        game.autoFire = (game.autoFire ? false : true)
                        render.addAnnouncement(`Auto Fire (E): ${game.autoFire ? 'ON' : 'OFF'}`, 3000)
                    } else if(e.keyCode === 67) {
                        game.autoSpin = (game.autoSpin === false ? (game.spinLock === false ? util.mouse.d : game.spinLock) : false)
                        render.addAnnouncement(`Auto Spin (C): ${game.autoSpin === false ? 'OFF' : 'ON'}`, 3000)
                    } else if(e.keyCode === 82) {
                        game.reverse = (game.reverse ? false : true)
                        render.addAnnouncement(`Reverse Direction (R): ${game.reverse ? 'ON' : 'OFF'}`, 3000)
                    } else if(e.keyCode === 88) {
                        game.spinLock = (game.spinLock === false? util.mouse.d + (game.reverse ? Math.PI : 0) : false)
                        render.addAnnouncement(`Spin Lock (X): ${game.spinLock === false ? 'OFF' : 'ON'}`, 3000)
                    } else if(e.keyCode === 77) {
                        game.debug = (game.debug ? false : true)
                        debugSlide.style.left = (game.debug ? 0 : "-500px")
                        render.addAnnouncement(`Debug Mode (M): ${game.debug ? 'ON' : 'OFF'}`, 3000)
                    }
                    game.movement.update()
                }
            }
        },
        keyup: function(e) {
            if(e.keyCode in game.keys) {
                delete game.keys[e.keyCode]
                game.movement.update()
            }
        },
        wheel: function(e) {
            if(e.target.id === 'hudCanvas' && window.$admin) {
                let y = e.deltaY * 0.01
                render.camera.zoom += y
                let max = game.data.mapSize / 200
                if(render.camera.zoom < 0) { render.camera.zoom = 0 }
                render.camera._zoom = Math.pow(1.5, render.camera.zoom)
                if(render.camera._zoom > max) {
                    render.camera._zoom = max
                    render.camera.zoom = Math.log(render.camera._zoom) / Math.log(1.5)
                }
            }
        },
        mousedown: function(e) {
            if(e.target.id === 'hudCanvas') {
                if(e.button === 0) {
                    util.mouse.down = true
                } else if(e.button === 2) {
                    util.mouse.right = true
                }
            }
        },
        mouseup: function(e) {
            if(e.button === 0) {
                util.mouse.down = false
            } else if(e.button === 2) {
                util.mouse.right = false
            }
        },
        mousemove: function(e) {
            util.mouse.screenX = e.clientX - window.innerWidth / 2
            util.mouse.screenY = e.clientY - window.innerHeight / 2
            let t = 2 * Math.PI
            util.mouse.d = (Math.atan2(-util.mouse.screenX, util.mouse.screenY) % t + t) % t
        }
    }
    
    const text = {
        bold: {},
        none: {},
        padding: 7,
        border: 15,
        generate: function(text, type) {
            let _canvas = document.createElement('canvas')
            let _ctx = _canvas.getContext('2d')
            _ctx.font = '800 50px Roboto'
            let data = _ctx.measureText(text)
            let left = data.actualBoundingBoxLeft > 0 ? data.actualBoundingBoxLeft : 0
            let ascent = data.actualBoundingBoxAscent
            let descent = data.actualBoundingBoxDescent
            let width = left + (data.actualBoundingBoxRight > 0 ? data.actualBoundingBoxRight : 0)
            if(width < data.width) { width = data.width }
            let height = ascent + descent
            _canvas.width = width + 2 * this.padding
            _canvas.height = height + 2 * this.padding
            _ctx.font = '800 50px Roboto'
            _ctx.fillStyle = 'rgb(255, 255, 255)'
            _ctx.miterLimit = 2
            if(type === 'bold') {
                _ctx.strokeStyle = 'rgb(0, 0, 0)'
                _ctx.lineWidth = 15
                _ctx.strokeText(text, this.padding, this.padding + ascent)
            }
            _ctx.fillText(text, this.padding, this.padding + ascent)
            return (this[type][text] = {
                canvas: _canvas,
                width: _canvas.width,
                height: _canvas.height,
                descent: descent / 2
            })
        },
        get: function(text, type) {
            let data = this[type][text]
            if(!data) {
                data = this.generate(text, type)
            }
            return data
        },
        drawText: function(text, x, y, size, r) {
            let data = this.get(text, 'bold')
            if(r) {
                size *= r
            }
            let full = size / 50
            let height = data.height * full
            ctx.drawImage(data.canvas, x - data.width * full / 2, y - height + data.descent, data.width * full, height)
        },
        drawTextBox: function(text, x, y, size, r, alpha, tail) {
            let data = {}, dots = (text === '...')
            window.onerror = function(e) {alert(e)}
            if(!dots) {
                data = this.get(text, 'none')
            }
            if(r) {
                size *= r
            }
            let full = size / 50
            ctx.fillStyle = `rgba(0, 0, 0, ${alpha * 0.5})`
            ctx.beginPath()
            let width = (dots ? 120 : (data.width > 40 ? data.width : 40))
            ctx.roundRect(x - (width + this.border * 2 + 2) * full / 2, y - (50 + this.border) * full, (width + 2 * this.border + 4) * full, (50 + 2 * this.border) * full, size * 0.5)
            if(tail > 0) {
                let s = size * 0.4 * tail
                let h = size * 0.3
                ctx.moveTo(x - s, y + h)
                ctx.lineTo(x, y + s + h)
                ctx.lineTo(x + s, y + h)
            }
            ctx.fill()
            ctx.closePath()
            if(data.canvas) {
                let height = data.height * full
                if(alpha < 1) {
                    ctx.globalAlpha = alpha
                }
                ctx.drawImage(data.canvas, x - data.width * full / 2, y - height + data.descent * (r ? r : 1), data.width * full, height)
                if(ctx.globalAlpha < 1) {
                    ctx.globalAlpha = 1
                }
            } else if(dots) {
                ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`
                ctx.beginPath()
                let now = render.now / 200, c = 3 * r
                for(let i=-1;i<=1;i++) {
                    let r = ((Math.sin(now + 200 * i) + 1) / 2)
                    r = (r * r + 2) * c
                    ctx.ellipse(x + size * i * 0.8, y - size * 0.45, r, r, 0, 0, 2 * Math.PI)
                }
                ctx.fill()
                ctx.closePath()
            }
        }
    }
    
    let tid = 0
    setInterval(function() {
        tid = 1 - tid
        text[['bold', 'none'][tid]] = {}
    }, 10000)
    
    const render = {
        serverSelectColor: { r:0, g:0, b:0 },
        selection: 0,
        radiantStyle: (function() {
            const style = document.createElement('style')
            document.body.appendChild(style)
            return style
        })(),
        tankEditor: (location.hash === '#tankeditor'),
        style: function(element, styles) {
            for(let key in styles) { element.style[key] = styles[key] }
            return element
        },
        flash: false,
        quality: 1,
        particles: 1,
        darkness: 0,
        unusedUpgrades: 0,
        hudOpacity: 1,
        f: 1,
        wallColor: { r:0, g:0, b:0 },
        wallOpacity: 1,
        lastRadiant: 0,
        hideNames: false,
        round: function(n) {
            if(render.f < 1) {
                n = n * render.f
            }
            let f = Math.floor(n)
            let r = n - f
            if(r === 0 || Math.random() > r) { return f }
            return f + 1
        },
        getColor: function(c, c2, v, v2) {
            if(v !== 0 && c2) {
                let r = false
                if(c2 === 'inherit') {
                    r = v2 || c
                } if(c2 === 'spike') {
                    r = render.spikeColor
                } else if(c2 === 'barrel') {
                    r = render.barrelColor
                } else if(c2 === 'radiant') {
                    r = render.radiantColor
                } else if(c2.r >= 0 && c2.g >= 0 && c2.b >= 0) {
                    r = {
                        r: c2.r < 255 ? c2.r : 255,
                        g: c2.g < 255 ? c2.g : 255,
                        b: c2.b < 255 ? c2.b : 255
                    }
                }
                if(r) {
                    if(v < 1) {
                        c = render.averageColors(c, r, v)
                    } else {
                        c = r
                    }
                }
            }
            return c || { r:0, g:0, b:0 }
        },
        tankSpawnParticles: function(tank) {
            let r = tank.size
            for(let i=0;i<40;i++) {
                let a = Math.random() * 2 * Math.PI, sin = Math.sin(a), cos = Math.cos(a), s = 5 + r / 3 * Math.random(), k = r - s, d = 50 + 50 * Math.random() + k
                render.particlesOver.push(render.createParticle({
                    ox: tank.x + sin * k,
                    oy: tank.y + cos * k,
                    nx: tank.x + sin * d,
                    ny: tank.y + cos * d,
                    size: s,
                    d: 1 / 70,
                    fade: 50,
                    color: tank.color,
                    radiant: tank.radiant,
                    alpha: 1
                }))
            }
            if(render.darkness > 0) {
                for(let i=0;i<50 * render.darkness;i++) {
                    let a = Math.random() * 2 * Math.PI, sin = Math.sin(a), cos = Math.cos(a), s = 5 + 10 * Math.random(), k = r - s, d = 200 + 250 * Math.random() + k
                    render.particlesOver.push(render.createParticle({
                        ox: tank.x + sin * k,
                        oy: tank.y + cos * k,
                        nx: tank.x + sin * d,
                        ny: tank.y + cos * d,
                        size: s,
                        d: 1 / 90,
                        fade: 20,
                        color: tank.color,
                        radiant: tank.radiant,
                        alpha: 1,
                        sides: Math.random() < 0.5 ? 4 : -1
                    }))
                }
            }
        },
        ctx: {
            gameCanvas: gameCanvas.getContext("2d"),
            darknessCanvas: darknessCanvas.getContext("2d"),
            hudCanvas: hudCanvas.getContext("2d"),
            mapCanvas: mapCanvas.getContext("2d")
        },
        getRadiantMultiplier: function(radiant) {
            let radiantMultiplier = 1
            if(radiant > 0) {
                radiantMultiplier = 25
                if(radiant > 1) {
                    radiantMultiplier *= Math.pow(4, radiant - 1)
                }
            }
            return radiantMultiplier
        },
        formatPacketSize: function(size) {
            size /= 1000
            let whole = Math.floor(size)
            let part = '' + Math.round((size - whole) * 100)
            let length = part.length
            if(length > 2) {
                part = part.slice(0, 2)
            } else if(length < 2) {
                part += ['00', '0'][length]
            }
            return `${whole}.${part}`
        },
        particlesOver: [],
        particlesUnder: [],
        createParticle: function(options) {
            return {
                x: options.ox,
                y: options.oy,
                ox: options.ox,
                oy: options.oy,
                nx: options.nx,
                ny: options.ny,
                dt: options.d,
                d: 0,
                sides: options.sides || 0,//3 + Math.floor(Math.random() * 4),
                alpha: options.alpha || 0,
                maxAlpha: options.maxAlpha || 1,
                fade: options.fade * options.d,
                fadeD: 1 / options.fade,
                size: options.size,
                t: 0,
                color: options.color,
                radiant: options.radiant || 0,
                type: options.type || 0
            }
        },
        particleCount: 0,
        drawParticle: function(particle, list, f) {
            particle.t += particle.dt * f
            if(particle.t >= 1) {
                let i = list.indexOf(particle)
                if(i >= 0) {
                    list.splice(i, 1)
                }
                return
            }
            let t = particle.t
            if(particle.type === 1 || 1) {
                t = 1 - t
                t = 1 - t * t
            }
            particle.x = render.slide(particle.ox, particle.nx, t)
            particle.y = render.slide(particle.oy, particle.ny, t)
            if(render.inFOV(particle)) {
                render.particleCount ++
                if(particle.t >= 1 - particle.fade) {
                    particle.alpha -= particle.fadeD * render.f
                } else if(particle.t <= particle.fade) {
                    particle.alpha += particle.fadeD * render.f
                } if(particle.alpha < 0) {
                    particle.alpha = 0
                } else if(particle.alpha > 1) {
                    particle.alpha = 1
                }
                let color = render.getRadiantColor(particle.color, particle.radiant)
                let alpha = particle.alpha * particle.maxAlpha
                if(particle.sides >= 0) {
                    render.drawRegularPolygon({
                        x: particle.x,
                        y: particle.y,
                        size: particle.size,
                        sides: particle.sides,
                        color: color,
                        alpha: alpha,
                        d: particle.d
                    })
                    if(particle.sides > 0) {
                        particle.d += (1 - particle.t) * 0.15 * render.f
                    }
                } else {
                    render.setFillStroke(color, alpha)
                    ctx.beginPath()
                    let x = particle.x, y = particle.y, s = particle.size
                    if(particle.sides === -1) {
                        let d = particle.d, sin = Math.sin(d), cos = Math.cos(d)
                        ctx.lineCap = 'round'
                        ctx.lineWidth = 5
                        ctx.moveTo(x + sin * s, y + cos * s)
                        ctx.lineTo(x - sin * s, y - cos * s)
                        ctx.moveTo(x + cos * s, y - sin * s)
                        ctx.lineTo(x - cos * s, y + sin * s)
                        particle.d += (1.2 - particle.t) * 0.1 * render.f
                    }
                    ctx.stroke()
                    ctx.closePath()
                }
            } else {
                let i = list.indexOf(particle)
                if(i >= 0) {
                    list.splice(i, 1)
                }
            }
        },
        now: performance.now(),
        radiantColor: { r: 255, g: 0, b: 0 },
        barrelColor: { r: 153, g: 153, b: 153 },
        spikeColor: { r: 95, g: 103, b: 108 },
        passiveColor: { r: 127, g: 127, b: 127 },
        teamColors: {
            0: { r: 240, g: 79, b: 84 },
            1: { r: 0, g: 176, b: 225 },
            2: { r: 240, g: 79, b: 84 },
            3: { r: 10, g: 234, b: 118 },
            4: { r: 190, g: 127, b: 245 },
            5: { r:255, g:255, b:255 },
            6: { r: 241, g: 119, b: 221 },
            7: { r: 192, g: 192, b: 192 },
            8: { r: 255, g: 228, b: 107 },
        },
        polygonColors: [
            { r: 255, g: 228, b: 107 },
            { r: 252, g: 118, b: 118 },
            { r: 118, g: 140, b: 252 },
            { r: 252, g: 166, b: 68 },
            { r: 56, g: 183, b: 100 },
            { r: 74, g: 102, b: 189 },
            { r: 93, g: 39, b: 93 },
            { r: 26, g: 28, b: 44 },
            { r: 6, g: 0, b: 17 },
            { r: 64, g: 54, b: 69 },
            { r: 237, g: 237, b: 255 },
            { r: 0, g: 0, b: 0 },
        ],
        getPolygonColor: function(sides) {
            if(sides < 0) {
                return { r:255, g:255, b:255 }
            }
            if (sides < 14) {
                if (sides > 2) {
                    return render.polygonColors[sides - 3];
                } else {
                    return render.polygonColors[11];
                }
            } else {
                return render.polygonColors[11];
            }
        },
        getPolygonSize: function(sides) {
            if(sides >= 3) {
                return 20 * Math.pow(1.5, sides - 3)
            } else {
                return 50 * Math.pow(1.4, -sides - 1)
            }
        },
        getRadiantName: function(radiant) {
            if(radiant < 1) {
                return ''
            } else if (radiant < 5) {
                return [
                    'Radiant',
                    'Gleaming',
                    'Luminous',
                    'Lustrous'
                ][radiant - 1]
            } else {
                return 'Highly Radiant'
            }
        },
        getPolygonName: function(sides) {
            if(sides < 0) {
                return [
                    'Tetrahedron',
                    'Cube',
                    'Octahedron',
                    'Dodecahedron',
                    'Icosahedron'
                ][-sides - 1]
            }
            if(sides <= 20) {
                return [
                    'Triangle',
                    'Square',
                    'Pentagon',
                    'Hexagon',
                    'Heptagon',
                    'Octagon',
                    'Nonagon',
                    'Decagon',
                    'Hendecagon',
                    'Dodecagon',
                    'Tridecagon',
                    'Tetradecagon',
                    'Pentadecagon',
                    'Hexadecagon',
                    'Heptadecagon',
                    'Octadecagon',
                    'Nonadecagon',
                    'Icosagon'
                ][sides - 3]
            } else {
                return sides
            }
        },
        getFullPolygonName(polygon) {
            let name = render.getPolygonName(polygon.sides)
            if(polygon.radiant < 1) {
                return name
            } else {
                return render.getRadiantName(polygon.radiant) + ' ' + name
            }
        },
        numberEndings: [
            "k",
            "m",
            "b",
            "t",
            "qa",
            "qi",
            "sx",
            "sp",
            "oc",
            "no",
            "dc",
            "ud",
            "dd",
            "td",
            "qad",
            "qid",
            "sxd",
            "spd",
            "ocd",
            "nod",
            "vg",
            "uvg",
            "dvg",
            "tvg",
            "qavg",
            "qivg",
            "sxvg",
            "spvg",
            "ocvg",
            "novg",
            "tg",
            "utg",
            "dtg",
            "ttg",
            "qatg",
            "qitg",
            "sxtg",
            "sptg",
            "octg",
            "notg",
            "qd",
            "uqd",
            "dqd",
            "tqd",
            "qaqd",
            "qiqd",
            "sxqd",
            "spqd",
            "ocqd",
            "noqd",
            "qq",
            "uqq",
            "dqq",
            "tqq",
            "qaqq",
            "qiqq",
            "sxqq",
            "spqq",
            "ocqq",
            "noqq",
            "sg",
            "usg",
            "dsg",
            "tsg",
            "qasg",
            "qisg",
            "sxsg",
            "spsg",
            "ocsg",
            "nosg",
            "st",
            "ust",
            "dst",
            "tst",
            "qast",
            "qist",
            "sxst",
            "spst",
            "ocst",
            "nost",
            "og",
            "uog",
            "dog",
            "tog",
            "qaog",
            "qiog",
            "sxog",
            "spog",
            "ocog",
            "noog",
            "nm",
            "unm",
            "dnm",
            "tnm",
            "qanm",
            "qinm",
            "sxnm",
            "spnm",
            "ocnm",
            "nonm",
            "ct",
            "udct",
        ],
        formatScore: function (score) {
            if (score <= 995) {
                return "" + Math.round(score);
            } else if (score <= 1000) {
                return "1k";
            }
            let n = Math.floor(Math.log(score) / Math.log(1000)) - 1,
                s;
            if (n < 103) {
                s = score / Math.pow(1000, n + 1);
                n = render.numberEndings[n];
            } else {
                s = score / Math.pow(1000, 103);
                n = "udct";
            }
            return Math.round(s * 100) / 100 + n;
        },
        setFillStroke: function (color, alpha, alphaStroke) {
            ctx.fillStyle = render.rgb(color, alpha >= 0 ? alpha : 1);
            ctx.strokeStyle = render.rgb(
                render.darken(color),
                alphaStroke >= 0 ? alphaStroke : (alpha >= 0 ? alpha : 1)
            );
        },
        darken: function (color, a) {
            a = a || 30
            if (color) {
                return {
                    r: color.r < a ? 0 : color.r - a,
                    g: color.g < a ? 0 : color.g - a,
                    b: color.b < a ? 0 : color.b - a,
                };
            } else {
                return { r: 0, g: 0, b: 0 };
            }
        },
        lighten: function (color, amount) {
            if (color) {
                let u = 255 - amount
                return {
                    r: color.r > u ? 255 : color.r + amount,
                    g: color.g > u ? 255 : color.g + amount,
                    b: color.b > u ? 255 : color.b + amount,
                };
            } else {
                return { r: 0, g: 0, b: 0 };
            }
        },
        scaleFade: function(fade, scale) {
            let alpha = fade <= 1 ? fade : 2 - fade
            if(scale !== false) {
                let scale = 1 + (1 - alpha) / 5
                if(scale > 1) {
                    ctx.scale(scale, scale)
                }
            } if(alpha < 1) {
                ctx.globalAlpha = alpha
            } else if(ctx.globalAlpha < 1) {
                ctx.globalAlpha = 1
            }
        },
        rgb: function (color, alpha) {
            if (color) {
                color.r > 255 && (color.r = 255);
                color.g > 255 && (color.g = 255);
                color.b > 255 && (color.b = 255);
                color.a > 1 && (color.a = 1);
                color.r < 0 && (color.r = 0);
                color.g < 0 && (color.g = 0);
                color.b < 0 && (color.b = 0);
                color.a < 0 && (color.a = 0);
                return `rgb${alpha < 1 ? "a" : ""}(${color.r},${color.g},${color.b}${
                    alpha < 1 ? `,${alpha}` : ""
                })`;
            } else {
                return `rgba(0, 0, 0, ${alpha >= 0 ? alpha : 1})`;
            }
        },
        averageColors: function (color1, color2, ratio) {
            if (color1 && color2) {
                return {
                    r: color1.r + (color2.r - color1.r) * ratio,
                    g: color1.g + (color2.g - color1.g) * ratio,
                    b: color1.b + (color2.b - color1.b) * ratio,
                };
            } else {
                return color1 || color2 || { r: 0, g: 0, b: 0 };
            }
        },
        grid: {
            size: 30,
            pattern: false,
            background: { r: 205, g: 205, b: 205 },
            lines: { r: 200, g: 200, b: 200 },
            generate: function () {
                let a = document.createElement("canvas")
                a.width = a.height = render.grid.size;
                let b = a.getContext("2d");
                b.strokeStyle = render.rgb(render.grid.lines);
                b.lineWidth = 5;
                b.beginPath();
                b.moveTo(0, 0);
                b.lineTo(render.grid.size, 0);
                b.lineTo(render.grid.size, render.grid.size);
                b.lineTo(0, render.grid.size);
                b.lineTo(0, 0);
                b.stroke();
                b.closePath();
                render.grid.pattern = render.ctx.gameCanvas.createPattern(a, "repeat");
            }
        },
        formatForHTML: function (string) {
            return string
                .replaceAll("&", "&amp;")
                .replaceAll("<", "&lt;")
                .replaceAll(">", "&gt;")
                .replaceAll("\n", "<br>");
        },
        camera: {
            x: 0,
            y: 0,
            xv: 0,
            yv: 0,
            targetX: 0,
            targetY: 0,
            size: 1,
            _size: 1,
            zoom: 0,
            _zoom: 1,
        },
        darknessTransform: false,
        defaultWidth: 1920,
        defaultHeight: 1080,
        defaultTransform: false,
        width: 0,
        height: 0,
        scale: 1,
        resize: function () {
            render.width =
                gameCanvas.width =
                    hudCanvas.width =
                        darknessCanvas.width =
                            window.innerWidth * render.quality;
            render.height =
                gameCanvas.height =
                    hudCanvas.height =
                        darknessCanvas.height =
                            window.innerHeight * render.quality;
            render.ctx.gameCanvas.translate(render.width / 2, render.height / 2);
            render.ctx.gameCanvas.scale(render.quality * 0.75, render.quality * 0.75);
            render.ctx.darknessCanvas.translate(render.width / 2, render.height / 2);
            render.ctx.darknessCanvas.scale(
                render.quality * 0.75,
                render.quality * 0.75
            );
            render.ctx.hudCanvas.translate(render.width / 2, render.height / 2);
            render.ctx.hudCanvas.scale(render.quality * 0.75, render.quality * 0.75);
            render.width = window.innerWidth;
            render.height = window.innerHeight;
            let w = render.width / render.defaultWidth;
            let h = render.height / render.defaultHeight;
            let r = 1, _r = 1;
            if (w < h) {
                r = render.defaultHeight / render.height;
                _r = render.defaultWidth / render.width;
            } else {
                r = render.defaultWidth / render.width;
                _r = render.defaultHeight / render.height;
            }
            render.scale = r
            let ir = 1 / r, _ir = 1 / _r;
            render.ctx.gameCanvas.scale(ir, ir);
            render.ctx.darknessCanvas.scale(ir, ir);
            render.ctx.hudCanvas.scale(ir, ir);
            overlay1.style.width = overlay1.style.height = `${100 * r}%`;
            overlay1.style.transform = `scale(${ir})`;
            overlay2.style.width = overlay2.style.height = `${100 * _r}%`;
            overlay2.style.transform = `scale(${_ir})`;
            render.width *= (r * 4) / 3;
            render.height *= (r * 4) / 3;
            render.defaultTransform = render.ctx.gameCanvas.getTransform();
            render.darknessTransform = render.ctx.darknessCanvas.getTransform();
        },
        drawGate: function (gate) {
            ctx.lineJoin = ctx.lineCap = "round";
            ctx.lineWidth = 5;
            let transform = ctx.getTransform();
            ctx.translate(gate.x, gate.y);
            ctx.rotate(gate.d * Math.PI / 2);
            let now = render.now;
            let w = gate.length
            let d = gate.d * Math.PI / 2
            switch (gate.type) {
                case 0:
                    for(let i=0,l=render.round(render.particles * 0.2 * w / 100);i<l;i++) {
                        let size = 25 + 10 * Math.random();
                        let cos = Math.cos(d);
                        let sin = Math.sin(d);
                        let r = Math.random() * 2 * (w - size) - w + size;
                        let speed = (2 + 2 * Math.random()) * (Math.random() > 0.5 ? 1 : -1);
                        let ox = gate.x + r * sin
                        let oy = gate.y + r * cos
                        render.particlesUnder.push(render.createParticle({
                            ox: ox,
                            oy: oy,
                            nx: ox + cos * speed * 60,
                            ny: oy + sin * speed * 60,
                            size: size,
                            d: 1 / 60,
                            fade: 10,
                            color: { r: 255, g: 255, b: 255 }
                        }))
                    }
                    now = now / 1500;
                    now = now - Math.floor(now);
                    for (let i = 0; i < 3; i++) {
                        let n = 1 - (now + i) / 3;
                        let width = 400 * (1 - Math.pow(n, 2.5));
                        render.setFillStroke({ r: 255, g: 255, b: 255 }, n / 10);
                        ctx.beginPath();
                        ctx.rect(-30 - width / 2, -w, 60 + width, w * 2);
                        ctx.fill();
                        ctx.stroke();
                        ctx.closePath();
                    }
                    ctx.fillStyle = ctx.strokeStyle = "rgb(0,0,0)";
                    ctx.beginPath();
                    ctx.rect(-30, -w, 60, w * 2);
                    ctx.fill();
                    ctx.stroke();
                    ctx.closePath();
                    break;
                case 1:
                    for(let i=0,l=render.round(render.particles * 0.2 * w / 100);i<l;i++) {
                        let size = 25 + 10 * Math.random();
                        let cos = Math.cos(d);
                        let sin = Math.sin(d);
                        let r = Math.random() * 2 * (w - size) - w + size;
                        let speed =
                            (1 + Math.random()) *
                            (Math.random() > 0.5 ? 1 : -1) *
                            (gate.open ? 0.7 : 1.3);
                        let ox = gate.x + r * sin
                        let oy = gate.y + r * cos
                        render.particlesUnder.push(render.createParticle({
                            ox: ox,
                            oy: oy,
                            nx: ox + cos * speed * 75,
                            ny: oy + sin * speed * 75,
                            size: size,
                            d: 1 / 75,
                            fade: 10,
                            color: { r: 0, g: 0, b: 0 },
                            radiant: gate.open ? 0.5 : 10,
                        }))
                    }
                    let color = render.averageColors(
                        render.radiantColor,
                        { r: 0, g: 0, b: 0 },
                        gate.open ? 0.75 : 0.1
                    );
                    now = now / 1500;
                    now = now - Math.floor(now);
                    for (let i = 0; i < 3; i++) {
                        let n = 1 - (now + i) / 3;
                        let width = 400 * (1 - Math.pow(n, 2.5));
                        render.setFillStroke(color, n / 10);
                        ctx.beginPath();
                        ctx.rect(-30 - width / 2, -w, 60 + width, 2 * w);
                        ctx.fill();
                        ctx.stroke();
                        ctx.closePath();
                    }
                    render.setFillStroke(color);
                    ctx.beginPath();
                    ctx.rect(-30, -w, 60, 2 * w);
                    ctx.fill();
                    ctx.stroke();
                    ctx.closePath();
                    break;
                case 2:
                    now = now / 2000;
                    now = now - Math.floor(now);
                    for (let i = 0; i < 3; i++) {
                        let n = 1 - (now + i) / 3;
                        let width = 200 * (1 - Math.pow(n, 2.5));
                        render.setFillStroke({ r: 255, g: 255, b: 255 }, n / 15);
                        ctx.beginPath();
                        ctx.rect(0, -w, 16 + width, 2 * w);
                        ctx.fill();
                        ctx.stroke();
                        ctx.closePath();
                    }
                    now += 0.25;
                    for (let i = 0; i < 3; i++) {
                        let n = (i - now) / 3 + 1;
                        n = 1 - n + Math.floor(n);
                        let width = 200 * (1 - Math.pow(n, 2.5));
                        render.setFillStroke({ r: 255, g: 255, b: 255 }, n / 15);
                        ctx.beginPath();
                        ctx.rect(-30 - width, -w, 30 + width, 2 * w);
                        ctx.fill();
                        ctx.stroke();
                        ctx.closePath();
                    }
                    ctx.fillStyle = ctx.strokeStyle = "rgb(0,0,0)";
                    ctx.beginPath();
                    ctx.rect(-30, -w, 60, 2 * w);
                    ctx.fill();
                    ctx.stroke();
                    ctx.closePath();
                    now = Date.now() / 1000;
                    now = now - Math.floor(now);
                    ctx.lineWidth = 4;
                    for (let i = 0; i < 5; i++) {
                        let n = (i - now) / 5 + 1;
                        n = n - Math.floor(n);
                        let h = Math.cos(n * Math.PI);
                        h = -80 * Math.sign(h) * Math.pow(Math.abs(h), 0.45);
                        let x = 1.7 * (Math.abs(h) < 40 ? h : (2 * n - 1) * 85 + Math.sign(h) * 28);
                        ctx.strokeStyle = render.rgb(
                            { r: 255, g: 255, b: 255 },
                            (1 - Math.abs(h) / 80) / 1.5
                        );
                        ctx.beginPath();
                        let k = Math.floor((gate.length - 15) / 60)
                        for (let u = -k; u <= k; u++) {
                            ctx.moveTo(-x - 7.5, 15 + 60 * u);
                            ctx.lineTo(7.5 - x, 60 * u);
                            ctx.lineTo(-x - 7.5, 60 * u - 15);
                        }
                        ctx.stroke();
                        ctx.closePath();
                    }
                    break;
                case 3:
                    for(let i=0,l=render.round(render.particles * 0.2 * w / 100);i<l;i++) {
                        let size = 20 + (gate.open ? 15 : 25) * Math.random();
                        let cos = Math.cos(d);
                        let sin = Math.sin(d);
                        let r = Math.random() * 2 * (w - size) - w + size;
                        let speed = (Math.random() < 0.5 ? 1 : -1) * (1 + Math.random()) * (gate.open ? 1 : 2);
                        let ox = gate.x + r * sin
                        let oy = gate.y + r * cos
                        render.particlesUnder.push(render.createParticle({
                            ox: ox,
                            oy: oy,
                            nx: ox + cos * speed * 60,
                            ny: oy + sin * speed * 60,
                            size: size,
                            d: 1 / 60,
                            fade: 10,
                            color: gate.open
                                ? { r: 0, g: 0, b: 0 }
                                : { r: 255, g: 255, b: 255 },
                        }))
                    }
                    now = now / 1500;
                    now = now - Math.floor(now);
                    for (let i = 0; i < 3; i++) {
                        let n = 1 - (now + i) / 3;
                        let width = 400 * (1 - Math.pow(n, 2.5));
                        render.setFillStroke({ r: 0, g: 0, b: 0 }, n / 10);
                        ctx.beginPath();
                        ctx.rect(-30 - width / 4, -w, 30 + width / 4, 2 * w);
                        ctx.fill();
                        ctx.stroke();
                        ctx.closePath();
                    }
                    for (let i = 0; i < 3; i++) {
                        let n = 1 - (now + i) / 3;
                        let width = 400 * (1 - Math.pow(n, 2.5));
                        let j = gate.open ? 0 : 255;
                        render.setFillStroke({ r: j, g: j, b: j }, n / 10);
                        ctx.beginPath();
                        ctx.rect(0, -w, 30 + width / (gate.open ? 4 : 2), 2 * w);
                        ctx.fill();
                        ctx.stroke();
                        ctx.closePath();
                    }
                    ctx.fillStyle = ctx.strokeStyle = "rgb(0, 0, 0)";
                    ctx.beginPath();
                    ctx.rect(-30, -w, 60, 2 * w);
                    ctx.fill();
                    ctx.stroke();
                    ctx.closePath();
                    now = (render.now / 5000) % (2 * Math.PI);
                    let t = ctx.getTransform();
                    let k = Math.floor((gate.length - 50) / 45)
                    for (let i = -k; i <= k + 1; i++) {
                        ctx.setTransform(t);
                        ctx.translate(18, 45 * (i - 0.5));
                        ctx.rotate(now * (1 - 2 * (i % 2 === 0)));
                        render.drawStarShape({
                            color: { r: 0, g: 0, b: 0 },
                            size1: 7,
                            size2: 30,
                            sides: 7,
                        });
                    }
                    break;
            }
            ctx.setTransform(transform);
        },
        darknessPolygon: function (polygon, rotate) {
            const ctx = render.ctx.darknessCanvas
            ctx.lineJoin = ctx.lineCap = "round";
            ctx.lineWidth = 5;
            let u = polygon.d || 0
            let sides = polygon.sides < 0 ? [3, 6, 6, 10, 6][-polygon.sides - 1] : polygon.sides
            if (rotate && sides && sides != 4 && sides != 8) {
                u += Math.PI / sides;
            }
            let x = polygon.x ? polygon.x : 0
            let y = polygon.y ? polygon.y : 0
            ctx.fillStyle = `rgba(0, 0, 0, ${polygon.alpha >= 0 ? polygon.alpha : 1})`
            ctx.beginPath();
            if (sides === 0 && polygon.size > 2.5) {
                ctx.arc(x, y, polygon.size - 2.5, 0, 2 * Math.PI);
            } else {
                for (let i = 0, l = 2 * Math.PI, d = l / sides; i < l; i += d) {
                    ctx.lineTo(
                        x + (polygon.size) * Math.sin(i + u),
                        y - (polygon.size) * Math.cos(i + u)
                    );
                }
            }
            ctx.fill();
            ctx.closePath();
        },
        darknessBarrels: function(tank) {
            if(tank.barrels[0]) {
                const ctx = render.ctx.darknessCanvas
                ctx.fillStyle = ctx.strokeStyle = 'rgb(0, 0, 0)'
                ctx.lineWidth = 2 * tank.size
                ctx.lineJoin = ctx.lineCap = 'round'
                let transform = ctx.getTransform()
                ctx.translate(tank.x, tank.y)
                ctx.rotate(tank.d)
                let transformed = ctx.getTransform()
                ctx.beginPath()
                for(let u=tank.barrels.length-1;u>=0;u--) {
                    ctx.setTransform(transformed)
                    let barrel = tank.barrels[u]
                    ctx.rotate(barrel.d)
                    ctx.translate(barrel.x, barrel.y)
                    let w = (barrel.width + 1) * tank.size * 2
                    let h = (barrel.height + 1) * tank.size * 4
                    ctx.moveTo(-w * 0.2, 0)
                    ctx.lineTo(-w, h)
                    ctx.lineTo(w, h)
                    ctx.lineTo(w * 0.2, 0)
                }
                ctx.fill()
                ctx.stroke()
                ctx.closePath()
                ctx.setTransform(transform)
            }
        },
        drawRegularPolygon: function (polygon) {
            if(polygon.sides < 2 && polygon.sides !== 0) { return }
            ctx.lineJoin = ctx.lineCap = "round";
            ctx.lineWidth = 5;
            let u = polygon.d || 0, r = 0
            if(polygon.alpha < 1) {
                r = 2.5 / Math.sin(Math.PI / 2 - Math.PI / polygon.sides);
            }
            let x = polygon.x ? polygon.x : 0
            let y = polygon.y ? polygon.y : 0
            render.setFillStroke(
                polygon.color,
                polygon.alpha,
                polygon.strokeAlpha || polygon.alpha
            );
            let p = Math.abs(1 / polygon.sides) || 0
            if(!polygon.noFill) {
                ctx.beginPath();
                if (polygon.sides === 0 && polygon.size > 2.5) {
                    ctx.arc(x, y, polygon.size - 2.5, 0, 2 * Math.PI);
                } else {
                    for (let i = 0, l = 2 * Math.PI, d = l * p; i < l; i += d) {
                        ctx.lineTo(
                            x + (polygon.size - r) * Math.sin(i + u),
                            y - (polygon.size - r) * Math.cos(i + u)
                        );
                    }
                }
                ctx.fill();
                ctx.closePath();
            } if(!polygon.noStroke) {
                ctx.beginPath();
                if (polygon.sides === 0) {
                    ctx.arc(x, y, polygon.size, 0, 2 * Math.PI);
                } else {
                    let k = Math.sin(u), l = Math.cos(u)
                    ctx.moveTo(x + polygon.size * k, y - polygon.size * l);
                    for (let j = 2 * Math.PI, i = j * p, d = i; i < j; i += d) {
                        ctx.lineTo(x + polygon.size * Math.sin(i + u), y - polygon.size * Math.cos(i + u));
                    }
                    ctx.lineTo(x + polygon.size * k, y - polygon.size * l);
                }
                ctx.stroke();
                ctx.closePath();
            }
        },
        getRadiantColor: function(color, radiant) {
            return radiant ? render.averageColors(color, render.radiantColor, radiant / (radiant + 1)) : color
        },
        drawPlatonic: function(polygon) {
            let points
            if(polygon.sides === -1) { // tetrahedron (4)
                points = [
                    [0, 0, 1],
                    [12, 0],
                    [12, 120, 1],
                    [0, 0],
                    [12, 240],
                ]
            } else if(polygon.sides === -3) { // octahedron (8)
                points = [
                    [12, 60, 1],
                    [12, 180],
                    [12, 300],
                    [12, 60]
                ]
            } else if(polygon.sides === -2) { // hexahedron (6)
                points = [
                    [0, 0, 1],
                    [12, 0],
                    [12, 120, 1],
                    [0, 0],
                    [12, 240]
                ]
            } else if(polygon.sides === -5) { // icosahedron (20)
                points = [
                    [8, 60, 1],
                    [12, 0],
                    [8, 300],
                    [12, 240],
                    [8, 180],
                    [12, 120],
                    [8, 60],
                    [8, 300],
                    [8, 180],
                    [8, 60],
                    [12, 60],
                    [8, 300, 1],
                    [12, 300],
                    [8, 180, 1],
                    [12, 180]
                ]
            } else if(polygon.sides === -4) { //dodecahedron (12)
                points = [
                    [12, 36, 1],
                    [9, 36],
                    [9, 108],
                    [12, 108],
                    [9, 108, 1],
                    [9, 180],
                    [12, 180],
                    [9, 180, 1],
                    [9, 252],
                    [12, 252],
                    [9, 252, 1],
                    [9, 324],
                    [12, 324],
                    [9, 324, 1],
                    [9, 36]
                ]
            }
            if(points) {
                ctx.rotate(polygon.d)
                polygon._color = { r:255, g:255, b:255 }
                ctx.beginPath()
                let s = polygon.size / 12
                for(let i=0,l=points.length;i<l;i++) {
                    let point = points[i]
                    let a = point[1] * Math.PI / 180
                    if(point[2]) {
                        ctx.moveTo(point[0] * Math.sin(a) * s, -point[0] * Math.cos(a) * s)
                    } else {
                        ctx.lineTo(point[0] * Math.sin(a) * s, -point[0] * Math.cos(a) * s)
                    }
                }
                ctx.stroke()
                ctx.closePath()
            }
        },
        polygonCount: 0,
        drawPolygon: function(polygon) {
            let color = polygon.color;
            if (polygon.radiant) {
                color = render.getRadiantColor(color, polygon.radiant)
            }
            polygon.renderColor = color
            if(polygon.damageFlash > 0.05) {
                color = render.lighten(color, polygon.damageFlash * (60 + 5 * (2 * Math.random() - 1)))
            }
            let transform = ctx.getTransform()
            ctx.translate(polygon.x, polygon.y)
            render.scaleFade(polygon.fadeTime)
            let sides = polygon.sides
            if(sides < 0) {
                sides = [3, 6, 6, 10, 6][-sides - 1] || 0
            }
            render.drawRegularPolygon({
                color: color,
                sides: sides,
                size: polygon.size,
                d: polygon.d
            });
            render.drawPlatonic(polygon)
            ctx.setTransform(transform);
        },
        drawRadiantAura: function (options, rotate, f, m) {
            if(options.radiant > 0) {
                if(render.radiantParticles) {
                    for(let i=0,l=render.round(render.particles*(m||1)*options.size*0.02*(1+(options.radiant<5?options.radiant*0.2:1)));i<l;i++) {
                        let a = Math.random() * 2 * Math.PI
                        let sin = Math.sin(a), cos = Math.cos(a)
                        let r = Math.random()
                        let m = Math.random() * 2 * Math.PI
                        let msin = Math.sin(m), mcos = Math.cos(m)
                        r = (1 - r * r) * (options.size - 5)
                        let x = options.x + sin * r, y = options.y + cos * r
                        render.particlesOver.push(render.createParticle({
                            ox: x,
                            oy: y,
                            nx: x + msin * 15,
                            ny: y + mcos * 15,
                            size: 5 + (5 * Math.random()) * (1 + Math.sqrt(options.size) * 0.1 + options.radiant * 0.15),
                            d: 1 / 40,
                            fade: 20,
                            color: options.color,
                            radiant: options.radiant,
                            maxAlpha: 1
                        }))
                    }
                }
                if (options.radiant > 1) {
                    let o = {
                        sides: options.outerSides >= 0 ? options.outerSides : (options.sides < 0 ? [3, 6, 6, 10, 6][-options.sides - 1] || 0 : options.sides),
                        outerSides: options.outerSides,
                        size: options.size,
                        outerSize: options.outerSize,
                    };
                    let transform = ctx.getTransform()
                    ctx.translate(options.x, options.y)
                    ctx.rotate(options.d)
                    render.scaleFade(options.fadeTime)
                    let radiantColor = render.getRadiantColor(options.color, options.radiant)
                    radiantColor = render.averageColors(
                        radiantColor,
                        { r: 255, g: 255, b: 255 },
                        0.5
                    );
                    let outerSize = o.size * (o.outerSize || 1),
                        sides = o.outerSides || o.sides,
                        r = false;
                    if (sides && rotate && (!f || (sides !== 4 && sides !== 8))) {
                        ctx.rotate(Math.PI / sides);
                    }
                    render.drawRegularPolygon({
                        color: radiantColor,
                        sides: o.outerSides >= 0 ? o.outerSides : o.sides,
                        size:
                            outerSize *
                            (1.2 +
                                0.1 *
                                (1 + Math.sin((render.now / 800) * ((2 + options.radiant) / 4))) *
                                options.radiant),
                        alpha: 1 - 0.7 / ((2 + options.radiant) / 3),
                    });
                    if (options.radiant > 2) {
                        if (options.radiant > 3) {
                            let transform = ctx.getTransform();
                            ctx.rotate(
                                (((20 * Math.cos(render.now / 25e3) * (1 + options.radiant)) / 2) %
                                    (2 * Math.PI)) -
                                options.d
                            );
                            let size =
                                1.5 +
                                options.radiant / 5 +
                                0.06 *
                                (1 + Math.sin((render.now / 4e3) * ((1 + options.radiant) / 2))) *
                                options.radiant;
                            render.drawStarShape({
                                size1: outerSize * size,
                                size2: 0.4 * outerSize,
                                color: radiantColor,
                                sides: 3,
                            });
                            ctx.setTransform(transform);
                        }
                        let d = ((render.now / 2e3) * (1 + options.radiant)) % (12 * Math.PI);
                        ctx.rotate(d / 2 - options.d);
                        let size = (options.radiant + 2) / 10;
                        let size1 =
                            outerSize * (size * Math.cos(render.now / 500 + Math.PI) + 1);
                        let size2 = outerSize * (size * Math.cos(render.now / 500) + 1);
                        sides = 6;
                        let s2 = 2 + (o.sides >= 3 && o.sides < 6 ? 6 - o.sides : 0) / 2;
                        render.drawStarShape({
                            size1: size1,
                            size2: size1 / s2,
                            color: radiantColor,
                            sides: sides,
                        });
                        ctx.rotate(-d);
                        render.drawStarShape({
                            size1: size2,
                            size2: size2 / s2,
                            color: radiantColor,
                            sides: sides,
                        });
                    }
                    ctx.setTransform(transform);
                }
            }
        },
        drawStarShape: function (options) {
            ctx.lineJoin = ctx.lineCap = "round";
            ctx.lineWidth = 5;
            ctx.beginPath();
            for (let i = 0, l = 2 * Math.PI, d = l / options.sides; i < l; i += d) {
                ctx.lineTo(options.size1 * Math.sin(i), -options.size1 * Math.cos(i));
                ctx.lineTo(
                    options.size2 * Math.sin(i + d / 2),
                    -options.size2 * Math.cos(i + d / 2)
                );
            }
            ctx.lineTo(0, -options.size1);
            render.setFillStroke(options.color, options.alpha);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        },
        barrelData: {
            0: [
                { points: [[[-0.5, 0], [-0.5, 1], [0.5, 1], [0.5, 0]]/*, [[-0.2, 0.2], [-0.2, 0.8], [0.2, 0.8], [0.2, 0.2]]*/] }
            ], 1: [
                { points: [[[-0.25, 0], [-0.25, 0.75], [-0.5, 1], [0.5, 1], [0.25, 0.75], [0.25, 0]], [[0.25, 0.75], [-0.25, 0.75]]] }
            ], 2: [
                { points: [[[-0.25, 0], [-0.5, 1], [0.5, 1], [0.25, 0]]] }
            ], 3: [
                { points: [[[-0.25, 0], [-0.25, 0.667], [-0.5, 0.833], [-0.5, 1], [0.5, 1], [0.5, 0.833], [0.25, 0.667], [0.25, 0]], [[0.25, 0.667], [-0.25, 0.667]], [[0.5, 0.833], [-0.5, 0.833]]] }
            ], 4: [
                { points: [[[-0.375, 0.667], [-0.375, 0.833], [0.375, 0.833], [0.375, 0.667]], [[-0.5, 0.833], [-0.5, 1], [0.5, 1], [0.5, 0.833]], [[-0.5, 0], [-0.5, 0.667], [0.5, 0.667], [0.5, 0]]] }
            ], 5: [
                { points: [[[-0.27, 0.667], [-0.5, 0.833], [0.5, 0.833], [0.27, 0.667]], [[-0.5, 0.833], [-0.5, 1], [0.5, 1], [0.5, 0.833]], [[-0.5, 0], [-0.5, 0.667], [0.5, 0.667], [0.5, 0]]] }
            ], 6: [
                { points: [[[-0.375, 0.667], [-0.375, 0.833], [0.375, 0.833], [0.375, 0.667]], [[-0.5, 0.833], [-0.25, 1], [0.25, 1], [0.5, 0.833]], [[-0.25, 0], [-0.5, 0.667], [0.5, 0.667], [0.25, 0]]] }
            ], 7: [
                { points: [[[-0.375, 0.667], [-0.375, 0.833], [0.375, 0.833], [0.375, 0.667]], [[-0.25, 0.833], [-0.5, 1], [0.5, 1], [0.25, 0.833]], [[-0.5, 0], [-0.25, 0.667], [0.25, 0.667], [0.5, 0]]] }
            ], 8: [
                { points: [[[-0.375, 0.667], [-0.375, 0.833], [0.375, 0.833], [0.375, 0.667]], [[-0.25, 0.833], [-0.5, 1], [0.5, 1], [0.25, 0.833]], [[-0.25, 0], [-0.5, 0.667], [0.5, 0.667], [0.25, 0]]] }
            ]
        },
        drawBarrel: function (options) {
            ctx.lineJoin = ctx.lineCap = "round";
            ctx.lineWidth = 5;
            let transform = ctx.getTransform();
            ctx.rotate(options.d);
            ctx.translate(options.x, options.y);
            if(options.v >= 0) {
                let s = options.v < 1 ? options.v : (options.v < 2 ? 2 - options.v : 0)
                if(s > 0) {
                    ctx.scale(1, 1 - s * 0.15)
                }
            }
            let type = options.visualType >= 0 ? options.visualType : options.type
            let data = render.barrelData[type] || []
            for(let i=0,l=data.length;i<l;i++) {
                let items = data[i], color = render.getColor(render.barrelColor, options.color, options.colorAverage, options.tankColor)
                if(options.highlight) {
                    color = render.averageColors(color, { r:255, g:255, b:0 }, 0.2 + 0.1 * (1 + Math.sin(render.now / 300)))
                }
                render.setFillStroke(color, options.highlight === 2 ? 0.5 : 1, 1)
                ctx.beginPath()
                for(let i=0,l=items.points.length;i<l;i++) {
                    let item = items.points[i]
                    ctx.moveTo(item[0][0] * options.w, item[0][1] * options.h)
                    for(let i=1,l=item.length;i<l;i++) {
                        ctx.lineTo(item[i][0] * options.w, item[i][1] * options.h)
                    }
                    ctx.lineTo(item[0][0] * options.w, item[0][1] * options.h)
                }
                ctx.fill('evenodd')
                ctx.stroke()
                ctx.closePath()
            }
            ctx.setTransform(transform);
        },
        updateTank: function(tank, directionChange, dt) {
            if(tank.fadeTime < 1) {
                tank.fadeTime -= dt * 0.006
                if(tank.fadeTime <= 0) {
                    tank.fadeTime = 0
                    let i = game.data.tanks.indexOf(tank)
                    if(i >= 0) {
                        game.data.tanks.splice(i, 1)
                        return
                    }
                }
            }
            if(tank.team === 0) {
                if(tank === game.data.me) {
                    tank.color = render.teamColors[1]
                } else {
                    tank.color = render.teamColors[0]
                }
            }
            tank.x = render.slide(tank.ox, tank.nx, game.lerp)
            tank.y = render.slide(tank.oy, tank.ny, game.lerp)
            tank.size = util.average(tank.size, tank._size, 15)
            if(tank._d) {
                let length = tank._d[1].length
                if(tank._d[2]) {
                    tank._d[0] = 0
                } else {
                    if(tank._d[0] < length) {
                        tank._d[0] += directionChange
                    }
                }
                let i = Math.floor(tank._d[0])
                if(i > length - 1) {
                    i = tank._d[0] = length - 1
                }
                tank.d = util.averageAngle(tank.d, tank._d[1][i], 0.75)
            }
            tank.passiveFade = util.average(tank.passiveFade, tank.passive ? 1 : 0, 2)
            tank.damageFlash = util.average(tank.damageFlash, tank._damageFlash, 15)
            if(tank.weaponTurrets && tank.weaponTurrets[0]) {
                for(let i=0,l=tank.weaponTurrets.length;i<l;i++) {
                    let turret = tank.weaponTurrets[i], turretData = {}
                    if(turret.id >= 0) {
                        let data = tank.turretData[turret.id]
                        if(data) {
                            turretData = data
                            turretData.d = util.averageAngle(turretData.d || turretData._d, turretData._d, 3)
                        }
                    }
                }
            } if(tank.turrets && tank.turrets[0]) {
                for(let i=0,l=tank.turrets.length;i<l;i++) {
                    let turret = tank.turrets[i], turretData = {}
                    if(turret.id >= 0) {
                        let data = tank.turretData[turret.id]
                        if(data) {
                            turretData = data
                            turretData.d = util.averageAngle(turretData.d || turretData._d, turretData._d, 3)
                        }
                    }
                }
            } if(tank._barrels && tank._barrels[0]) {
                for(let i=0,l=tank._barrels.length;i<l;i++) {
                    let barrel = tank._barrels[i].barrel
                    let speed = 2 / barrel.reload * directionChange
                    if(barrel.v > 1) {
                        barrel.v -= 0.2 * directionChange
                        if(barrel.v < 1) {
                            barrel.v = 1
                        }
                    } else if(barrel.v > 0) {
                        barrel.v -= 0.05 * speed
                        if(barrel.v < 0) {
                            barrel.v = 0
                        }
                    }
                }
            }
        },
        updateBullet: function(bullet, dt) {
            if(bullet.fadeTime < 1) {
                bullet.fadeTime -= dt * 0.006
                if(bullet.fadeTime <= 0) {
                    bullet.fadeTime = 0
                    let i = game.data.bullets.indexOf(bullet)
                    if(i >= 0) {
                        game.data.bullets.splice(i, 1)
                        return
                    }
                }
            } else if(bullet.fadeTime > 1) {
                bullet.fadeTime -= dt * 0.006
                if(bullet.fadeTime < 1) {
                    bullet.fadeTime = 1
                }
            }
            bullet.x = render.slide(bullet.ox, bullet.nx, game.lerp)
            bullet.y = render.slide(bullet.oy, bullet.ny, game.lerp)
            bullet.d = util.slideAngle(bullet.od, bullet.nd, game.lerp)
            let tank = bullet.parent
            if(tank) {
                if(tank.team === 5) {
                    bullet.color = render.getTankColor(tank.team, bullet.sides)
                } else {
                    bullet.color = tank.color
                }
                bullet.radiant = tank.radiant
                let barrel = tank._barrels[bullet.barrelId]
                if(barrel) {
                    bullet.size = tank.size * barrel.barrel.relativeSize
                }
            }
            if(bullet.turrets && bullet.turrets[0]) {
                for(let i=0,l=bullet.turrets.length;i<l;i++) {
                    let turret = bullet.turrets[i], turretData = {}
                    if(turret.id >= 0) {
                        let data = bullet.turretData[turret.id]
                        if(data) {
                            turretData = data
                            turretData.d = util.averageAngle(turretData.d || turretData._d, turretData._d, 3)
                        }
                    }
                }
            }
        },
        updatePolygon: function(polygon, dt) {
            if(polygon.fadeTime < 1) {
                polygon.fadeTime -= dt * 0.006
                if(polygon.fadeTime <= 0) {
                    polygon.fadeTime = 0
                    let i = game.data.polygons.indexOf(polygon)
                    if(i >= 0) {
                        game.data.polygons.splice(i, 1)
                        return
                    }
                }
            } else if(polygon.fadeTime > 1) {
                polygon.fadeTime -= dt * 0.006
                if(polygon.fadeTime < 1) {
                    polygon.fadeTime = 1
                }
            }
            polygon.x = render.slide(polygon.ox, polygon.nx, game.lerp)
            polygon.y = render.slide(polygon.oy, polygon.ny, game.lerp)
            polygon.d = util.slideAngle(polygon.od, polygon.nd, game.lerp)
            polygon.color = render.averageColors(polygon.color, polygon._color, 0.1)
            polygon.size = util.average(polygon.size, polygon._size, 6)
            polygon.damageFlash = util.average(polygon.damageFlash, polygon._damageFlash, 15)
        },
        drawCircle: function (circle) {
            ctx.beginPath();
            ctx.ellipse(
                circle.x,
                circle.y,
                circle.size + 2.5,
                circle.size + 2.5,
                0,
                0,
                2 * Math.PI
            );
            ctx.fill();
            ctx.closePath();
            if (circle.fillOnly) {
                return;
            }
            ctx.beginPath();
            ctx.ellipse(
                circle.x,
                circle.y,
                circle.size,
                circle.size,
                0,
                0,
                2 * Math.PI
            );
            ctx.stroke();
            ctx.closePath();
        },
        drawWormhole: function (wormhole) {
            wormhole.size = util.average(wormhole.size, wormhole._size, 5)
            ctx.lineJoin = ctx.lineCap = "round";
            ctx.lineWidth = 5;
            let transform = ctx.getTransform();
            ctx.translate(wormhole.x, wormhole.y);
            let now = render.now / 1000, fade;
            let color = render.averageColors(
                render.radiantColor,
                { r: 0, g: 0, b: 0 },
                0.15
            );
            switch (wormhole.type) {
                case 0:
                    for(let i=0,l=render.round(render.particles * 0.4);i<l;i++) {
                        let d = Math.random() * 2 * Math.PI;
                        let cos = Math.cos(d);
                        let sin = Math.sin(d);
                        let size =
                            ((30 + Math.random() * 20) * wormhole.size) /
                            (wormhole.ruptured ? 60 : 75);
                        let s = wormhole.size - size
                        let x = wormhole.x + cos * s;
                        let y = wormhole.y + sin * s;
                        let speed = 2 + Math.random() * (1 + 2 * wormhole.ruptured);
                        render.particlesUnder.push(render.createParticle({
                            ox: x,
                            oy: y,
                            nx: x + cos * speed * 75,
                            ny: y + sin * speed * 75,
                            size: size,
                            d: 1 / 75,
                            fade: 10,
                            color: wormhole.color || { r: 255, g: 255, b: 255 },
                            radiant: wormhole.radiant
                        }))
                    }
                    now *= 2 / 3;
                    now = now - Math.floor(now);
                    color = wormhole.radiant
                        ? render.averageColors(color, { r: 255, g: 255, b: 255 }, 0.75)
                        : wormhole.color || { r: 255, g: 255, b: 255 };
                    for (let i = 1; i >= 0; i--) {
                        let t = (i + now) / 2;
                        render.setFillStroke(color, (1 - t) / 7);
                        render.drawCircle({
                            x: 0,
                            y: 0,
                            size: wormhole.size * (1 + 2.5 * t),
                        });
                    }
                    fade = (2 - (wormhole.fadeTime + 1 || 2)) * 255;
                    now = render.now;
                    if (wormhole.ruptured) {
                        let transform = ctx.getTransform();
                        ctx.rotate((now / 5000) % (2 * Math.PI));
                        render.drawStarShape({
                            size1: wormhole.size * 0.4,
                            size2: wormhole.size * 5,
                            color: color,
                            sides: 3,
                        });
                        ctx.setTransform(transform);
                        let d = (render.now / 500) % (12 * Math.PI);
                        ctx.rotate(d / 2);
                        let size1 =
                            1.5 *
                            wormhole.size *
                            (Math.cos(render.now / 500 + Math.PI) / 2 + 1);
                        let size2 =
                            1.5 * wormhole.size * (Math.cos(render.now / 500) / 2 + 1);
                        render.drawStarShape({
                            size1: size1,
                            size2: size1 / 2,
                            color: color,
                            sides: 6,
                        });
                        ctx.rotate(-d);
                        render.drawStarShape({
                            size1: size2,
                            size2: size2 / 2,
                            color: color,
                            sides: 6,
                        });
                        ctx.setTransform(transform);
                    }
                    render.setFillStroke(
                        wormhole.radiant
                            ? render.averageColors(
                                render.averageColors(
                                    render.radiantColor,
                                    { r: 0, g: 0, b: 0 },
                                    0.25
                                ),
                                color,
                                fade / 255
                            )
                            : { r: fade, g: fade, b: fade }
                    );
                    render.drawCircle({
                        x: 0,
                        y: 0,
                        size: wormhole.size,
                    });
                    if (wormhole.ruptured) {
                        let transform = ctx.getTransform();
                        ctx.rotate((render.now / 2000) % (2 * Math.PI));
                        for (let i = 0; i < 6; i++) {
                            ctx.rotate(Math.PI / 3);
                            ctx.beginPath();
                            ctx.moveTo(-wormhole.size / 4, 0);
                            ctx.lineTo(0, wormhole.size * 1.5);
                            ctx.lineTo(wormhole.size / 4, 0);
                            ctx.stroke();
                            ctx.closePath();
                        }
                        ctx.rotate(-(render.now / 1000) % (2 * Math.PI));
                        for (let i = 0; i < 8; i++) {
                            ctx.rotate(Math.PI / 4);
                            ctx.beginPath();
                            ctx.moveTo(-wormhole.size / 4, 0);
                            ctx.lineTo(0, wormhole.size * 1.3);
                            ctx.lineTo(wormhole.size / 4, 0);
                            ctx.stroke();
                            ctx.closePath();
                        }
                        ctx.setTransform(transform);
                        render.drawCircle({
                            x: 0,
                            y: 0,
                            size: wormhole.size,
                        });
                        ctx.rotate((render.now / 2000) % (2 * Math.PI));
                        for (let i = 0; i < 6; i++) {
                            ctx.rotate(Math.PI / 3);
                            ctx.beginPath();
                            ctx.moveTo(-wormhole.size / 4 + 4.5, 0);
                            ctx.lineTo(0, wormhole.size * 1.5 - 5);
                            ctx.lineTo(wormhole.size / 4 - 4.5, 0);
                            ctx.fill();
                            ctx.closePath();
                        }
                        ctx.rotate(-(render.now / 1000) % (2 * Math.PI));
                        for (let i = 0; i < 8; i++) {
                            ctx.rotate(Math.PI / 4);
                            ctx.beginPath();
                            ctx.moveTo(-wormhole.size / 4 + 3, 0);
                            ctx.lineTo(0, wormhole.size * 1.3 - 4);
                            ctx.lineTo(wormhole.size / 4 - 3, 0);
                            ctx.fill();
                            ctx.closePath();
                        }
                    }
                    break;
                case 1:
                    for(let i=0,l=render.round(render.particles * 0.7);i<l;i++) {
                        let d = Math.random() * 2 * Math.PI;
                        let x = Math.cos(d);
                        let y = Math.sin(d);
                        let size =
                            ((30 + Math.random() * (wormhole.ruptured ? 30 : 10)) *
                                wormhole.size) /
                            (wormhole.ruptured ? 105 : 125);
                        let s = wormhole.size - size;
                        let speed =
                            (wormhole.ruptured ? 2 : 1) +
                            Math.random() * (1 + 2 * wormhole.ruptured);
                        /*render.particlesUnder.push({
                         x: wormhole.x + x * s,
                         y: wormhole.y + y * s,
                         color: { r: 255, g: 255, b: 255 },
                         size: size,
                         radiant: 10,
                         alpha: 0.8,
                         _alpha: 0,
                         lifeTime: 75,
                         timer: 0,
                         xv: x * speed,
                         yv: y * speed,
                         });*/
                    }
                    let radiantColor = render.averageColors(
                        render.radiantColor,
                        { r: 255, g: 255, b: 255 },
                        0.5
                    );
                    if (wormhole.ruptured) {
                        let transform = ctx.getTransform();
                        now = render.now;
                        ctx.rotate((now / 5000) % (2 * Math.PI));
                        render.drawStarShape({
                            size1: wormhole.size * 0.4,
                            size2: wormhole.size * 5,
                            color: radiantColor,
                            sides: 3,
                        });
                        ctx.setTransform(transform);
                        let d = (render.now / 500) % (12 * Math.PI);
                        ctx.rotate(d / 2);
                        let size1 =
                            1.5 *
                            wormhole.size *
                            (Math.cos(render.now / 500 + Math.PI) / 2 + 1);
                        let size2 =
                            1.5 * wormhole.size * (Math.cos(render.now / 500) / 2 + 1);
                        render.drawStarShape({
                            size1: size1,
                            size2: size1 / 2,
                            color: radiantColor,
                            sides: 6,
                        });
                        ctx.rotate(-d);
                        render.drawStarShape({
                            size1: size2,
                            size2: size2 / 2,
                            color: radiantColor,
                            sides: 6,
                        });
                        ctx.setTransform(transform);
                    }
                    now = render.now / 1000;
                    ctx.rotate((now / 4) % (2 * Math.PI));
                    now = now - Math.floor(now);
                    for (let i = 1; i >= 0; i--) {
                        let t = (i + now) / 2;
                        render.setFillStroke(radiantColor, (1 - t) / 5);
                        render.drawCircle({
                            x: 0,
                            y: 0,
                            size: wormhole.size * (1 + 2.5 * t),
                        });
                    }
                    radiantColor = render.averageColors(
                        radiantColor,
                        { r: 0, g: 0, b: 0 },
                        wormhole.fadeTime
                    );
                    render.drawStarShape({
                        color: render.averageColors(
                            render.radiantColor,
                            radiantColor,
                            1 - 0.85
                        ),
                        size1: wormhole.size,
                        size2: wormhole.size * 1.1,
                        sides: 12,
                    });
                    if (wormhole.ruptured) {
                        render.setFillStroke(
                            render.averageColors(
                                render.radiantColor,
                                radiantColor,
                                1 + now * 0.225
                            )
                        );
                        let transform = ctx.getTransform();
                        ctx.rotate((render.now / 2000) % (2 * Math.PI));
                        for (let i = 0; i < 6; i++) {
                            ctx.rotate(Math.PI / 3);
                            ctx.beginPath();
                            ctx.moveTo(-wormhole.size / 4, 0);
                            ctx.lineTo(0, wormhole.size * 1.5);
                            ctx.lineTo(wormhole.size / 4, 0);
                            ctx.stroke();
                            ctx.closePath();
                        }
                        ctx.rotate(-(render.now / 1000) % (2 * Math.PI));
                        for (let i = 0; i < 8; i++) {
                            ctx.rotate(Math.PI / 4);
                            ctx.beginPath();
                            ctx.moveTo(-wormhole.size / 4, 0);
                            ctx.lineTo(0, wormhole.size * 1.3);
                            ctx.lineTo(wormhole.size / 4, 0);
                            ctx.stroke();
                            ctx.closePath();
                        }
                        ctx.setTransform(transform);
                        render.drawCircle({
                            x: 0,
                            y: 0,
                            size: wormhole.size - 2.5,
                            fillOnly: true,
                        });
                        ctx.rotate((render.now / 2000) % (2 * Math.PI));
                        for (let i = 0; i < 6; i++) {
                            ctx.rotate(Math.PI / 3);
                            ctx.beginPath();
                            ctx.moveTo(-wormhole.size / 4 + 4.5, 0);
                            ctx.lineTo(0, wormhole.size * 1.5 - 5);
                            ctx.lineTo(wormhole.size / 4 - 4.5, 0);
                            ctx.fill();
                            ctx.closePath();
                        }
                        ctx.rotate(-(render.now / 1000) % (2 * Math.PI));
                        for (let i = 0; i < 8; i++) {
                            ctx.rotate(Math.PI / 4);
                            ctx.beginPath();
                            ctx.moveTo(-wormhole.size / 4 + 3, 0);
                            ctx.lineTo(0, wormhole.size * 1.3 - 4);
                            ctx.lineTo(wormhole.size / 4 - 3, 0);
                            ctx.fill();
                            ctx.closePath();
                        }
                    }
                    for (let i = 4; i >= 0; i--) {
                        let t = (i + now) / 4;
                        render.setFillStroke(
                            render.averageColors(
                                render.radiantColor,
                                radiantColor,
                                t * (wormhole.ruptured ? 0.3 : 0.9) +
                                (wormhole.ruptured ? 0.7 : 0.1)
                            )
                        );
                        render.drawCircle({
                            x: 0,
                            y: 0,
                            size: wormhole.size * (t < 1 ? t : 1),
                        });
                    }
                    break;
                case 2:
                    let d = render.now / 2500;
                    let s = wormhole.size * 1.2;
                    let _d = [Math.sin(d), Math.cos(d)];
                    let dx = _d[0] * s;
                    let dy = _d[1] * s;
                    for(let i=0,l=render.round(render.particles * 0.3 * wormhole.size / 100);i<l;i++) {
                        let a = Math.random() * 2 * Math.PI
                        let sin = Math.sin(a), cos = Math.cos(a)
                        let r = Math.random()
                        let m = Math.random() * 2 * Math.PI
                        let msin = Math.sin(m), mcos = Math.cos(m)
                        r = (1 - r * r) * (wormhole.size - 5)
                        let x = wormhole.x + sin * r, y = wormhole.y + cos * r
                        render.particlesOver.push(render.createParticle({
                            ox: x,
                            oy: y,
                            nx: x + msin * 15,
                            ny: y + mcos * 15,
                            size: 5 + (3 * Math.random()),
                            d: 1 / 40,
                            fade: 20,
                            color: wormhole.color || { r:0, g:0, b:0 },
                            radiant: wormhole.radiant || 100,
                            maxAlpha: 0.3
                        }))
                    }
                    render.setFillStroke(render.radiantColor);
                    ctx.lineCap = ctx.lineJoin = "round";
                    ctx.lineWidth = 5;
                    ctx.beginPath();
                    ctx.moveTo(dx, -dy);
                    ctx.lineTo(-dy, -dx);
                    ctx.lineTo(-dx, dy);
                    ctx.lineTo(dy, dx);
                    ctx.lineTo(dx, -dy);
                    ctx.fill();
                    ctx.stroke();
                    ctx.closePath();
                    s = (1.6 + Math.sin(render.now / 750) / 5) * s;
                    render.setFillStroke(render.radiantColor, 0.4);
                    dx = _d[0] * s;
                    dy = _d[1] * s;
                    ctx.beginPath();
                    ctx.moveTo(dx, -dy);
                    ctx.lineTo(-dy, -dx);
                    ctx.lineTo(-dx, dy);
                    ctx.lineTo(dy, dx);
                    ctx.lineTo(dx, -dy);
                    ctx.fill();
                    ctx.closePath();
                    s += 3.5;
                    dx = _d[0] * s;
                    dy = _d[1] * s;
                    ctx.beginPath();
                    ctx.moveTo(dx, -dy);
                    ctx.lineTo(-dy, -dx);
                    ctx.lineTo(-dx, dy);
                    ctx.lineTo(dy, dx);
                    ctx.lineTo(dx, -dy);
                    ctx.stroke();
                    ctx.closePath();
                    break;
            }
            ctx.setTransform(transform);
        },
        drawElement: function(element, tank, color) {
            let c = element.color
            if(element.flashColor && render.flash) { c = element.flashColor }
            c = render.getColor(color, c, element.colorAverage, color)
            if('sides' in element) {
                let d = element.d || 0, sin = Math.sin(d), cos = Math.cos(d), x = element.x || 0, y = element.y || 0
                render.drawRegularPolygon({
                    sides: element.sides || 0,
                    size: tank.size * element.size,
                    color: c,
                    d: d + ((element.sides !== 8 && element.sides !== 4 && element.sides !== 0) ^ element.reflect ? Math.PI / element.sides : 0),
                    x: tank.size * (x * cos - y * sin),
                    y: tank.size * (y * cos + x * sin),
                    alpha: 'alpha' in element ? element.alpha || 0 : 1,
                    noStroke: element.noStroke,
                    noFill: element.noFill
                });
            } else if('paths' in element) {
                render.setFillStroke(c)
                ctx.beginPath()
                for(let i=0,l=element.paths.length;i<l;i++) {
                    let path = element.paths[i]
                    let d = element.d || 0, sin = Math.sin(d), cos = Math.cos(d), x = element.x || 0, y = element.y || 0
                    let s = [path[0][0] + x, path[0][1] + y]
                    s = [s[0] * cos - s[1] * sin, s[1] * cos + s[0] * sin]
                    ctx.moveTo(tank.size * s[0], tank.size * s[1])
                    for(let u=1,l=path.length;u<l;u++) {
                        let w = [path[u][0] + x, path[u][1] + y]
                        ctx.lineTo(tank.size * (w[0] * cos - w[1] * sin), tank.size * (w[1] * cos + w[0] * sin))
                    }
                    ctx.lineTo(tank.size * s[0], tank.size * s[1])
                }
                ctx.fill()
                ctx.stroke()
                ctx.closePath()
            }
        },
        drawTank: function(tank, selectedBarrel) {
            let transform = ctx.getTransform()
            let color = render.getRadiantColor(tank.color, tank.radiant)
            tank.renderColor = color
            if(tank.damageFlash > 0.05) {
                color = render.lighten(color, tank.damageFlash * (60 + 5 * (2 * Math.random() - 1)))
            }
            if(tank.invincible) {
                color = render.averageColors(color, { r:255, g:255, b:255 }, (1 + Math.sin(render.now / 25)) * 0.1)
            }
            if(tank.isTurret) {
                ctx.translate(tank.x, tank.y)
                ctx.rotate(tank.d)
            } else {
                ctx.translate(tank.x, tank.y)
                ctx.rotate(tank.d)
                render.scaleFade(tank.fadeTime)
            }
            if(tank.outerSize && tank.outerSides >= 0) {
                let s = 0
                if (tank.outerSides && tank.outerSides !== 8 && tank.outerSides !== 4 && tank.outerSides !== 0) {
                    s = Math.PI / tank.outerSides
                }
                render.drawRegularPolygon({
                    sides: tank.outerSides,
                    size: tank.outerSize * tank.size,
                    color: render.spikeColor,
                    d: s
                });
            } if(tank.barrels && tank.barrels[0]) {
                for(let i=0,l=tank.barrels.length;i<l;i++) {
                    let barrel = tank.barrels[i]
                    render.drawBarrel({
                        type: barrel.type,
                        visualType: barrel.visualType,
                        x: -barrel.x * tank.size,
                        y: -barrel.y * tank.size,
                        d: barrel.d,
                        w: barrel.width * tank.size * 2,
                        h: barrel.height * tank.size * 2,
                        v: barrel.v,
                        highlight: (barrel === selectedBarrel ? 1 : 0),
                        tankColor: color,
                        color: barrel.color,
                        colorAverage: barrel.colorAverage
                    })
                }
            }
            if(tank.visualElements) {
                for(let i=0,l=tank.visualElements.length;i<l;i++) {
                    let element = tank.visualElements[i]
                    if(element.renderWithBarrels) {
                        render.drawElement(element, tank, color)
                    }
                }
            }
            if(tank.weaponVisualElements) {
                for(let i=0,l=tank.weaponVisualElements.length;i<l;i++) {
                    let element = tank.weaponVisualElements[i]
                    if(element.renderWithBarrels) {
                        render.drawElement(element, tank, color)
                    }
                }
            }
            if(true) {
                if(tank.weaponTurrets && tank.weaponTurrets[0]) {
                    for(let i=0,l=tank.weaponTurrets.length;i<l;i++) {
                        let turret = tank.weaponTurrets[i], turretData = {}
                        if(turret.id >= 0) {
                            turretData = tank.turretData[turret.id] || {}
                        }
                        render.drawTank({
                            x: turret.x * tank.size,
                            y: -turret.y * tank.size,
                            d: -tank.d + (turretData.d || 0),
                            size: turret.size * tank.size * 0.5,
                            color: render.barrelColor,
                            radiant: 0,
                            sides: turret.sides || 0,
                            isTurret: true,
                            barrels: turret.barrels
                        })
                    }
                }
            }
            render.drawRegularPolygon({
                sides: tank.sides,
                size: tank.size,
                color: color,
                d: (tank.sides !== 8 && tank.sides !== 4 && tank.sides !== 0) ? Math.PI / tank.sides : 0
            });
            if(tank.visualElements) {
                for(let i=0,l=tank.visualElements.length;i<l;i++) {
                    let element = tank.visualElements[i]
                    if(!element.renderWithBarrels) {
                        render.drawElement(element, tank, color)
                    }
                }
            }
            if(true) {
                if(tank.turrets && tank.turrets[0]) {
                    for(let i=0,l=tank.turrets.length;i<l;i++) {
                        let turret = tank.turrets[i], turretData = {}
                        if(turret.id >= 0) {
                            turretData = tank.turretData[turret.id] || {}
                        }
                        render.drawTank({
                            x: turret.x * tank.size,
                            y: -turret.y * tank.size,
                            d: -tank.d + (turretData.d || 0),
                            size: turret.size * tank.size * 0.5,
                            color: render.barrelColor,
                            radiant: 0,
                            sides: turret.sides || 0,
                            isTurret: true,
                            barrels: turret.barrels
                        })
                    }
                } if(tank.auras && tank.auras[0]) {
                    for(let i=0,l=tank.auras.length;i<l;i++) {
                        let aura = tank.auras[i], size = aura.size * tank.size
                        let d = (aura.rotate ? 0 : -tank.d) + (aura.d || 0)
                        render.drawRegularPolygon({
                            sides: aura.sides,
                            size: size,
                            color: render.barrelColor,
                            d: d,
                            x: aura.x * tank.size,
                            y: -aura.y * tank.size
                        });
                        render.drawRegularPolygon({
                            sides: aura.innerSides,
                            size: aura.innerSize * size,
                            color: render.averageColors(aura.color, render.spikeColor, tank.passiveFade),
                            d: d,
                            x: aura.x * tank.size,
                            y: -aura.y * tank.size
                        });
                    }
                }
            }
            if(tank.weaponVisualElements) {
                for(let i=0,l=tank.weaponVisualElements.length;i<l;i++) {
                    let element = tank.weaponVisualElements[i]
                    if(!element.renderWithBarrels) {
                        render.drawElement(element, tank, color)
                    }
                }
            }
            if(true) {
                if(selectedBarrel) {
                    let barrel = selectedBarrel
                    render.drawBarrel({
                        type: barrel.type,
                        visualType: barrel.visualType,
                        x: -barrel.x * tank.size,
                        y: -barrel.y * tank.size,
                        d: barrel.d,
                        w: barrel.width * tank.size * 2,
                        h: barrel.height * tank.size * 2,
                        v: barrel.v,
                        highlight: 2,
                        tankColor: color,
                        color: barrel.color,
                        colorAverage: barrel.colorAverage
                    })
                }
            }
            ctx.setTransform(transform)
        },
        drawAuras: function(tank, k) {
            let transform = ctx.getTransform()
            let sin = Math.sin(tank.d)
            let cos = Math.cos(tank.d)
            render.scaleFade(tank.fadeTime, false)
            if(tank.auras && tank.auras[0]) {
                for(let i=0,l=tank.auras.length;i<l;i++) {
                    let aura = tank.auras[i]
                    let auraX = tank.x + tank.size * (aura.x * cos + aura.y * sin)
                    let auraY = tank.y + tank.size * (aura.x * sin - aura.y * cos)
                    let size = aura.auraSize * tank.size
                    if(!tank.passive) {
                        let particles = render.round(render.particles * size * 0.003)
                        for(let u=0;u<particles;u++) {
                            let a = Math.random() * 2 * Math.PI
                            let sin = Math.sin(a), cos = Math.cos(a)
                            let r = Math.random()
                            let m = Math.random() * 2 * Math.PI
                            let msin = Math.sin(m), mcos = Math.cos(m)
                            r = (1 - r * r) * (size - 5)
                            let x = auraX + sin * r, y = auraY + cos * r
                            render.particlesOver.push(render.createParticle({
                                ox: x,
                                oy: y,
                                nx: x + msin * 10,
                                ny: y + mcos * 10,
                                size: 5,
                                d: 1 / 20,
                                fade: 10,
                                color: aura.color,
                                maxAlpha: 0.2
                            }))
                        }
                    }
                    let d = (aura.rotate ? tank.d : 0) + (aura.d || 0)
                    render.drawRegularPolygon({
                        sides: aura.innerSides,
                        size: size,
                        color: render.averageColors(aura.color, render.passiveColor, tank.passiveFade),
                        alpha: render.slide(aura.alpha, 0.1, tank.passiveFade),
                        x: auraX,
                        y: auraY,
                        d: d,
                    });
                    if(render.darkness > 0 && k) {
                        let r = k * 1.5
                        render.darknessPolygon({
                            x: auraX,
                            y: auraY,
                            size: size * r + 5,
                            sides: aura.innerSides,
                            d: d,
                            alpha: 1 - tank.passiveFade
                        }, true)
                        r *= 2
                        render.darknessPolygon({
                            x: auraX,
                            y: auraY,
                            size: size * r + 5,
                            sides: aura.innerSides,
                            d: d,
                            alpha: 0.15 * (1 - tank.passiveFade)
                        }, true)
                    }
                }
            }
            ctx.setTransform(transform)
        },
        slide: function(a, b, c) {
            return (a + (b - a) * c)
        },
        announcements: [],
        addAnnouncement: function(text, duration) {
            let now = performance.now()
            render.announcements.push({
                showTime: now,
                removeTime: now + duration,
                text: text
            })
        },
        healthBarWidth: 12,
        drawHealthBar: function(object) {
            object.health = util.average(object.health, object._health, 4)
            if(object.health <= 0.99) {
                object.healthBarFade = util.average(object.healthBarFade, 1, 5)
            } else {
                object.healthBarFade = util.average(object.healthBarFade, 0, 5)
            }
            if(object.healthBarFade > 0.02 && object.renderColor) {
                let fade = object.healthBarFade
                let alpha = 1 - (1 - fade) * (1 - fade)
                let m = render.camera.size > 1 ? 1 + (render.camera.size - 1) * 0.5 : render.camera.size
                let r = render.healthBarWidth * m
                let x = object.x
                let y = object.y + object.size * 1.025 + r + 5
                let w = object.size * fade
                ctx.lineWidth = r
                ctx.lineCap = 'round'
                ctx.strokeStyle = `rgba(0, 0, 0, ${alpha})`
                ctx.beginPath()
                ctx.moveTo(x - w, y)
                ctx.lineTo(x + w, y)
                ctx.stroke()
                ctx.closePath()
                ctx.lineWidth = r * 0.5
                let color = {
                    r: object.renderColor.r < 60 ? 60 : object.renderColor.r,
                    g: object.renderColor.g < 60 ? 60 : object.renderColor.g,
                    b: object.renderColor.b < 60 ? 60 : object.renderColor.b
                }
                ctx.strokeStyle = render.rgb(color, alpha * 0.2)
                ctx.beginPath()
                ctx.moveTo(x - w, y)
                ctx.lineTo(x + w, y)
                ctx.stroke()
                ctx.closePath()
                ctx.strokeStyle = render.rgb(color, alpha)
                ctx.beginPath()
                ctx.moveTo(x - w, y)
                ctx.lineTo(x + w * (object.health * 2 - 1), y)
                ctx.stroke()
                ctx.closePath()
            }
        },
        reset: function() {
            render.camera.zoom = 0
            render.camera._zoom = 1
            game.data.tanks = []
            game.data.me = false
            game.data.polygons = []
            game.data.walls = []
            game.data.wormholes = {}
            game.data.bullets = []
            game.data.bases = []
            page.leaderboard.reset()
            for(let i=0;i<8;i++) {
                page.statBars[i](0)
            }
            game.upgrades = [0, 0, 0, 0, 0, 0, 0, 0]
        },
        drawBullet: function(bullet) {
            let tank = {
                auras: bullet.auras || [],
                barrels: bullet.barrels || [],
                color: bullet.color,
                d: bullet.d,
                fadeTime: bullet.fadeTime,
                passive: false,
                passiveFade: 0,
                radiant: bullet.radiant,
                sides: bullet.sides,
                size: bullet.size,
                turretData: bullet.turretData || {},
                barrelData: bullet.barrelData || {},
                turrets: bullet.turrets || {},
                weaponTurrets: bullet.weaponTurrets || {},
                visualElements: bullet.visualElements,
                weaponVisualElements: bullet.weaponVisualElements,
                outerSides: bullet.outerSides,
                outerSize: bullet.outerSize,
                x: bullet.x,
                y: bullet.y,
                _barrels: bullet._barrels || []
            }
            render.drawTank(tank)
            bullet.renderColor = tank.renderColor
        },
        inFOV: function(obj) {
            let w = render.width * 0.5 * render.camera.size
            let h = render.height * 0.5 * render.camera.size
            let ow = obj.w || obj.size
            let oh = obj.h || obj.size
            return (obj.x - ow < render.camera.x + w && obj.y - oh < render.camera.y + h && obj.x + ow > render.camera.x - w && obj.y + oh > render.camera.y - h)
        },
        wallCount: 0,
        drawWall: function(wall) {
            if(render.inFOV(wall)) {
                render.wallCount ++
                if(wall.color) {
                    ctx.fillStyle = render.rgb(wall.color, 0.25)
                } else {
                    ctx.fillStyle = render.rgb(render.wallColor, render.wallOpacity)
                }
                ctx.fillRect(wall.x - wall.w, wall.y - wall.h, wall.w * 2, wall.h * 2)
            }
        },
        typing: false,
        frames: [],
        getTankColor: function(team, b) {
            let sides = b
            b = tankData.bodies[b]
            if(b && !(b >= 0)) { sides = b.sides }
            if(team === 5) {
                if(sides >= 3) {
                    return render.getPolygonColor(sides)
                } else {
                    return { r:255, g:255, b:255 }
                }
            } else {
                return render.teamColors[team]
            }
        },
        drawFrame: function() {
            render.serverSelectColor = render.averageColors(render.serverSelectColor, render.teamColors[render.selection], 0.1)
            serverSelect.style.background = render.rgb(render.serverSelectColor)
            serverSelectLower.style.background = render.rgb(render.darken(render.serverSelectColor))
            render.particleCount = 0
            render.wallCount = 0
            render.polygonCount = 0
            let a = 70
            let v = Math.max(render.grid.background.r, render.grid.background.g, render.grid.background.b)
            let q = v > 70 ? v - 70 : 0
            render.wallOpacity = v > 12 ? (v < 30 ? 1 - 0.7 * (v - 12) / 18 : 0.3) : 1
            render.wallColor = {
                r: q,
                g: q,
                b: q
            }
            let upgrades = 0;
            for(let i=0;i<8;i++) {
                upgrades += game.upgrades[i]
            }
            if(page.overlay === 2) {
                game.override = false
            } else {
                game.override = game.splash
                render.camera.zoom = 0
                render.camera._zoom = 1
                game.override.update()
                render.camera._size = render.camera.size = 1
            }
            render.camera.size = util.average(render.camera.size, render.camera._size * render.camera._zoom, 15)
            if(game.animations._part < game.animations.part) {
                game.animations._part = util.average(game.animations._part, game.animations.part, 5)
            } else {
                game.animations._part = game.animations.part
            }
            if(game.animations._whole < game.animations.whole) {
                game.animations._whole = util.average(game.animations._whole, game.animations.whole, 5)
            } else {
                game.animations._whole = game.animations.whole
            }
            if(game.animations._score < game.animations.score) {
                game.animations._score = util.average(game.animations._score, game.animations.score, 5)
            } else {
                game.animations._score = game.animations.score
            }
            game.animations._tankLevelBar = util.average(game.animations._tankLevelBar, game.animations.tankLevelBar, 5)
            let radiantMultiplier = render.getRadiantMultiplier(game.data.me.radiant)
            tankLevelDisplay.innerHTML = `${render.formatScore(radiantMultiplier * game.animations._part)} / ${render.formatScore(radiantMultiplier * game.animations._whole)}`
            tankLevelBar.style.width = `${game.animations._tankLevelBar}px`
            tankScoreDisplay.innerHTML = `Score: ${render.formatScore(radiantMultiplier * game.animations._score)}`
            const overriding = (game.override ? true : false)
            const data = overriding ? game.override : game.data
            let dt = (-render.now + (render.now = performance.now()))
            render.flash = (render.now % 300 < 150)
            if(render.now - render.lastRadiant > 200) {
                render.lastRadiant = render.now
                render.radiantParticles = true
            } else {
                render.radiantParticles = false
            }
            util.powers = {}
            render.f = dt / 1000 * 60
            render.frames.push(render.now + 1000)
            let l = 0
            while(render.frames[l] < render.now) { l ++ }
            render.frames.splice(0, l)
            l = 0
            while(game.packetSizes[l] && game.packetSizes[l][0] < render.now) { l ++ }
            game.packetSizes.splice(0, l)
            let k = dt / 20
            let idTanks = {}
            for(let i=game.data.tanks.length-1;i>=0;i--) {
                let tank = game.data.tanks[i]
                idTanks[tank.id] = tank
                render.updateTank(tank, k, dt)
            }
            for(let i=game.data.bullets.length-1;i>=0;i--) {
                render.updateBullet(game.data.bullets[i], dt)
            }
            let idPolygons = {}
            for(let i=game.data.polygons.length-1;i>=0;i--) {
                let polygon = game.data.polygons[i]
                idPolygons[polygon.id] = polygon
                render.updatePolygon(polygon, dt)
            }
            let showUpgrades = false
            if(game.data.me && !overriding) {
                let weapon = game.data.me.weapon
                if(weapon in tankData.weaponUpgradeMap && (render.now - page.weaponUpgradeTimer > 1000 || weapon !== page.lastWeapon)) {
                    let _ = tankData.weaponUpgradeMap[weapon]
                    if(_ && game.data.me.level >= _.level && _.upgrades[0]) {
                        if(page.currentWeaponUpgrades) {
                            if(page.currentWeaponUpgrades.label !== weapon) {
                                page.currentWeaponUpgrades.remove()
                                page.createWeaponUpgrades(_.upgrades, weapon)
                            }
                        } else {
                            page.createWeaponUpgrades(_.upgrades, weapon)
                        }
                    } else if(page.currentWeaponUpgrades) {
                        page.currentWeaponUpgrades.remove()
                    }
                } else if(page.currentWeaponUpgrades) {
                    page.currentWeaponUpgrades.remove()
                }
                let body = game.data.me.body
                if(body in tankData.bodyUpgradeMap && (render.now - page.bodyUpgradeTimer > 1000 || body !== page.lastBody)) {
                    let _ = tankData.bodyUpgradeMap[body]
                    if(_ && game.data.me.level >= _.level && _.upgrades[0]) {
                        if(page.currentBodyUpgrades) {
                            if(page.currentBodyUpgrades.label !== body) {
                                page.currentBodyUpgrades.remove()
                                page.createBodyUpgrades(_.upgrades, body)
                            }
                        } else {
                            page.createBodyUpgrades(_.upgrades, body)
                        }
                    } else if(page.currentBodyUpgrades) {
                        page.currentBodyUpgrades.remove()
                    }
                } else if(page.currentBodyUpgrades) {
                    page.currentBodyUpgrades.remove()
                }
                let unusedUpgrades = game.data.me.level - upgrades - 1
                let _b = tankData.bodies[game.data.me.body]
                if(_b && _b.celestial) {
                    unusedUpgrades -= 14
                }
                if(unusedUpgrades >= render.unusedUpgrades) {
                    render.unusedUpgrades = util.average(render.unusedUpgrades, unusedUpgrades, 10)
                    let display = Math.round(render.unusedUpgrades)
                    if(display > 0) {
                        page.setStatDisplay(display)
                        showUpgrades = true
                    } else {
                        page.setStatDisplay(0)
                        showUpgrades = false
                    }
                } else {
                    render.unusedUpgrades = unusedUpgrades
                    if(unusedUpgrades > 0) {
                        page.setStatDisplay(Math.floor(unusedUpgrades))
                        showUpgrades = true
                    } else {
                        showUpgrades = false
                    }
                }
                if(game.data.me.name !== page.state.tankName) {
                    tankName.innerHTML = render.formatForHTML(game.data.me.name)
                    page.state.tankName = game.data.me.name
                }
                let tankLevelText = `Level ${game.data.me.level} ${game.data.me.className}`
                if(tankLevel.innerHTML !== tankLevelText) {
                    tankLevel.innerHTML = tankLevelText
                }
                render.camera.targetX = data.me.x
                render.camera.targetY = data.me.y
                render.camera.x = data.me.x
                render.camera.y = data.me.y
                render.camera._size = Math.sqrt(data.me.size / 75)
                if(data.me.weapon in tankData.weapons) {
                    render.camera._size *= tankData.weapons[data.me.weapon].cameraSizeMultiplier || 1
                } if(data.me.body in tankData.bodies) {
                    render.camera._size *= tankData.bodies[data.me.body].cameraSizeMultiplier || 1
                }
                if(game.autoSpin === false) {
                    game.data.me.d = (game.spinLock === false ? util.mouse.d + (game.reverse ? Math.PI : 0) : game.spinLock)
                } else {
                    game.autoSpin += dt * 0.00075
                    if(game.autoSpin >= 2 * Math.PI) {
                        game.autoSpin -= 2 * Math.PI
                    }
                    game.data.me.d = game.autoSpin
                }
                let typing = (document.activeElement === chat)
                if(typing) {
                    game.data.me.typing = true
                } if(typing !== render.typing) {
                    render.typing = typing
                    game.send(game.currentServer.ws, ['typing', typing ? true : false])
                }
                game.data.me.passive = game.passive
                game.data.me._d = false
                let d = game.data.me.d / Math.PI * 100
                if(d !== util.mouse.sent) {
                    util.mouse.sent = d
                    game.send(game.currentServer.ws, ['d', d])
                }
                let firing = ((util.mouse.down || game.autoFire || game.keys[32]) ? 1 : 0) + ((util.mouse.right || game.keys[16]) ? 2 : 0)
                if(firing !== util.mouse.lastSent) {
                    util.mouse.lastSent = firing
                    game.send(game.currentServer.ws, ['firing', firing])
                }
                let gameX = Math.round(util.mouse.screenX / window.innerWidth * render.width * render.camera.size)
                let gameY = Math.round(util.mouse.screenY / window.innerHeight * render.height * render.camera.size)
                let dist = [game.controlPosition[0] - gameX, game.controlPosition[1] - gameY]
                dist = Math.sqrt(dist[0] * dist[0] + dist[1] * dist[1])
                if(dist > 5) {
                    game.controlPosition = [gameX, gameY]
                    game.send(game.currentServer.ws, ['controlPosition', [gameX, gameY]])
                }
            }
            statUpgradesRight.style.right = statUpgradesLeft.style.left = (showUpgrades ? '10px' : '-400px')
            render.camera.x = util.average(render.camera.x, render.camera.targetX, 25)
            render.camera.y = util.average(render.camera.y, render.camera.targetY, 25)
            k = k * 0.2
            if(k > 2) { k = 2 }
            if(game.lerp < 1.1) {
                game.lerp += k
            } else {
                game.lerp += k * (1.25 - game.lerp / 1.1)
                if(game.lerp > 1.25) { game.lerp = 1.25 }
            }
            let t = render.now / 500
            render.radiantColor.r = 127.5 * (1 + Math.sin(t))
            render.radiantColor.g = 127.5 * (1 + Math.sin(t + 2 * Math.PI / 3))
            render.radiantColor.b = 127.5 * (1 + Math.sin(t + 4 * Math.PI / 3))
            let tc = render.averageColors(render.radiantColor, { r:255, g:255, b:255 }, 0.5)
            render.radiantStyle.innerHTML = `
  .radiantColor {
    color: ${render.rgb(tc)};
  }
  `
            let bc = render.averageColors(render.radiantColor, { r:100, g:100, b:100 }, 0.5)
            title.style.color = render.rgb(bc)
            title.style.webkitTextStrokeColor = render.rgb(render.darken(bc, 60))
            ctx.setTransform(render.defaultTransform)
            render.ctx.hudCanvas.setTransform(render.defaultTransform)
            render.ctx.darknessCanvas.setTransform(render.defaultTransform)
            let w = render.width * render.camera.size * 0.5
            let h = render.height * render.camera.size * 0.5
            ctx.clearRect(-w, -h, w * 2, h * 2)
            let w0 = w / render.camera.size
            let h0 = h / render.camera.size
            render.ctx.hudCanvas.clearRect(-w0, -h0, w0 * 2, h0 * 2)
            let s = 1 / render.camera.size
            ctx.scale(s, s)
            ctx.translate(-render.camera.x, -render.camera.y)
            let transform = ctx.getTransform()
            ctx.fillStyle = render.rgb(render.grid.background)
            ctx.fillRect(render.camera.x - w, render.camera.y - h, w * 2, h * 2)
            let gridWidth = 5 / render.camera.size
            if(gridWidth < 1) {
                ctx.globalAlpha = gridWidth * gridWidth
            }
            ctx.fillStyle = render.grid.pattern
            ctx.fillRect(render.camera.x - w, render.camera.y - h, w * 2, h * 2)
            if(ctx.globalAlpha < 1) { ctx.globalAlpha = 1 }
            let particlesUnder = render.particlesUnder.length
            for(let i=particlesUnder-1;i>=0;i--) {
                render.drawParticle(render.particlesUnder[i], render.particlesUnder, render.f)
            }
            ctx.fillStyle = render.rgb(render.wallColor, render.wallOpacity)
            ctx.beginPath()
            let j = h - render.camera.y - data.mapSize
            if(j > 0) {
                ctx.rect(render.camera.x - w, render.camera.y - h, w * 2, j)
            }
            j = w - render.camera.x - data.mapSize
            if(j > 0) {
                ctx.rect(render.camera.x - w, render.camera.y - h, j, h * 2)
            }
            j = h + render.camera.y - data.mapSize
            if(j) {
                ctx.rect(render.camera.x - w, render.camera.y + h - j, w * 2, j)
            }
            j = w + render.camera.x - data.mapSize
            if(j) {
                ctx.rect(render.camera.x + w - j, render.camera.y - h, j, h * 2)
            }
            ctx.fill()
            ctx.closePath()
            j = true
            let lengthWalls = data.walls.length, lengthGates = data.gates.length
            let lengthTanks = data.tanks.length, lengthBullets = data.bullets.length, lengthPolygons = data.polygons.length
            for(let i=0;i<lengthTanks;i++) {
                let tank = data.tanks[i]
                render.drawRadiantAura(tank, true, true)
            }
            for(let i=0;i<lengthBullets;i++) {
                let bullet = data.bullets[i]
                render.drawRadiantAura(bullet, true, true, 0.1)
            }
            for(let i=0;i<lengthPolygons;i++) {
                render.drawRadiantAura(data.polygons[i])
            } if(ctx.globalAlpha < 1) { ctx.globalAlpha = 1 }
            for(let i in data.wormholes) {
                render.drawWormhole(data.wormholes[i])
            }
            for(let i=0;i<lengthWalls;i++) {
                render.drawWall(data.walls[i])
            }
            for(let i=0;i<lengthGates;i++) {
                render.drawGate(data.gates[i])
            }
            for(let i=0;i<lengthPolygons;i++) {
                let polygon = data.polygons[i]
                if(render.inFOV(polygon)) {
                    render.polygonCount ++
                    render.drawPolygon(polygon)
                } else {
                    let color = polygon.color;
                    if (polygon.radiant) {
                        color = render.getRadiantColor(color, polygon.radiant)
                    }
                    polygon.renderColor = color
                }
            }
            for(let i=0;i<lengthTanks;i++) {
                render.drawTank(data.tanks[i])
            }
            for(let i=0;i<lengthBullets;i++) {
                render.drawBullet(data.bullets[i])
            } if(ctx.globalAlpha < 1) { ctx.globalAlpha = 1 }
            ctx = render.ctx.hudCanvas
            ctx.setTransform(transform)
            for(let i=0;i<lengthTanks;i++) {
                let tank = data.tanks[i]
                render.scaleFade(tank.fadeTime, false)
                render.drawHealthBar(tank)
            }
            for(let i=0;i<lengthPolygons;i++) {
                let polygon = data.polygons[i]
                render.scaleFade(polygon.fadeTime, false)
                if(game.debug) {
                    text.drawText(render.getFullPolygonName(polygon)+" (p"+polygon.id+")", polygon.x, polygon.y - polygon.size + 10 * render.camera.size, 30, render.camera.size)
                }
                render.drawHealthBar(polygon)
            }
            for(let i=0;i<lengthTanks;i++) {
                let tank = data.tanks[i]
                let y = 20
                render.scaleFade(tank.fadeTime, false)
                if(game.debug) {
                    y -= 30
                    text.drawText(tank.className+" (t"+tank.id+")", tank.x, tank.y - tank.size - y * render.camera.size, 30, render.camera.size)
                    y += 30
                }
                text.drawText("lv. "+tank.level, tank.x, tank.y - tank.size - y * render.camera.size, 30, render.camera.size)
                y += 30
                if(tank.name) {
                    text.drawText(tank.name, tank.x, tank.y - tank.size - y * render.camera.size, 50, render.camera.size)
                    y += 50
                }
            }
            for(let i=0;i<lengthTanks;i++) {
                let tank = data.tanks[i]
                let chatMessages = tank.chat, typing = tank.typingFade
                tank.typingFade = util.average(tank.typingFade, tank.typing ? 1 : 0, 5)
                if(chatMessages[0] || typing > 0) {
                    let first = true
                    render.scaleFade(tank.fadeTime, false)
                    let y = 130
                    if(typing > 0.01 || tank.typing) {
                        text.drawTextBox('...', tank.x, tank.y - tank.size - (y - 25 * (1 - typing) * (1 - typing)) * render.camera.size, 36, render.camera.size, typing, typing)
                        y += 63 * typing
                        if(tank.typing) {
                            first = false
                        }
                    } else {
                        tank.typingFade = 0
                    }
                    for(let i=chatMessages.length - 1;i>=0;i--) {
                        let message = chatMessages[i]
                        let timeShown = render.now - message[1]
                        let timeLeft = message[2] - render.now
                        let alpha = 1, offsetY = 0
                        if(timeShown < 250) {
                            alpha = 1 - (timeShown / 250)
                            alpha = 1 - alpha * alpha
                            offsetY = -25 * (alpha - 1) * (1 - alpha)
                        } else if(timeLeft < 250) {
                            alpha = timeLeft / 250
                            offsetY = 25 * (alpha - 1) * (1 - alpha)
                            alpha = alpha * alpha
                        }
                        if(timeLeft <= 0) {
                            chatMessages.slice(i, 1)
                        } else {
                            if(first) {
                                message[3] = util.average(message[3], 1, 3)
                                first = false
                            } else if(message[3] > 0.01) {
                                message[3] = util.average(message[3], 0, 3)
                            } else {
                                message[3] = 0
                            }
                            text.drawTextBox(message[0], tank.x, tank.y - tank.size - (y - offsetY) * render.camera.size, 36, render.camera.size, alpha, message[3])
                            y += 63 * alpha
                        }
                    }
                }
            } if(ctx.globalAlpha < 1) { ctx.globalAlpha = 1 }
            ctx.setTransform(render.defaultTransform)
            if(game.data.me) {
                let color = render.rgb(game.data.me.renderColor)
                tankScoreBar.style.background = color
                tankLevelBar.style.background = color
            }
            for(let id in page.leaderboard.entries) {
                page.updateEntry(page.leaderboard.entries[id], idTanks, idPolygons)
            }
            for(let i=page.leaderboard.removedEntries.length-1;i>=0;i--) {
                page.updateEntry(page.leaderboard.removedEntries[i], idTanks, idPolygons)
            }
            ctx = render.ctx.mapCanvas
            ctx.resetTransform()
            ctx.clearRect(0, 0, 500, 500)
            ctx.fillStyle = render.rgb(render.grid.background)
            ctx.fillRect(0, 0, 500, 500)
            ctx.translate(250, 250)
            if(!render.hideNames || window.$admin) {
                let m = 250 / data.mapSize
                let mapTransform = ctx.getTransform()
                for(let i=0,l=data.walls.length;i<l;i++) {
                    let wall = data.walls[i]
                    if(wall.color) {
                        ctx.fillStyle = render.rgb(wall.color, 0.25)
                    } else {
                        ctx.fillStyle = render.rgb(render.wallColor, render.wallOpacity)
                    }
                    ctx.fillRect(m * (wall.x - wall.w), m * (wall.y - wall.h), m * wall.w * 2, m * wall.h * 2)
                }
                ctx.fillStyle = 'rgb(0, 0, 0)'
                let me = game.data.me || { x:0, y:0 }
                for(let i=data.tanks.length-1;i>=0;i--) {
                    let tank = data.tanks[i]
                    let dx = tank.x - me.x
                    let dy = tank.y - me.y
                    let d = Math.sqrt(dx * dx + dy * dy)
                    let o = 1
                    let r = tank.team === game.data.me.team ? 800 : 250
                    if(d > r && !window.$admin) {
                        o = (d + r) / (d) - 1
                        o = o * o
                    }
                    ctx.fillStyle = render.rgb(render.averageColors(tank.renderColor, { r:0, g:0, b:0 }, 0.5), o)
                    ctx.translate(tank.x * m, tank.y * m)
                    ctx.rotate(tank.d)
                    ctx.beginPath()
                    ctx.moveTo(-9, -12)
                    ctx.lineTo(9, -12)
                    ctx.lineTo(0, 20)
                    ctx.lineTo(-9, -12)
                    ctx.fill()
                    ctx.closePath()
                    ctx.setTransform(mapTransform)
                }
                for(let i in data.wormholes) {
                    let wormhole = data.wormholes[i]
                    if(wormhole.type === 2 || wormhole.type === 1) {
                        ctx.fillStyle = render.rgb(render.averageColors(render.radiantColor, { r:0, g:0, b:0 }, 0.5))
                    } else {
                        ctx.fillStyle = render.rgb(render.averageColors(wormhole.mapColor, { r:255, g:255, b:255 }, 0.5 - wormhole.fadeTime * 0.5))
                    }
                    ctx.beginPath()
                    ctx.ellipse(wormhole.x * m, wormhole.y * m, 7, 7, 0, 0, 2 * Math.PI)
                    ctx.fill()
                    ctx.closePath()
                }
            }
            if(render.darkness > 0) {
                ctx = render.ctx.darknessCanvas
                let _0 = (Math.sin(render.now / 2500) + 1) / 2
                ctx.setTransform(render.defaultTransform)
                ctx.clearRect(-w0, -h0, 2 * w0, 2 * h0)
                ctx.scale(s, s)
                ctx.translate(-render.camera.x, -render.camera.y)
                ctx = render.ctx.gameCanvas
                render.ctx.darknessCanvas.fillStyle = 'rgb(0, 0, 0)'
                let darknessTransform = render.ctx.darknessCanvas.getTransform()
                for(let i=0;i<lengthGates;i++) {
                    let gate = data.gates[i]
                    if(gate.type === 1) {
                        render.ctx.darknessCanvas.translate(gate.x, gate.y)
                        render.ctx.darknessCanvas.rotate(gate.d * Math.PI / 2)
                        render.ctx.darknessCanvas.beginPath();
                        render.ctx.darknessCanvas.rect(-30, -gate.length, 60, gate.length * 2);
                        render.ctx.darknessCanvas.fill();
                        render.ctx.darknessCanvas.closePath();
                        render.ctx.darknessCanvas.setTransform(darknessTransform)
                    }
                }
                if(data.me) {
                    let sides = 0//data.me.outerSides >= 0 ? data.me.outerSides : data.me.sides
                    render.darknessBarrels(data.me)
                    let size = data.me.size * 2.6
                    render.darknessPolygon({
                        x: data.me.x,
                        y: data.me.y,
                        size: size + 20 + _0 * 50,
                        sides: sides,
                        d: data.me.d,
                        alpha: 1
                    }, true)
                    render.darknessPolygon({
                        x: data.me.x,
                        y: data.me.y,
                        size: size * 1.5 + 20 + _0 * 50,
                        sides: sides,
                        d: data.me.d,
                        alpha: 0.5
                    }, true)
                    render.darknessPolygon({
                        x: data.me.x,
                        y: data.me.y,
                        size: size * 2 + 20 + _0 * 50,
                        sides: sides,
                        d: data.me.d,
                        alpha: 0.2
                    }, true)
                }
                let drawAura = function(polygon, rotate) {
                    if(polygon.radiant > 0) {
                        let particle = !('fadeTime' in polygon)
                        let alpha = particle ? (polygon.alpha || 0) : (polygon.fadeTime < 1 ? polygon.fadeTime : 2 - polygon.fadeTime)
                        let sides = polygon.outerSides || polygon.sides
                        let layers = particle ? 1 : (polygon.radiant < 3 ? polygon.radiant : 3)
                        for(let i=0;i<layers;i++) {
                            let u = (i % 2 === 0 ? _0 : 1 - _0)
                            render.darknessPolygon({
                                x: polygon.x,
                                y: polygon.y,
                                size: (polygon.size + (particle ? 10 : 100)) * (1 + 0.3 * i + 0.1 * u) * (1 + layers * 0.25),
                                sides: sides,
                                d: polygon.d,
                                alpha: particle ? (polygon.alpha * 0.1) : (0.05 * alpha * (1 - i / 5) * (1 + layers * 1.5))
                            }, rotate)
                        }
                    }
                }
                let _1 = render.now / 2500
                for(let i in data.wormholes) {
                    let wormhole = data.wormholes[i]
                    if(wormhole.type === 2) {
                        render.darknessPolygon({
                            x: wormhole.x,
                            y: wormhole.y,
                            size: wormhole.size * (4 + _0),
                            sides: 4,
                            d: _1,
                            alpha: 1
                        })
                        render.darknessPolygon({
                            x: wormhole.x,
                            y: wormhole.y,
                            size: wormhole.size * (5 + _0),
                            sides: 4,
                            d: _1,
                            alpha: 0.1
                        })
                    } else if(wormhole.type === 1) {
                        render.darknessPolygon({
                            x: wormhole.x,
                            y: wormhole.y,
                            size: wormhole.size * (1.5 + _0),
                            sides: 0,
                            d: _1,
                            alpha: 1
                        })
                        render.darknessPolygon({
                            x: wormhole.x,
                            y: wormhole.y,
                            size: wormhole.size * (3 + _0),
                            sides: 0,
                            d: _1,
                            alpha: 0.1
                        })
                    } else {
                        render.darknessPolygon({
                            x: wormhole.x,
                            y: wormhole.y,
                            size: wormhole.size * (1.5 + _0 * 0.5),
                            sides: 0,
                            d: _1,
                            alpha: 0.1
                        })
                    }
                }
                j = false
                for(let i=render.particlesUnder.length-1;i>=0;i--) {
                    drawAura(render.particlesUnder[i])
                }
                for(let i=0;i<lengthTanks;i++) {
                    let tank = data.tanks[i]
                    drawAura(tank, true)
                    render.drawAuras(tank, 1.1 + _0 * 0.1)
                }
                for(let i=0;i<lengthBullets;i++) {
                    let bullet = data.bullets[i]
                    drawAura(bullet, true)
                    render.drawAuras(bullet, 1.1 + _0 * 0.1)
                } if(ctx.globalAlpha < 1) { ctx.globalAlpha = 1 }
                for(let i=0;i<lengthPolygons;i++) {
                    drawAura(data.polygons[i])
                }
                let particlesOver = render.particlesOver.length
                for(let i=particlesOver-1;i>=0;i--) {
                    render.drawParticle(render.particlesOver[i], render.particlesOver, render.f)
                }
                ctx.setTransform(render.defaultTransform)
                ctx.globalAlpha = render.hudOpacity
                ctx.drawImage(hudCanvas, -w0, -h0, w0 * 2, h0 * 2)
                render.ctx.hudCanvas.clearRect(-w0, -h0, w0 * 2, h0 * 2)
                render.ctx.hudCanvas.fillStyle = `rgba(0, 0, 0, ${render.darkness})`
                render.ctx.hudCanvas.fillRect(-w0, -h0, w0 * 2, h0 * 2)
                render.ctx.hudCanvas.globalCompositeOperation = 'destination-out'
                render.ctx.hudCanvas.drawImage(darknessCanvas, -w0, -h0, w0 * 2, h0 * 2)
                render.ctx.hudCanvas.globalCompositeOperation = 'source-over'
                ctx.globalAlpha = 1
                ctx.drawImage(hudCanvas, -w0, -h0, w0 * 2, h0 * 2)
                ctx = render.ctx.hudCanvas
                ctx.clearRect(-w0, -h0, w0 * 2, h0 * 2)
            } else {
                ctx = render.ctx.gameCanvas
                for(let i=0;i<lengthTanks;i++) {
                    render.drawAuras(data.tanks[i], 0)
                }
                for(let i=0;i<lengthBullets;i++) {
                    render.drawAuras(data.bullets[i], 0)
                } if(ctx.globalAlpha < 1) { ctx.globalAlpha = 1 }
                let particlesOver = render.particlesOver.length
                for(let i=particlesOver-1;i>=0;i--) {
                    render.drawParticle(render.particlesOver[i], render.particlesOver, render.f)
                }
                ctx = render.ctx.hudCanvas
            }
            k = 62 - render.height / 2
            for(let i=render.announcements.length-1;i>=0;i--) {
                let announcement = render.announcements[i]
                let timeLeft = announcement.removeTime - render.now
                let timeShown = render.now - announcement.showTime
                let alpha = 1, offsetY = 0
                if(timeShown < 250) {
                    alpha = 1 - (timeShown / 250)
                    alpha = 1 - alpha * alpha
                } else if(timeLeft < 250) {
                    alpha = timeLeft / 250
                    offsetY = 25 * (alpha - 1) * (1 - alpha)
                    alpha = alpha * alpha
                }
                if(timeLeft <= 0) {
                    render.announcements.slice(i, 1)
                } else {
                    text.drawTextBox(announcement.text, 0, k + offsetY, 36, 1, alpha)
                    k += 63 * alpha
                }
            }
            ctx = render.ctx.gameCanvas
            let size = [0, 0]
            for(let i=game.packetSizes.length-1;i>=0;i--) {
                let arr = game.packetSizes[i]
                size[arr[2] ? 1 : 0] += arr[1]
            }
            let fps = render.frames.length
            let entries = [
                [`FPS: ${fps}`, (fps - 50) / 10],
                [`Send: ${render.formatPacketSize(size[1])} kb/s`, (1000 - size[1]) / (size[1] > 1000 ? 200 : 750)],
                [`Recieve: ${render.formatPacketSize(size[0])} kb/s`, (15000 - size[0]) / (size[0] > 15000 ? 5000 : 2000)],
                [`Particles Rendered: ${render.particleCount}`],
                [`Walls Rendered: ${render.wallCount}`],
                [`Polygons Rendered: ${render.polygonCount}`],
                [`Tank Count: ${game.data.tanks.length}`],
                [`Polygon Count: ${game.data.polygons.length}`],
            ]
            t = ''
            let _r = []
            let _j = {
                darkness: _r
            }
            if(render.darkness > 0 && j || _j.darkness !== _r) {
                render.drawFrame = function() {}
            }
            for(let i=0,l=entries.length;i<l;i++) {
                let arr = entries[i]
                let h = 0, s = 100, l = 100
                if(arr[1] > 0) {
                    let k = arr[1] < 1 ? arr[1] : 1
                    h = 180 - 40 * k
                    l = 100 - 50 * k
                } else if(arr[1] < 0) {
                    let k = arr[1] > -1 ? arr[1] : -1
                    h = 60 + 60 * k
                    l = 100 + 50 * k
                }
                t += `<div style="color:hsl(${h}, ${s}%, ${l}%)">${arr[0]}</div>`
            }
            debugText.innerHTML = t
            for(let i=page.upgradeList.length-1;i>=0;i--) {
                let upgrades = page.upgradeList[i]
                for(let u in upgrades.buttons) {
                    page.updateUpgradeBox(upgrades.buttons[u])
                }
            }
            ctx = render.ctx.gameCanvas
        },
        loop: function() {
            render.drawFrame()
            requestAnimationFrame(render.loop)
        },
        getTankData: function(w, b) {
            let weapon = tankData.weapons[w] || {}
            let body = tankData.bodies[b] || {}
            let tank = {
                weapon: w,
                body: b,
                x: 0,
                y: 0,
                d: 0,
                size: 45,
                color: render.teamColors[0],
                radiant: 0,
                sides: body.sides || 0,
                outerSides: body.outerSides || 0,
                outerSize: body.outerSize || 0,
                barrels: weapon.barrels || [],
                weaponTurrets: weapon.weaponTurrets || [],
                turrets: body.turrets || [],
                auras: body.auras || [],
                visualElements: body.visualElements || [],
                weaponVisualElements: weapon.weaponVisualElements || [],
                fadeTime: 1,
                passive: false,
                passiveFade: 0,
            }
            return tank
        }
    }
    
    const page = {
        openChangelog: function() {
            changelogFull.style.top = '50%'
            changelogDark.style.opacity = 1
            changelogDark.style.pointerEvents = 'all'
        },
        openTips: function() {
            tips.style.top = '50%'
            tipsDark.style.opacity = 1
            tipsDark.style.pointerEvents = 'all'
        },
        openFeedback: function() {
            contact.style.top = '50%'
            contactDark.style.opacity = 1
            contactDark.style.pointerEvents = 'all'
        },
        state: {
            inGame: false,
            sentConnecting: false,
            scoreDisplay: false,
            levelDisplay: false,
            tankName: false
        },
        setPlayButton: function(show) {
            playMenu.style.opacity = (show ? 1 : 0)
            playMenu.style.pointerEvents = (show ? 'inherit' : 'none')
            connectingSmall.style.opacity = (show ? 0 : 1)
        },
        setLargeConnecting: function(show) {
            connecting.style.opacity = (show ? 1 : 0)
            connecting.style.top = (show ? '50%' : '-175px')
        },
        overlay: 0,
        setOverlay: function(state) {
            page.overlay = state
            overlay1.style.visibility = (state === 2 ? 'visible' : 'hidden')
            overlay2.style.pointerEvents = (state === 0 ? 'inherit' : 'none')
            overlay2.style.visibility = (state === 0 ? 'visible' : 'hidden')
            connecting.style.visibility = (state > 0 ? 'visible' : 'hidden')
            page.setLargeConnecting(state === 1)
            if(state === 1) {
                render.waiting = true
            } else {
                render.waiting = false
            }
        },
        statBars: [],
        setStatDisplay: function(n) {
            statDisplayLeft.innerHTML = 'x' + n
            statDisplayRight.innerHTML = n + 'x'
        },
        createEntry: function(data) {
            let entry = {
                div: document.createElement('div'),
                text: document.createElement('div'),
                bar: document.createElement('div'),
                slide: document.createElement('div'),
                //background: document.createElement('div'),
                canvas: document.createElement('canvas'),
                ctx: false,
                transform: false
            }
            entry.div.className = 'leaderboardEntry'
            entry.div.style.left = '300px'
            entry.bar.className = 'leaderboardBar'
            entry.slide.className = 'leaderboardSlide'
            //entry.background.className = 'leaderboardSlide'
            entry.bar.appendChild(entry.slide)
            entry.text.className = 'leaderboardText'
            entry.canvas.className = 'leaderboardCanvas'
            entry.canvas.width = entry.canvas.height = 80
            entry.ctx = entry.canvas.getContext('2d')
            entry.ctx.translate(40, 40)
            entry.transform = entry.ctx.getTransform()
            leaderboardEntries.appendChild(entry.div)
            entry.div.appendChild(entry.canvas)
            entry.div.appendChild(entry.bar)
            entry.div.appendChild(entry.text)
            return entry
        },
        updateEntry: function(entry, idTanks, idPolygons) {
            let text = ''
            if(render.hideNames && !window.$admin) {
                if(entry.name) {
                    text = entry.name.replace(/\S/g, "?");
                } else {
                    text = '???'
                }
                entry.displayScore = render.getRadiantMultiplier(entry.radiant) * entry.score
            } else if(entry.id < 0) {
                text = '???'
                entry.displayScore = render.getRadiantMultiplier(entry.radiant) * entry.score
            } else {
                if(!entry.name) {
                    text = render.formatScore(entry.displayScore = render.getRadiantMultiplier(entry.radiant) * entry.score)
                } else {
                    text = `${entry.name} - ${render.formatScore(entry.displayScore = render.getRadiantMultiplier(entry.radiant) * entry.score)}`
                }
            }
            if(text !== entry.entry.text.innerHTML) {
                entry.entry.text.innerHTML = text
            }
            ctx = entry.entry.ctx
            ctx.setTransform(entry.entry.transform)
            ctx.clearRect(-40, -40, 80, 80)
            ctx.scale(0.7, 0.7)
            if(entry.type === 'tank') {
                let tank = idTanks[entry.id], color
                if(tank) {
                    color = tank.renderColor
                } else {
                    let data = game.tankData[entry.id]
                    if(!data) {
                        data = {
                            radiant: 0
                        }
                    } else {
                        entry.radiant = data.radiant
                    }
                    color = render.averageColors(render.getTankColor(data.team, data.body), render.radiantColor, data.radiant / (data.radiant + 1))
                }
                entry.entry.slide.style.background = render.rgb(color)
                entry.entry.bar.style.background = render.rgb(render.averageColors(color, { r:0, g:0, b:0 }, 0.8))
                let _tank = {
                    size: 19,
                    x: 0,
                    y: 0,
                    color: color,
                    d: (render.now / 3000) % (2 * Math.PI),
                    passiveFade: 0,
                }
                let data = game.tankData[entry.id]
                render.drawTank({
                    ..._tank,
                    ...tankData.weapons[data.weapon || 'node'],
                    ...tankData.bodies[data.body || 'base']
                })
            } else {
                let polygon = idPolygons[entry.id], color
                if(entry.id < 0) {
                    color = render.teamColors[7]
                } else {
                    if(polygon) {
                        color = polygon.renderColor
                    } else {
                        color = render.averageColors(render.getPolygonColor(entry.sides), render.radiantColor, entry.radiant / (entry.radiant + 1))
                    }
                }
                entry.entry.slide.style.background = render.rgb(color)
                entry.entry.bar.style.background = render.rgb(render.averageColors(color, { r:0, g:0, b:0 }, 0.8))
                /*render.drawRegularPolygon({
                 x: 0,
                 y: 0,
                 size: 26,
                 sides: entry.sides,
                 color: color,
                 d: (render.now / 3000) % (2 * Math.PI)
                 })*/
                render.drawPolygon({
                    x: 0,
                    y: 0,
                    size: 26,
                    sides: entry.sides,
                    color: color,
                    d: (render.now / 3000) % (2 * Math.PI),
                    fadeTime: 1
                })
            }
            let first = page.leaderboard.order[0]
            if(first) {
                if(first.displayScore) {
                    entry.percent = entry.displayScore / first.displayScore
                } else {
                    entry.percent = 1
                }
            }
            entry._percent = util.average(entry._percent, entry.percent, 15) || 0
            entry.entry.slide.style.right = (100 * (1 - entry._percent)) + '%'
            ctx = render.ctx.gameCanvas
        },
        leaderboard: {
            entries: {},
            order: [],
            removedEntries: [],
            reset: function() {
                for(let id in page.leaderboard.entries) {
                    page.leaderboard.entries[id].entry.div.remove()
                }
                page.leaderboard.entries = {}
            },
            update: function(entries) {
                let leaderboard = page.leaderboard
                let newEntries = {}
                leaderboard.order = []
                for(let i=0;i<8;i++) {
                    let current = entries[i]
                    if(current) {
                        let currentId = current.type + current.id
                        let obj
                        if(currentId in leaderboard.entries) {
                            obj = leaderboard.entries[currentId]
                            delete leaderboard.entries[currentId]
                            obj.score = current.score
                            obj.name = current.name
                            obj.sides = current.sides || 0
                            obj.radiant = current.radiant || 0
                        } else {
                            obj = {
                                id: current.id,
                                type: current.type,
                                name: current.name,
                                score: current.score,
                                radiant: current.radiant || 0,
                                displayScore: render.getRadiantMultiplier(current.radiant) * current.score,
                                percent: 0,
                                _percent: 0,
                                sides: current.sides || 0,
                                entry: false
                            }
                            obj.entry = page.createEntry(obj)
                            setTimeout(function() {
                                obj.entry.div.style.left = '0px'
                            }, 100)
                        }
                        leaderboard.order.push(obj)
                        obj.entry.div.style.top = (i * 26) + 'px'
                        if(obj.type === 'tank') {
                            let data = game.tankData[obj.id]
                            if(data) {
                                obj.radiant = data.radiant
                            }
                        }
                        newEntries[currentId] = obj
                    } else {
                        leaderboard.order.push({})
                    }
                }
                for(let id in leaderboard.entries) {
                    let current = leaderboard.entries[id]
                    current.entry.div.style.left = '300px'
                    leaderboard.removedEntries.push(current)
                    setTimeout(function() {
                        current.entry.div.remove()
                        let i = leaderboard.removedEntries.indexOf(current)
                        if(i >= 0) {
                            leaderboard.removedEntries.splice(i, 1)
                        }
                    }, 100)
                }
                leaderboard.entries = newEntries
            }
        },
        upgradeList: [],
        createUpgradeBox: function(weapon, body, name) {
            let box = {
                box: document.createElement('div'),
                lower: document.createElement('div'),
                canvas: document.createElement('canvas'),
                name: document.createElement('div'),
                weapon: weapon,
                body: body,
                transform: false,
                ctx: false,
                tank: false,
            }
            box.box.className = 'upgradeBox'
            box.lower.className = 'upgradeBoxLower'
            box.box.appendChild(box.lower)
            box.canvas.className = 'upgradeCanvas'
            box.box.appendChild(box.canvas)
            box.canvas.width = box.canvas.height = 200
            box.name.className = 'upgradeName'
            box.box.appendChild(box.name)
            box.name.innerHTML = name[0].toUpperCase() + name.slice(1)
            box.ctx = box.canvas.getContext('2d')
            box.ctx.translate(100, 100)
            box.transform = box.ctx.getTransform()
            box.tank = render.getTankData(weapon, body)
            box.tank.size = 28
            return box
        },
        updateUpgradeBox: function(box) {
            ctx = box.ctx
            ctx.setTransform(box.transform)
            ctx.clearRect(-100, -100, 200, 200)
            ctx.scale(1.4, 1.4)
            if(box.tank) {
                if(game.data.me) {
                    box.tank.radiant = game.data.me.radiant
                    box.tank.color = game.data.me.color
                    box.tank.invincible = game.data.me.invincible
                }
                let b = tankData.bodies[box.tank.body]
                if(b.celestial) {
                    box.tank.size = 40
                } else {
                    box.tank.size = 28
                }
                box.tank.d = render.now / 1500
                render.drawTank(box.tank)
            }
        },
        currentWeaponUpgrades: false,
        weaponUpgradeTimer: 0,
        lastWeapon: '',
        createWeaponUpgrades: function(weapons, label) {
            if(page.currentWeaponUpgrades) {
                page.currentWeaponUpgrades.remove()
            }
            let upgrades = {
                div: document.createElement('div'),
                buttons: {},
                remove: function() {
                    upgrades.div.style.left = '-450px'
                    upgrades.div.style.pointerEvents = 'none'
                    if(page.currentWeaponUpgrades === upgrades) {
                        page.currentWeaponUpgrades = false
                    }
                    setTimeout(function() {
                        upgrades.div.remove()
                        let i = page.upgradeList.indexOf(upgrades)
                        if(i >= 0) {
                            page.upgradeList.splice(i, 1)
                        }
                    }, 1000)
                },
                label: label
            }
            page.currentWeaponUpgrades = upgrades
            upgrades.div.className = 'weaponUpgrades'
            for(let i=0,l=weapons.length;i<l;i++) {
                let weapon = weapons[i], w = tankData.weapons[weapon]
                let box = upgrades.buttons[weapon] = page.createUpgradeBox(weapon, w.renderBody || 'base', weapon)
                box.box.style.left = `${70 + 140 * (i % 3)}px`
                box.box.style.bottom = `${70 + 140 * Math.floor(i / 3)}px`
                box.box.style.background = render.rgb(render.polygonColors[i])
                upgrades.div.appendChild(box.box)
                box.box.addEventListener('click', function() {
                    if(game.data.me) {
                        game.send(game.currentServer.ws, ['upgradeWeapon', weapon])
                        page.weaponUpgradeTimer = performance.now()
                        page.lastWeapon = game.data.me.weapon
                    }
                    upgrades.remove()
                })
            }
            setTimeout(function() {
                upgrades.div.style.left = '10px'
            }, 100)
            overlay1.appendChild(upgrades.div)
            page.upgradeList.push(upgrades)
        },
        currentBodyUpgrades: false,
        bodyUpgradeTimer: 0,
        lastBody: '',
        createBodyUpgrades: function(bodies, label) {
            if(page.currentBodyUpgrades) {
                page.currentBodyUpgrades.remove()
            }
            let upgrades = {
                div: document.createElement('div'),
                buttons: {},
                remove: function() {
                    upgrades.div.style.right = '-450px'
                    upgrades.div.style.pointerEvents = 'none'
                    if(page.currentBodyUpgrades === upgrades) {
                        page.currentBodyUpgrades = false
                    }
                    setTimeout(function() {
                        upgrades.div.remove()
                        let i = page.upgradeList.indexOf(upgrades)
                        if(i >= 0) {
                            page.upgradeList.splice(i, 1)
                        }
                    }, 1000)
                },
                label: label
            }
            page.currentBodyUpgrades = upgrades
            upgrades.div.className = 'bodyUpgrades'
            for(let i=0,l=bodies.length;i<l;i++) {
                let body = bodies[i]
                let box = upgrades.buttons[body] = page.createUpgradeBox('node', body, body)
                box.box.style.transform = 'translate(50%, 50%)'
                box.box.style.right = `${70 + 140 * (i % 3)}px`
                box.box.style.bottom = `${70 + 140 * Math.floor(i / 3)}px`
                box.box.style.background = render.rgb(render.polygonColors[i])
                upgrades.div.appendChild(box.box)
                box.box.addEventListener('click', function() {
                    if(game.data.me) {
                        game.send(game.currentServer.ws, ['upgradeBody', body])
                        page.bodyUpgradeTimer = performance.now()
                        page.lastBody = game.data.me.body
                    }
                    upgrades.remove()
                })
            }
            setTimeout(function() {
                upgrades.div.style.right = '10px'
            }, 100)
            overlay1.appendChild(upgrades.div)
            page.upgradeList.push(upgrades)
        }
    }
    
    let ctx = render.ctx.gameCanvas
    
    for(let i=1;i<=8;i++) {
        let type = (i <= 4 ? true : false)
        let direction = (type ? 'right' : 'left')
        let bar = document.createElement('div')
        bar.className = `statBar${type ? 'Left' : 'Right'}`
        bar.style.bottom = `${(i - (type ? 1 : 5)) * 35}px`
        let inner = document.createElement('div')
        inner.className = 'statBarInner'
        inner.style[type ? 'left' : 'right'] = '5px'
        bar.appendChild(inner)
        let slide = document.createElement('div')
        slide.className = 'statBarSlide'
        slide.style[direction] = '100%'
        inner.appendChild(slide)
        let slide2 = document.createElement('div')
        slide2.className = 'statBarSlide2'
        slide2.style[direction] = '100%'
        inner.appendChild(slide2)
        let display = document.createElement('center')
        display.className = 'statBarText'
        display.innerHTML = ['Bullet Penetration', 'Bullet Speed', 'Bullet Damage', 'Reload', 'Movement Speed', 'Body Damage', 'Health Regeneration', 'Max Health'][i - 1]
        inner.appendChild(display)
        let button = document.createElement('div')
        button.className = 'statButton'
        button.style[direction] = '5px'
        button.innerHTML = '+'
        let u = i - 1
        let color = render.polygonColors[[2, 0, 4, 1][i % 4]]
        slide.style.background = render.rgb(color)
        slide2.style.background = render.rgb(color, 0.2)
        button.addEventListener('click', function(e) {
            game.upgrade(u)
        })
        bar.appendChild(button);
        (type ? statUpgradesLeft : statUpgradesRight).appendChild(bar)
        page.statBars.push(function(i) {
            slide2.style[direction] = slide.style[direction] = `${100 * (1 - i / 15)}%`
        })
    }
    respawnContinue.addEventListener('click', function() {
        respawnPanel.style.top = '-100%'
        panel.style.opacity = 1
    })
    hudOpacity.addEventListener('input', function() {
        let opacity = hudOpacity.value
        hudOpacityDisplay.innerHTML = `HUD Opacity: ${opacity}%`
        overlay1.style.opacity = render.hudOpacity = opacity * 0.01
    })
    qualityDisplay.innerHTML = `Render Quality: ${quality.value = Math.round(render.quality * 100)}%`
    quality.addEventListener('input', function() {
        let v = quality.value
        qualityDisplay.innerHTML = `Render Quality: ${v}%`
        render.quality = v * 0.01
        render.resize()
    })
    particlesDisplay.innerHTML = `Particles: ${particles.value = Math.round(render.particles * 100)}%`
    particles.addEventListener('input', function() {
        let v = particles.value
        particlesDisplay.innerHTML = `Particles: ${v}%`
        render.particles = v * 0.01
    })
    playButton.addEventListener('click', function() {
        if(page.state.inGame === false && page.state.sentConnecting === false) {
            render.reset()
            page.leaderboard.reset()
            game.autoFire = false
            game.autoSpin = false
            game.passive = false
            render.typing = false
            panel.style.opacity = 0
            page.setOverlay(1)
            game.checkAlt(true)
            setTimeout(function() {
                if(game.checkAlt()) {
                    game.connect = function() {}
                    game.currentServer.ws.close()
                    page.setOverlay(0)
                } else {
                    let s = document.getElementById('serverSelectOptions').value
                    if(s === 'ffa' || s === '2teams' || s === '4teams' || s === 'pvp') {
                        game.send(game.currentServer.ws, ['joinGame', [(username.value || '').slice(0, 50), s]])
                    }
                }
            }, 500)
        }
    })
    username.value = localStorage.username || ''
    username.addEventListener('input', function() {
        localStorage.username = username.value
    })
    window.addEventListener('resize', render.resize)
    document.addEventListener('keydown', game.keydown)
    document.addEventListener('keyup', game.keyup)
    document.addEventListener('mousemove', game.mousemove)
    document.addEventListener('mousedown', game.mousedown)
    document.addEventListener('wheel', game.wheel)
    document.addEventListener('mouseup', game.mouseup)
    window.oncontextmenu = function() { return false }
    fetch('changelog').then(x => x.text()).then(x => {
        let entries = []
        let s = x.split('\n')
        let c = false
        for(let i=0,l=s.length;i<l;i++) {
            let line = s[i]
            if(line.startsWith('BETA')) {
                if(c) {
                    entries.push(c)
                }
                c = {
                    title: line,
                    contents: []
                }
            } else if(c && line[0] === '-') {
                if(line[1] === '-') {
                    c.contents.push({
                        indent: 1,
                        text: line.slice(2)
                    })
                } else {
                    c.contents.push({
                        indent: 0,
                        text: line.slice(1)
                    })
                }
            }
        }
        if(c) {
            entries.push(c)
        }
        let latest = entries[0]
        let innerHTML = `<div style="line-height:140%;">CHANGELOG - ${latest.title}</div>`
        for(let i=0,l=Math.min(5, latest.contents.length);i<l;i++) {
            let entry = latest.contents[i]
            innerHTML += `<div style="line-height:140%;margin-left:${entry.indent * 50}px;">- ${entry.text}</div>`
        }
        innerHTML += '<div style="line-height:140%;margin-left:20px;">...<span style="margin-left:20px;"></span>...<span style="margin-left:20px;"></span>...<span style="margin-left:20px;"></span>...<span style="margin-left:20px;"></span>...<span style="margin-left:20px;"></span>...<span style="margin-left:20px;"></span>...<span style="margin-left:20px;"></span>...<span style="margin-left:20px;"></span>...</div>'
        changelog.innerHTML = innerHTML
        innerHTML = ''
        for(let i=0,l=entries.length;i<l;i++) {
            let latest = entries[i]
            innerHTML += `<div style="line-height:210%;">${latest.title}</div>`
            for(let i=0,l=latest.contents.length;i<l;i++) {
                let entry = latest.contents[i]
                innerHTML += `<div style="line-height:140%;margin-left:${50 + entry.indent * 50}px;">- ${entry.text}</div>`
            }
            if(i < l - 1) {
                innerHTML += '<hr>'
            }
        }
        changelogContent.innerHTML = innerHTML
        let ldiv = document.createElement('div')
        ldiv.style.lineHeight = '200%'
        ldiv.innerHTML = 'you can view the full changelog '
        let lspan = document.createElement('span')
        lspan.className = 'link'
        lspan.innerHTML = 'here'
        ldiv.appendChild(lspan)
        lspan.addEventListener('click', function() {
            page.openChangelog()
        })
        changelog.appendChild(ldiv)
    })
    changelogBack.addEventListener('click', function() {
        changelogFull.style.top = '-100%'
        changelogDark.style.opacity = 0
        changelogDark.style.pointerEvents = 'none'
    })
    tipsBack.addEventListener('click', function() {
        tips.style.top = '-100%'
        tipsDark.style.opacity = 0
        tipsDark.style.pointerEvents = 'none'
    })
    contactSubmit.addEventListener('click', function() {
        contactContent.value = ''
        contact.style.top = '-100%'
        contactDark.style.opacity = 0
        contactDark.style.pointerEvents = 'none'
    })
    contactCancel.addEventListener('click', function() {
        contactContent.value = ''
        contact.style.top = '-100%'
        contactDark.style.opacity = 0
        contactDark.style.pointerEvents = 'none'
    })
    
    render.grid.generate()
    render.resize()
    document.body.style.visibility = "visible";
    if(location.href.includes('8443')) {
        game.connectTo('wss://scenexe2.io:8443/ws')
    }
    if(render.tankEditor) {
        let tankEditor = document.getElementById('tankEditor')
        tankEditor.style.visibility = 'visible'
        let mainCanvas = document.createElement('canvas')
        mainCanvas.width = mainCanvas.height = 1000
        render.style(mainCanvas, {
            width: '500px',
            height: '500px',
            position: 'absolute',
            top: '0',
            left: '0',
            cursor: 'crosshair'
        })
        const drag = {
            lx: 0,
            ly: 0,
            x: 0,
            y: 0,
            active: false
        }
        const tooltip = document.createElement('div')
        tooltip.className = 'tankEditorInput'
        tooltip.style.position = 'absolute'
        tooltip.style.transform = 'translate(10px, 0)'
        tooltip.style.zIndex = 999
        tooltip.style.pointerEvents = 'none'
        tooltip.style.paddingLeft = tooltip.style.paddingRight = '5px'
        tooltip.styleopacity = 0
        tooltip.style.transition = 'opacity 0.1s ease'
        tankEditor.appendChild(tooltip)
        mainCanvas.addEventListener('wheel', function(e) {
            if(true) {
                let y = e.deltaY * 0.01
                render.camera.zoom += y
                let max = 10
                if(render.camera.zoom < -4) { render.camera.zoom = -4 }
                render.camera._zoom = Math.pow(1.5, render.camera.zoom)
                if(render.camera._zoom > max) {
                    render.camera._zoom = max
                    render.camera.zoom = Math.log(render.camera._zoom) / Math.log(1.5)
                }
            }
        })
        document.addEventListener('mousemove', function(e) {
            drag.x = e.clientX * render.scale
            drag.y = e.clientY * render.scale
            tooltip.style.left = `${drag.x}px`
            tooltip.style.top = `${drag.y}px`
            let target = e.target
            if(target.tooltip) {
                tooltip.innerHTML = target.tooltip
                tooltip.style.opacity = 1
            } else { tooltip.style.opacity = 0 }
        })
        mainCanvas.addEventListener('mousedown', function(e) {
            drag.active = true
            drag.lx = drag.x
            drag.ly = drag.y
        })
        document.addEventListener('mouseup', function(e) {
            drag.active = false
        })
        tankEditor.appendChild(mainCanvas)
        const resetButton = document.createElement('button')
        resetButton.innerHTML = 'reset view'
        render.style(resetButton, {
            position: 'absolute',
            top: '505px',
            left: '5px',
            width: '242px'
        })
        resetButton.className = 'tankEditorButton'
        resetButton.tooltip = 'Reset the camera position and zoom'
        resetButton.addEventListener('click', function() {
            render.camera.x = render.camera.y = 0
            render.camera.zoom = 0
            render.camera._zoom = 1
            render.camera.size = 1
        })
        const clearButton = document.createElement('button')
        clearButton.innerHTML = 'clear selection'
        render.style(clearButton, {
            position: 'absolute',
            top: '505px',
            left: '257px',
            width: '242px'
        })
        clearButton.className = 'tankEditorButton'
        clearButton.tooltip = 'Clears selected item'
        clearButton.addEventListener('click', function() {
            selectedBarrel = false
        })
        const passiveButton = document.createElement('button')
        passiveButton.innerHTML = 'toggle passive'
        render.style(passiveButton, {
            position: 'absolute',
            top: '550px',
            left: '5px',
            width: '242px'
        })
        passiveButton.className = 'tankEditorButton'
        passiveButton.tooltip = 'Toggles whether tank is rendered on passive or not'
        passiveButton.addEventListener('click', function() {
            tank.passive = tank.passive ? false : true
        })
        const createInput = function(label, placeholder, input, blur, value, tooltip) {
            const span = document.createElement('div')
            const l = document.createElement('span')
            l.style.color = 'rgb(100, 100, 100)'
            l.innerHTML = label
            const i = document.createElement('input')
            i.className = 'tankEditorInput'
            i.style.marginLeft = '5px'
            i.style.paddingLeft = i.style.paddingRight = '5px'
            i.placeholder = placeholder
            i.tooltip = tooltip
            i.value = value
            i.style.width = 'calc(100% - 30px)'
            span.appendChild(l)
            span.appendChild(i)
            let o = { value:value }
            span.style.marginBottom = '10px'
            i.addEventListener('input', function(e) {
                input(e, i, o)
            })
            i.addEventListener('blur', function(e) {
                blur(e, i, o)
            })
            span.set = function(v) {
                o.value = v
                i.value = arguments.length > 1 ? arguments[1] : v
            }
            return span
        }
        tankEditor.appendChild(render.style(createInput('[visual] Radiant:', 'radiant', function(e, i, o) {
            let v = parseInt(i.value)
            if(v >= 0 || v <= 0) {
                if(v > 100) { v = 100 }
                else if(v < -100) { v = -100 }
                tank.radiant = o.value = v
            }
        }, function(e, i, o) {
            let v = parseInt(i.value)
            if(v >= 0 || v <= 0) {
                if(v > 100) { v = 100 }
                else if(v < -100) { v = -100 }
                i.value = o.value = tank.radiant = v
            } else {
                i.value = o.value = tank.radiant
            }
        }, 0, "This won't export in the tank code<br>It will only affect how it is rendered here"), {
            position: 'absolute',
            top: '600px',
            left: '5px'
        }))
        tankEditor.appendChild(render.style(createInput('[visual] Size:', 'size', function(e, i, o) {
            let v = parseInt(i.value)
            if(v >= 0) {
                if(v > 1000) { v = 1000 }
                s = o.value = v
            }
        }, function(e, i, o) {
            let v = parseInt(i.value)
            if(v >= 0) {
                if(v > 1000) { v = 1000 }
                i.value = o.value = s = v
            } else {
                i.value = o.value = s
            }
        }, 50, "This won't export in the tank code<br>It will only affect how it is rendered here"), {
            position: 'absolute',
            top: '670px',
            left: '5px'
        }))
        tankEditor.appendChild(render.style(createInput('[visual] Color (team id):', 'team id', function(e, i, o) {
            let v = parseInt(i.value)
            if(v >= 0 && render.teamColors[v]) {
                o.value = tank.team = v
                tank.color = render.teamColors[v]
            }
        }, function(e, i, o) {
            let v = parseInt(i.value)
            if(render.teamColors[v]) {
                i.value = o.value = tank.team = v
                tank.color = render.teamColors[v]
            } else {
                i.value = o.value = tank.team
            }
        }, 0, "This won't export in the tank code<br>It will only affect how it is rendered here"), {
            position: 'absolute',
            top: '740px',
            left: '5px'
        }))
        const bodyUpgrade = document.createElement('div')
        tankEditor.appendChild(render.style(bodyUpgrade, {
            position: 'absolute',
            top: '5px',
            left: '505px',
            width: '300px',
            height: 'calc(100% - 10px)',
            overflowY: 'scroll',
            overflowX: 'hidden',
        }))
        let weaponCameraSize
        bodyUpgrade.appendChild(weaponCameraSize = createInput('[weapon] Camera Size:', 'number', function(e, i, o) {
            let v = parseFloat(i.value)
            if(v > 0) {
                if(v > 100) { v = 100 }
                tank.weaponCameraSize = o.value = v
            }
        }, function(e, i, o) {
            let v = parseFloat(i.value)
            if(v > 0) {
                if(v > 100) { v = 100 }
                i.value = o.value = tank.weaponCameraSize = v
            } else {
                i.value = o.value = tank.weaponCameraSize
            }
        }, 1, "How far this weapon can see"))
        let cameraSize
        bodyUpgrade.appendChild(cameraSize = createInput('[body] Camera Size:', 'number', function(e, i, o) {
            let v = parseFloat(i.value)
            if(v > 0) {
                if(v > 100) { v = 100 }
                tank.bodyCameraSize = o.value = v
            }
        }, function(e, i, o) {
            let v = parseFloat(i.value)
            if(v > 0) {
                if(v > 100) { v = 100 }
                i.value = o.value = tank.bodyCameraSize = v
            } else {
                i.value = o.value = tank.bodyCameraSize
            }
        }, 1, "How far this body can see"))
        let sides
        bodyUpgrade.appendChild(sides = createInput('[body] Sides:', 'sides', function(e, i, o) {
            let v = parseInt(i.value)
            if(v >= 0 || v <= 0) {
                if(v > 100) { v = 100 }
                else if(v < 0) { v = 0 }
                tank.sides = o.value = v
            }
        }, function(e, i, o) {
            let v = parseInt(i.value)
            if(v >= 0 || v <= 0) {
                if(v > 100) { v = 100 }
                else if(v < 0) { v = 0 }
                i.value = o.value = tank.sides = v
            } else {
                i.value = o.value = tank.sides
            }
        }, 0, "Number of sides the body has<br>Set to 0 for circle<br>Set to 1 to not render<br>Use visual elements for custom bodies"))
        let outerSides
        bodyUpgrade.appendChild(outerSides = createInput('[body] Outer Sides:', 'sides', function(e, i, o) {
            if(!i.value) {
                tank.outerSides = o.value = false
            }
            let v = parseInt(i.value)
            if(v >= 0 || v <= 0) {
                if(v > 100) { v = 100 }
                else if(v < 0) { v = 0 }
                tank.outerSides = o.value = v
            }
        }, function(e, i, o) {
            if(!i.value) {
                tank.outerSides = o.value = false
            }
            let v = parseInt(i.value)
            if(v >= 0 || v <= 0) {
                if(v > 100) { v = 100 }
                else if(v < 0) { v = 0 }
                i.value = o.value = tank.outerSides = v
            } else {
                i.value = o.value = tank.outerSides
                if(!(tank.outerSides >= 0 || tank.outerSides <= 0)) {
                    tank.outerSides = o.value = false
                }
            }
            if(o.value === false) { i.value = '' }
        }, '', "Rendering for spike thing<br>Leave blank if you don't want"))
        let outerSize
        bodyUpgrade.appendChild(outerSize = createInput('[body] Outer Size:', 'outer size', function(e, i, o) {
            if(!i.value) {
                tank.outerSize = o.value = false
            }
            let v = parseFloat(i.value)
            if(v > 0) {
                if(v > 100) { v = 100 }
                tank.outerSize = o.value = v
            }
        }, function(e, i, o) {
            if(!i.value) {
                tank.outerSize = o.value = false
            }
            let v = parseFloat(i.value)
            if(v >= 0 || v <= 0) {
                if(v > 100) { v = 100 }
                else if(v < 0) { v = 0 }
                i.value = o.value = tank.outerSize = v
            } else {
                i.value = o.value = tank.outerSize
                if(!(tank.outerSides > 0)) {
                    tank.outerSize = o.value = false
                }
            }
            if(o.value === false) { i.value = '' }
        }, '', "Rendering for spike thing<br>Leave blank if you don't want"))
        let movementSpeed
        bodyUpgrade.appendChild(movementSpeed = createInput('[body] Movement Speed:', 'number', function(e, i, o) {
            let v = parseFloat(i.value)
            if(v >= 0) {
                if(v > 100) { v = 100 }
                tank.movementSpeed = o.value = v
            }
        }, function(e, i, o) {
            let v = parseFloat(i.value)
            if(v >= 0) {
                if(v > 100) { v = 100 }
                i.value = o.value = tank.movementSpeed = v
            } else {
                i.value = o.value = tank.movementSpeed
            }
        }, 1, "How fast this body goes"))
        let maxHealth
        bodyUpgrade.appendChild(maxHealth = createInput('[body] Max Health:', 'number', function(e, i, o) {
            let v = parseFloat(i.value)
            if(v >= 0) {
                if(v > 1e6) { v = 1e6 }
                tank.maxHealth = o.value = v
            }
        }, function(e, i, o) {
            let v = parseFloat(i.value)
            if(v >= 0) {
                if(v > 1e6) { v = 1e6 }
                i.value = o.value = tank.maxHealth = v
            } else {
                i.value = o.value = tank.maxHealth
            }
        }, 1, "How much health this body has"))
        let bodyDamage
        bodyUpgrade.appendChild(bodyDamage = createInput('[body] Body Damage:', 'number', function(e, i, o) {
            let v = parseFloat(i.value)
            if(v >= 0) {
                if(v > 1e6) { v = 1e6 }
                tank.bodyDamage = o.value = v
            }
        }, function(e, i, o) {
            let v = parseFloat(i.value)
            if(v >= 0) {
                if(v > 1e6) { v = 1e6 }
                i.value = o.value = tank.bodyDamage = v
            } else {
                i.value = o.value = tank.bodyDamage
            }
        }, 1, "How much body damage this body does"))
        const createList = function(title) {
            let barrelTitle = document.createElement('span')
            let button = document.createElement('button')
            button.className = 'tankEditorButton'
            button.innerHTML = '+'
            button.tooltip = 'Create'
            button.style.fontSize = '14px'
            button.style.marginLeft = '10px'
            button.style.fontWeight = 900
            barrelTitle.innerHTML = title
            barrelTitle.style.color = 'rgb(100, 100, 100)'
            bodyUpgrade.appendChild(barrelTitle)
            bodyUpgrade.appendChild(button)
            let barrelList = document.createElement('div')
            barrelList.style.borderLeft = '2px solid rgb(100, 100, 100)'
            barrelList.style.marginBottom = barrelList.style.marginLeft = '10px'
            bodyUpgrade.appendChild(barrelList)
            barrelList.set = function(v) {
                barrelList.innerHTML = ''
                for(let i=0,l=v.length;i<l;i++) {
                    let c = v[i]
                    let d = document.createElement('div')
                    d.innerHTML = c[0]
                    d.style.marginBottom = '5px'
                    d.style.paddingLeft = '5px'
                    d.style.marginLeft = '3px'
                    d.style.color = 'rgb(100, 100, 100)'
                    d.className = 'tankEditorEntry'
                    d.addEventListener('click', c[1])
                    barrelList.appendChild(d)
                }
            }
            barrelList.set([['a'], ['b'], ['c']])
            return barrelList
        }
        const barrelList = createList('[weapon] Barrels:')
        const weaponTurretList = createList('[weapon] Weapon Turrets:')
        const turretList = createList('[body] Turrets:')
        const auraList = createList('[body] Auras:')
        const visualElementList = createList('[body] Visual Elements:')
        const weaponVisualElementList = createList('[weapon] Weapon Visual Elements:')
        const barrelEdit = document.createElement('div')
        const selectBarrel = function(barrel) {
            selectedBarrel = barrel
            barrelWidth.set(selectedBarrel.width)
            barrelHeight.set(selectedBarrel.height)
        }
        const updateBarrelList = function() {
            let b = []
            for(let i=0,l=tank.barrels.length;i<l;i++) {
                let barrel = tank.barrels[i]
                b.push([`Barrel Type ${barrel.type}`, function() { selectBarrel(barrel) }])
            }
            barrelList.set(b.reverse())
        }
        tankEditor.appendChild(render.style(barrelEdit, {
            position: 'absolute',
            top: '5px',
            left: '810px',
            width: '300px',
            height: 'calc(100% - 10px)',
            overflowY: 'scroll',
            overflowX: 'hidden',
        }))
        let selectedBarrel = false, barrelWidth, barrelHeight
        barrelEdit.appendChild(barrelWidth = createInput('[barrel] Width:', 'number', function(e, i, o) {
            let v = parseFloat(i.value)
            if(v > 0 && selectedBarrel) {
                if(v > 100) { v = 100 }
                selectedBarrel.width = o.value = v
            }
        }, function(e, i, o) {
            let v = parseFloat(i.value)
            if(selectedBarrel) {
                if(v > 0) {
                    if(v > 100) { v = 100 }
                    i.value = o.value = selectedBarrel.width = v
                } else {
                    i.value = o.value = selectedBarrel.width
                }
            }
        }, 1, "Width of barrel"))
        barrelEdit.appendChild(barrelHeight = createInput('[barrel] Height:', 'number', function(e, i, o) {
            let v = parseFloat(i.value)
            if(v > 0 && selectedBarrel) {
                if(v > 100) { v = 100 }
                selectedBarrel.height = o.value = v
            }
        }, function(e, i, o) {
            let v = parseFloat(i.value)
            if(selectedBarrel) {
                if(v > 0) {
                    if(v > 100) { v = 100 }
                    i.value = o.value = selectedBarrel.height = v
                } else {
                    i.value = o.value = selectedBarrel.height
                }
            }
        }, 1, "Height of barrel"))
        tankEditor.appendChild(resetButton)
        tankEditor.appendChild(clearButton)
        tankEditor.appendChild(passiveButton)
        const rctx = mainCanvas.getContext('2d')
        const tank = {
            auras: [],
            barrels: [],
            body: 'base',
            color: render.teamColors[0],
            d: 0,
            fadeTime: 1,
            nx: 0,
            ny: 0,
            ox: 0,
            oy: 0,
            passive: false,
            passiveFade: 0,
            radiant: 0,
            sides: 0,
            size: 0,
            turretData: {},
            turrets: [],
            visualElements: [],
            weaponVisualElements: [],
            weapon: 'undercovercop',
            weaponTurrets: [],
            x: 0,
            y: 0,
            _size: 0,
            level: 1,
            movementSpeed: 1,
            maxHealth: 1,
            bodyDamage: 1,
            weaponCameraSize: 1,
            cameraSize: 1,
        }
        let s = 50
        game.updateTank(tank)
        tank.size = 0
        window.t = tank
        updateBarrelList()
        if(tank.outerSides >= 0 && tank.outerSize > 0) {
            outerSides.set(tank.outerSides)
            outerSize.set(tank.outerSize)
        } else {
            outerSides.set(false, '')
            outerSize.set(false, '')
        }
        let body = tankData.bodies[tank.body]
        if(body) {
            tank.movementSpeed = body.movementSpeed
            tank.maxHealth = body.maxHealth
            tank.cameraSize = body.cameraSizeMultiplier
            tank.bodyDamage = body.bodyDamage
        }
        movementSpeed.set(tank.movementSpeed)
        sides.set(tank.sides)
        maxHealth.set(tank.maxHealth)
        cameraSize.set(tank.cameraSize)
        weaponCameraSize.set(tank.weaponCameraSize)
        bodyDamage.set(tank.bodyDamage)
        const main = function() {
            tank._size = s
            ctx = rctx
            let dt = (-render.now + (render.now = performance.now()))
            render.flash = (render.now % 300 < 150)
            let t = render.now / 500 + 0.6
            render.radiantColor.r = 127.5 * (1 + Math.sin(t))
            render.radiantColor.g = 127.5 * (1 + Math.sin(t + 2 * Math.PI / 3))
            render.radiantColor.b = 127.5 * (1 + Math.sin(t + 4 * Math.PI / 3))
            if(drag.active) {
                render.camera.x -= (drag.x - drag.lx) * render.camera.size
                render.camera.y -= (drag.y - drag.ly) * render.camera.size
                drag.lx = drag.x
                drag.ly = drag.y
            }
            render.camera._size = 1
            render.camera.size = util.average(render.camera.size, render.camera._size * render.camera._zoom, 5)
            render.updateTank(tank)
            ctx.resetTransform()
            ctx.scale(2, 2)
            ctx.translate(250, 250)
            let iSize = 1 / render.camera.size
            ctx.scale(iSize, iSize)
            ctx.translate(-render.camera.x, -render.camera.y)
            let h = 250 * render.camera.size, f = h * 2
            ctx.fillStyle = render.rgb(render.grid.background)
            ctx.fillRect(render.camera.x - h, render.camera.y - h, f, f)
            ctx.fillStyle = render.grid.pattern
            ctx.fillRect(render.camera.x - h, render.camera.y - h, f, f)
            render.drawRadiantAura(tank, true, true)
            render.drawTank(tank, selectedBarrel)
            render.drawAuras(tank)
            requestAnimationFrame(main)
        }
        main()
    } else {
        game.connect()
        render.loop()
    }
    
    function generateIcons() {
        tankEditor.innerHTML = ''
        const generatePolygon = function(sides, size, radiant, scale) {
            let polygon = {
                x: 0,
                y: 0,
                sides: sides,
                color: render.getPolygonColor(sides),
                size: size,
                d: Math.PI / 4,
                fadeTime: 1,
                radiant: radiant || 0
            }
            let s = scale
            let c = document.createElement('canvas')
            c.style.border = '1px solid rgb(200, 200, 200)'
            c.style.margin = '5px'
            c.width = c.height = 64
            let d = c.getContext('2d'), e = ctx
            ctx = d
            ctx.translate(32, 32)
            ctx.scale(s, s)
            polygon.size /= s
            render.drawRadiantAura(polygon)
            render.drawPolygon(polygon)
            window.ctx = e
            tankEditor.appendChild(c)
        }
        const generateTank = function(weapon, body, team, size, scale, _d) {
            _d = _d || 0
            let tank = {
                x: 0,
                y: 0,
                color: render.getTankColor(team, body),
                size: size,
                d: 0,
                fadeTime: 1,
                passiveFade: 0,
                ...tankData.weapons[weapon],
                ...tankData.bodies[body]
            }
            let s = scale
            let c = document.createElement('canvas')
            c.style.border = '1px solid rgb(200, 200, 200)'
            c.style.margin = '5px'
            c.width = c.height = 64
            let d = c.getContext('2d'), e = ctx
            ctx = d
            ctx.translate(32 + _d, 32 - _d)
            ctx.scale(s, s)
            ctx.rotate(-3 * Math.PI / 4)
            tank.size /= s
            render.drawTank(tank)
            window.ctx = e
            tankEditor.appendChild(c)
        }
        for(let i=3;i<15;i++) {
            generatePolygon(i, 20, 0, 1.2 - 0.07 * (i - 3))
        }
        generatePolygon(150, 20, 0, 0.2)
        for(let i=1;i<6;i++) {
            generatePolygon(-i, 20, 0, 0.9 - 0.1 * (i - 1))
        }
        for(let i=3;i<8;i++) {
            generatePolygon(i, 10, 5, 0.55 - 0.02 * (i - 3))
        }
        for(let i=1;i<6;i++) {
            generatePolygon(-i, 15, 3, 0.5 - 0.05 * (i - 1))
        }
        generateTank('abyssling', 'abyssling', 8, 18, 0.4)
        generateTank('abyssguardian', 'abyssguardian', 8, 18, 0.3)
        generateTank('booster', 'base', 3, 18, 0.5)
        generateTank('undercovercop', 'base', 4, 18, 0.5)
        generateTank('ganymede', 'andromeda', 6, 25, 0.3)
        generateTank('wave', 'fountain', 8, 15, 0.5)
        generateTank('wave', 'foundry', 8, 15, 0.5)
        generateTank('wave', 'battalion', 8, 15, 0.5)
        generateTank('wave', 'saw', 8, 15, 0.5)
        generateTank('conglomerate', 'fabricator', 8, 15, 0.5)
        generateTank('test', 'test', 4, 10, 0.3)
        generateTank('wrench', 'base', 4, 7, 0.3, -12)
        generateTank('nova', 'celestial', 6, 22, 0.5)
        generateTank('quasar', 'meteor', 6, 22, 0.5)
        generateTank('charon', 'comet', 6, 22, 0.5)
        generateTank('synope', 'hyperion', 6, 22, 0.5)
        generateTank('blazar', 'void', 6, 22, 0.5)
        generateTank('moon', 'galaxy', 6, 22, 0.5)
        generateTank('asteroid', 'corvus', 6, 22, 0.5)
        generateTank('amalgam', 'inferno', 6, 13, 0.5)
        generateTank('riot', 'inferno', 2, 13, 0.5, -5)
        generateTank('alpha', 'saw', 2, 13, 0.5, -5)
        generateTank('penta', 'battalion', 2, 13, 0.5, -3)
        generateTank('arsenal', 'battalion', 2, 13, 0.5, -3)
        generateTank('marksman', 'saw', 2, 13, 0.5, -3)
        generateTank('defender', 'defender', 2, 20, 0.3)
        generateTank('engineer', 'battalion', 7, 17, 0.5, -3)
        generateTank('hatcher', 'sentry', 0, 17, 0.5, 1)
        generateTank('factory', 'sentry', 0, 17, 0.5, -5)
        generateTank('mono', 'base', 3, 13, 0.5, -3)
    }
    //generateIcons()
    
    
    window.onerror = function(e) {
        alert(e)
    }
    
    const touch = {
        leftId: false,
        leftPos: [0, 0],
        leftDelta: [0, 0],
        rightId: false,
        rightPos: [0, 0],
        rightDelta: [0, 0],
        start: function(e) {
            if(e.clientX < window.innerWidth * 0.5) {
                if(touch.leftId === false) {
                    touch.leftId = e.identifier
                    touch.leftPos = [render.scale * e.clientX, render.scale * e.clientY]
                    joystickLeft.style.left = `${touch.leftPos[0]}px`
                    joystickLeft.style.top = `${touch.leftPos[1]}px`
                    joystickLeftInner.style.transform = `translate(10px, 10px)`
                    joystickLeft.style.visibility = 'visible'
                }
            } else {
                if(touch.rightId === false) {
                    util.mouse.down = true
                    touch.rightId = e.identifier
                    touch.rightPos = [render.scale * e.clientX, render.scale * e.clientY]
                    joystickRight.style.left = `${touch.rightPos[0]}px`
                    joystickRight.style.top = `${touch.rightPos[1]}px`
                    joystickRightInner.style.transform = `translate(10px, 10px)`
                    joystickRight.style.visibility = 'visible'
                }
            }
        },
        move: function(e) {
            if(e.identifier === touch.leftId) {
                let touchX = render.scale * e.clientX
                let touchY = render.scale * e.clientY
                touch.leftDelta = [touchX - touch.leftPos[0], touchY - touch.leftPos[1]]
                let delta = [touch.leftDelta[0], touch.leftDelta[1]]
                let distance = Math.sqrt(touch.leftDelta[0] * touch.leftDelta[0] + touch.leftDelta[1] * touch.leftDelta[1])
                if(distance > 80) {
                    let r = 80 / distance
                    delta[0] *= r
                    delta[1] *= r
                }
                joystickLeftInner.style.transform = `translate(${delta[0] + 10}px, ${delta[1] + 10}px)`
                game.send(game.currentServer.ws, ['direction', (Math.round(Math.atan2(delta[1] - 10, delta[0] - 10) * 100 / Math.PI) % 200 + 200) % 200])
            } else if(e.identifier === touch.rightId) {
                let touchX = render.scale * e.clientX
                let touchY = render.scale * e.clientY
                touch.rightDelta = [touchX - touch.rightPos[0], touchY - touch.rightPos[1]]
                let delta = [touch.rightDelta[0], touch.rightDelta[1]]
                let distance = Math.sqrt(touch.rightDelta[0] * touch.rightDelta[0] + touch.rightDelta[1] * touch.rightDelta[1])
                if(distance > 50) {
                    let r = 50 / distance
                    delta[0] *= r
                    delta[1] *= r
                }
                joystickRightInner.style.transform = `translate(${delta[0] + 10}px, ${delta[1] + 10}px)`
                util.mouse.d = Math.atan2(10 - delta[0], delta[1] - 10)
            }
        },
        end: function(e) {
            if(e.identifier === touch.leftId) {
                touch.leftId = false
                joystickLeft.style.visibility = 'hidden'
                game.send(game.currentServer.ws, ['direction', false])
            } else if(e.identifier === touch.rightId) {
                util.mouse.down = false
                touch.rightId = false
                joystickRight.style.visibility = 'hidden'
            }
        }
    }
    document.addEventListener('touchstart', function(e) {
        for(let i=e.changedTouches.length-1;i>=0;i--) {
            touch.start(e.changedTouches[i])
        }
    })
    document.addEventListener('touchmove', function(e) {
        for(let i=e.changedTouches.length-1;i>=0;i--) {
            touch.move(e.changedTouches[i])
        }
        e.preventDefault()
    }, {
        passive: false
    })
    document.addEventListener('touchend', function(e) {
        for(let i=e.changedTouches.length-1;i>=0;i--) {
            touch.end(e.changedTouches[i])
        }
    })
    
    
    
    
    function pretty() {
        let str = 'let weaponUpgradeMap = {\n'
        let weaponUpgrades = Object.keys(tankData.weaponUpgradeMap).sort()
        for(let w in weaponUpgrades) {
            let weapon = weaponUpgrades[w]
            str += `  '${weapon}': ${JSON.stringify({
                level: tankData.weaponUpgradeMap[weapon].level,
                upgrades: tankData.weaponUpgradeMap[weapon].upgrades.sort()
            })},\n`
        }
        str += '}\nlet bodyUpgradeMap = {\n'
        let bodyUpgrades = Object.keys(tankData.bodyUpgradeMap).sort()
        for(let b in bodyUpgrades) {
            let body = bodyUpgrades[b]
            str += `  '${body}': ${JSON.stringify({
                level: tankData.bodyUpgradeMap[body].level,
                upgrades: tankData.bodyUpgradeMap[body].upgrades.sort()
            })},\n`
        }
        str += '}\nlet weapons = {\n'
        let weapons = Object.keys(tankData.weapons).sort()
        for(let w in weapons) {
            let weapon = weapons[w]
            str += `  '${weapon}': ${JSON.stringify(tankData.weapons[weapon])},\n`
        }
        str += '}\nlet bodies = {\n'
        let bodies = Object.keys(tankData.bodies).sort()
        for(let b in bodies) {
            let body = bodies[b]
            str += `  '${body}': ${JSON.stringify(tankData.bodies[body])},\n`
        }
        str += '}\nwindow.tankData = { weapons, bodies, weaponUpgradeMap, bodyUpgradeMap }'
        console.log(str)
    }
    
    
    /*
     page.setOverlay(2)
     game.data = ooo
     game.data.tanks[1] = game.data.me
     game.data.me.weapon = 'wrench'
     game.data.me.body = 'bufferno'
     game.updateTank(game.data.me)
     game.data.me._size = 40
     game.data.me.color = render.teamColors[1]
     */
    window.connectTo = game.connectTo
})()


!function() {
    if(location.href.includes('asuscomm')) {
        location.href = 'https://scenexe2.io'
    }
}()
