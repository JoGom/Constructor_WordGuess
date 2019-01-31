let Letter = function(){
    this.wordCharcter = "";
    this.guessedRight = false;
    this.insertLetter = function(){
        return this.guessedRight ? this.wordCharcter : "-";
    };
    this.checkLetter = function(guess){
        if(guess === wordCharcter){
            this.guessedRight = true;
            return this.guessedRight;
        }
        else{
            this.guessedRight = false;
            return this.guessedRight;
        }
    };
};