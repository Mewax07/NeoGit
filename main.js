function Git(name) {
    this.name = name;
    this.lastCommitId = -1;
}

function Commit(id, message) {
    this.id = id;
    this.message = message;
}

Git.prototype.commit = function (message) {
    var commit = new Commit(++this.lastCommitId, message);
    return commit;
};

var repo = new Git("repo"); // actual command: git init
repo.commit("Make commit work"); // actual command: git commit -m "Make commit work"
