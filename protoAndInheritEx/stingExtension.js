(function solve(){
    String.prototype.ensureStart = function (str) {
        if (!this.startsWith(str)) {
            return str + this
        }
        else {
            return '' + this
        }
    }
    String.prototype.ensureEnd = function (str) {
        if (!this.endsWith(str)) {
            return this + str
        }
        else {
            return '' + this
        }
    }
    String.prototype.isEmpty = function () {
     return  this.length === 0
    }
    String.prototype.truncate = function (n) {
        if (n < 4) {
            return '.'.repeat(n)
        }
        if (this.toString().length <= n) {
            return this.toString()
        }
        else {
            let lastIndex = this.substring(0, n-2).lastIndexOf(' ')
            if(lastIndex !== -1){
                return this.substring(0,lastIndex) + '...'
            }
            else{
                return this.substring(0,n-3) + '...'
            }
        }
    }
    String.format = function (string, ...params) {
        let str = string;
        params.forEach((el,i) => {
            str = str.replace(`{${i}}`, el)
        })
        return str
        
    }
})()
console.log(String.format('The {0} {1} fox',
  'quick', 'brown'));
console.log(String.format('jumps {0} {1}',
  'dog'));


// console.log(str.truncate(4))
// console.log(str.truncate(2))



