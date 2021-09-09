 class List {
        constructor() {
            this.arr = [];
        }

        add(value) {
            this.arr.push(value)
        }

        remove(index) {
            if (index >= this.arr.length || index < 0) {
            }
            else {
                this.arr.splice(index,1);
            }
        }

        get(index)  {
            if (index >= this.arr.length || index < 0) {
            }
            else {
               return this.arr[index]
            }
        }

        size () {
            return this.arr.length;
        }
    }
