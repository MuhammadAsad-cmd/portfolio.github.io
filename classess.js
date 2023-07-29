class Category {
    constructor(id, name) {
        this.Id = id;
        this.Name = name
    }
}

class Tasks {
    constructor(id, title, detail, category) {
        this.Id = id;
        this.Title = title;
        this.PostedOn = new Date().toDateString();
        this.Detail = detail;
        this.Category = category;
    }
    get Id() {
        return this._id;
    }
    set Id(value) {
        this._id = value;
    }
    get Title() {
        return this._Title;
    }
    set Title(value) {
        this._Title = value;
    }
    get PostedOn() {
        return this._PostedOn;
    }
    set PostedOn(value) {
        this._PostedOn = value;
    }
}

class Datahandler {
    constructor() {
        this._Categories = [
            new Category(1, "Personal"),
            new Category(2, "Private"),
            new Category(3, "Public"),
            new Category(4,"Favourite")
        ]
        let counter = 0
        this._Task = [
            new Tasks(++counter, "Social Media Marketing", "Social Media ", this._Categories[0]),
            new Tasks(++counter, "Graphic Designing", "Fro Designing", this._Categories[2]),
            new Tasks(++counter, "International Markrting", "For Maketing ", this._Categories[1]),
            new Tasks(++counter, " Markrting", "For Selling ", this._Categories[3])

        ]
    }
    GetCategories() {
        let tempArray = [...this._Categories];
        return tempArray;
    }

    AddRecord(employee) {
        debugger
        this._Task.push(employee);
    }

    GetRecord() {
        let tempArray = [...this._Task];
        return tempArray;
    }

    getFavourite() {
        let tempArray = this._Task.filter((e) => e.Category.Id == 4)
        return tempArray;
    }
    setFavourite(id) {
        let task = this._Task.find((e) => e.Id == id);
        task.Category.Id = 4
        console.log(task);
    }

    AddTasks(title, postedOn, detail, progressid) {
        let category = this._Categories.find(c => c.Id == progressid);
        let task = new Tasks(
            this._Task.length + 1,
            title,
            detail,
            category
        );
        this._Task.push(task);
        // console.log(this._Tasks);
    }
    DeleteTasks(TaskId) {
        const foundAt = this._Task.findIndex(c => c.Id == TaskId);
        // alert(foundAt)
        if (foundAt > -1) {
            this._Task.splice(foundAt, 1);
        }
    }
    EditProduts(id, newTasks) {
        // debugger
        let found = this._Task.find(c => c.Id == id);
        found.Title = newTasks.edittitle;
        found.Detail = newTasks.editdetail;
        found.Category = newTasks.editprogress;

    }
    FindProducts(cid) {
        return this._Task.find(i => i.Id == cid)
    }

    findbycategory(categoryid) {
        // debugger
        if (categoryid == "string") {
            categoryid = parseInt(categoryid);
        }
        // const sepcategory  = this._Task.find(z=>z.Id===categoryid);
        const sepcategory = this._Task.filter(z => z.Category.Id == categoryid);
        return sepcategory;
    }


}













