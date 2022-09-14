module.exports = function(coursename, desc){
    this.coursename = coursename;
    this.desc = desc;
    this.detail = function(){
        return this.coursename + " " + this.desc;
    }
}

