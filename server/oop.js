var person = {
    ho: "Luu",
    ten: "Manh",
    say: function() {
        console.log("Say hello " + this.ho + " " + this.ten);
    }
}

function Person(name, age) {
    this.Name = name;
    this.Age = age;
}

Person.prototype.mota = function () {
    console.log("Say Hi " + this.Name + " Tuoi " + this.Age);
}

var human = new Person("Manh", 23);
human.mota();