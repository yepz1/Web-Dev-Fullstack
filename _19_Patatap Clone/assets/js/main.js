var keyData = {
    a: {
        color: 'pink',
        sound: new Howl({
            src: ['assets/sounds/bubbles.mp3']
        })
    },
    s: {
        color: 'blue',
        sound: new Howl({
            src: ['assets/sounds/clay.mp3']
        })
    },
    d: {
        color: 'red',
        sound: new Howl({
            src: ['assets/sounds/confetti.mp3']
        })
    },
    f: {
        color: 'cyan',
        sound: new Howl({
            src: ['assets/sounds/corona.mp3']
        })
    },
    g: {
        color: 'purple',
        sound: new Howl({
            src: ['assets/sounds/dotted-spiral.mp3']
        })
    },
    h: {
        color: 'green',
        sound: new Howl({
            src: ['assets/sounds/flash-1.mp3']
        })
    },
    j: {
        color: 'yellow',
        sound: new Howl({
            src: ['assets/sounds/flash-2.mp3']
        })
    },
    k: {
        color: 'orange',
        sound: new Howl({
            src: ['assets/sounds/flash-3.mp3']
        })
    },
    l: {
        color: 'brown',
        sound: new Howl({
            src: ['assets/sounds/glimmer.mp3']
        })
    },
    q: {
        color: '#E5A39A',
        sound: new Howl({
            src: ['assets/sounds/moon.mp3']
        })
    },
    w: {
        color: '#ECC4BA',
        sound: new Howl({
            src: ['assets/sounds/pinwheel.mp3']
        })
    },
    e: {
        color: '#FAEBE0',
        sound: new Howl({
            src: ['assets/sounds/piston-1.mp3']
        })
    },
    r: {
        color: '#D0DED4',
        sound: new Howl({
            src: ['assets/sounds/piston-2.mp3']
        })
    },
    t: {
        color: '#FFFDA2',
        sound: new Howl({
            src: ['assets/sounds/piston-3.mp3']
        })
    },
    y: {
        color: '#A62447',
        sound: new Howl({
            src: ['assets/sounds/prism-1.mp3']
        })
    },
    u: {
        color: '#281B59',
        sound: new Howl({
            src: ['assets/sounds/prism-2.mp3']
        })
    },
    i: {
        color: '#EDF2C2',
        sound: new Howl({
            src: ['assets/sounds/prism-3.mp3']
        })
    },
    o: {
        color: '#F2C4B3',
        sound: new Howl({
            src: ['assets/sounds/splits.mp3']
        })
    },
    p: {
        color: '#F28972',
        sound: new Howl({
            src: ['assets/sounds/squiggle.mp3']
        })
    },
    z: {
        color: '#4A8C7A',
        sound: new Howl({
            src: ['assets/sounds/strike.mp3']
        })
    },
    x: {
        color: '#49BF94',
        sound: new Howl({
            src: ['assets/sounds/suspension.mp3']
        })
    },
    c: {
        color: '#49A684',
        sound: new Howl({
            src: ['assets/sounds/timer.mp3']
        })
    },
    v: {
        color: '#D9704A',
        sound: new Howl({
            src: ['assets/sounds/ufo.mp3']
        })
    },
    b: {
        color: '#A65149',
        sound: new Howl({
            src: ['assets/sounds/veil.mp3']
        })
    },
    n: {
        color: '#85D6CB',
        sound: new Howl({
            src: ['assets/sounds/wipe.mp3']
        })
    },
    m: {
        color: '#BF5084',
        sound: new Howl({
            src: ['assets/sounds/zig-zag.mp3']
        })
    },
}

var circles = [];

function onKeyDown(event) {
    if(keyData[event.key]){
        var maxPoint = new Point(view.size.width, view.size.height);
        var randomPoint = Point.random();
        var point = maxPoint * randomPoint;
        var newCircle = new Path.Circle(point, 300);
        newCircle.strokeColor = keyData[event.key].color;
        keyData[event.key].sound.play();
        circles.push(newCircle);
    }
    
}

function onFrame(event) {
    for(var i = 0; i < circles.length; i++) {
        circles[i].strokeColor.hue += 1;
        circles[i].scale(.9);
        if(circles[i].area < 1){
            circles[i].remove(); // remove the circle from the canvas
            circles.splice(i, 1); // remove the circle from the array
            console.log(circles);
        }
    }
}
