// Codigo original
function Stopwatch(){
    let duration = 0;
    this.isStarted = false;

    this.start = function(){
        if(this.isStarted)
          throw new Error('Stopwatch has already started');
        this.time = setInterval(() => {
            duration += 0.01;
        }, 10);
        this.isStarted = true;
    }

    this.stop = function(){
        if(!this.isStarted)
          throw new Error('Stopwatch is not started');
        clearInterval(this.time);
        this.isStarted = false;
    }

    this.reset = function(){
        duration = 0;
        clearInterval(this.time);
        this.isStarted = false;
    }

    Object.defineProperty(this, 'duration', {
        get: function(){
            return duration;
        }
    })
}


sw = new Stopwatch();

/*
---------------Solucao alternativa-------------- 

function Stopwatch(){
    let startTime, endTime, running, duration = 0;

    this.start = function(){
        if(running)
          throw new Error('Stopwatch has already started.');
        
        running = true;

        startTime = new Date();
    };

    this.stop = function(){
        if(!running)
          throw new Error('Stopwatch is not started');
        
        running = false;

        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    };

    this.reset = function(){
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };

    Object.defineProperty(this, 'duration', {
        get: function(){ return duration; }
    });
}


sw = new Stopwatch();
*/