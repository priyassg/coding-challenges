function ListNode(val){
    this.val = val;
    this.next = null;
}

class Person{
    constructor(name){
        this.name = name;
        this.friends = null;
    }

    makeFriends(person){
        makeFriendsHelper.call(this,person);
        makeFriendsHelper.call(person,this);
    }
    
    removeFriends(person){
        removeFriendsHelper.call(this, person);
        removeFriendsHelper.call(person, this);
    }
    
    getDirectFriends(){
        let result = [];
        if(!this.friends) return result;
        let p = this.friends;
        while(p){
            result.push(p.val.name);
            p = p.next;
        }
        
        return result;
    
    }
    
    getIndirectFriends(){
        const seen = new Set(this.getDirectFriends());
        seen.add(this.name);
        const result = [];

        if(!this.friends) return result;
        let p = this.friends;
        while(p){
            getIndirectFriendsHelper(p, result, seen);
            p = p.next;
        }

        return result;
    }
}

const priya = new Person('priya');
const arpit = new Person('arpit');
const esha = new Person('esha');
const ck = new Person('ck');
const kushal = new Person('kushal');
const shreyas = new Person('shreyas');
const nidhi = new Person('nidhi');
const doshi = new Person('doshi');
const harneet = new Person('harneet');

priya.makeFriends(arpit);
priya.makeFriends(ck);
priya.makeFriends(esha);
priya.makeFriends(kushal);
arpit.makeFriends(shreyas);
shreyas.makeFriends(nidhi);
arpit.makeFriends(doshi);
shreyas.makeFriends(doshi);
kushal.makeFriends(harneet);


console.log('Priya Direct Friends: ',...priya.getDirectFriends());

console.log('Priya Indirect Friends: ',...priya.getIndirectFriends());

console.log('Arpit Direct Friends: ',...arpit.getDirectFriends());

console.log('Arpit Indirect Friends: ',...arpit.getIndirectFriends());
console.log('---------------------------------------------')
priya.removeFriends(arpit);
console.log('Priya Direct Friends: ',...priya.getDirectFriends());

console.log('Priya Indirect Friends: ',...priya.getIndirectFriends());

console.log('Arpit Direct Friends: ',...arpit.getDirectFriends());

console.log('Arpit Indirect Friends: ',...arpit.getIndirectFriends());

priya.makeFriends(arpit);
console.log('---------------------------------------------')
console.log('Priya Direct Friends: ',...priya.getDirectFriends());

console.log('Priya Indirect Friends: ',...priya.getIndirectFriends());

console.log('Arpit Direct Friends: ',...arpit.getDirectFriends());

console.log('Arpit Indirect Friends: ',...arpit.getIndirectFriends());

function getIndirectFriendsHelper(personNode, result, seen){

    let p = personNode.val.friends;
    while(p){
        let name = p.val.name;
        if(! (seen.has(name))){
            seen.add(name);
            result.push(p.val.name);
            getIndirectFriendsHelper(p, result, seen);
        }
        p = p.next;
        
    }

}

function makeFriendsHelper(person){
    if(!this.friends){
        this.friends = new ListNode(person);
        return
    }
    let p = this.friends;
    while(p.next){
        if(p != person && p.next != person){
            p = p.next;
        }else {
            return;
        }
        
    }
    p.next = new ListNode(person);
}

function removeFriendsHelper(person){
    if(!this.friends) return false;
        if(this.friends.val == person){
            this.friends = this.friends.next;
            return true;
        }
        let p = this.friends;
        while(p){
            if(p.val != person){
                p = p.next;
            }else{
                p.next = p.next.next;
                return true;
            }
        }

        return false;
}

