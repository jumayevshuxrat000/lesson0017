{
    function flickSwitch(arr) {
        let a = true;
        return arr.map(b => {
            if (b === 'flick') {
                a = !a; 
            }
            return a;
        });
    }
    
    console.log(flickSwitch(["flick", "hello", "flick", "world", "flick"])); 
}

//2-masala
//Instructions
//Output
//Many programming languages provide the functionality of converting a string to uppercase or lowercase. For example, upcase/downcase in Ruby, upper/lower in Python, and toUpperCase/toLowerCase in Java/JavaScript, uppercase/lowercase in Kotlin. Typically, these methods won't change the size of the string.

//For example, in Ruby, str.upcase.downcase.size == str.size is true for most cases.

//However, in some special cases, the length of the transformed string may be longer than the original. Can you find a string that satisfies this criteria?

//For example, in Ruby, That means str.upcase.downcase.size > str.size

//You should just set the value of STRANGE_STRING to meet the previous criteria.

//Note: Meta programming is not allowed in this kata. So, the size of your solution is limited
{
    const STRANGE_STRING = "ß"
}



// 3-masala
//
// Write a function that will check if two given characters are the same case.

//If either of the characters is not a letter, return -1
//If both characters are the same case, return 1
//If both characters are letters, but not the same case, return 0
//Examples
//'a' and 'g' returns 1

//'A' and 'C' returns 1

//'b' and 'G' returns 0

//'B' and 'g' returns 0

// '0' and '?' returns -1


{
    function sameCase(a, b) {
        const isLetter = char => /^[a-zA-Z]$/.test(char);
    
        if (!isLetter(a) || !isLetter(b)) {
            return -1; 
        }
    
        const isLowerCase = char => char === char.toLowerCase(); 
        const isUpperCase = char => char === char.toUpperCase(); 
    
        if ((isLowerCase(a) && isLowerCase(b)) || (isUpperCase(a) && isUpperCase(b))) {
            return 1; 
        }
    
        return 0; 
    }
    
    console.log(sameCase("a", "a"));
    console.log(sameCase("A", "A")); 
    console.log(sameCase("a", "A")); 
    console.log(sameCase("a", "b")); 
    console.log(sameCase("a", "1"));
    console.log(sameCase("!", "A")); 
}
// 4-masala
//Usul/funksiyani bajaring, shunda u chiziqcha/pastki chiziq bilan ajratilgan so'zlarni tuya korpusiga aylantiradi . Chiqarishdagi birinchi so'z, agar asl so'z bosh harf bilan yozilgan bo'lsa, bosh harf bilan yozilishi kerak ( Upper Camel Case deb nomlanadi, ko'pincha Paskal ishi deb ham ataladi). Keyingi so'zlar har doim katta harf bilan yozilishi kerak.
{
    function toCamelCase(str) {
        if (!str) return "";
        const words = str.split(/[-_]/);
        const camelCased = words.map((word, index) => {
            if (index === 0) {
                return word;
            }
            return word.charAt(0).toUpperCase() + word.slice(1);
        });
        return camelCased.join("");
    }
    
    console.log(toCamelCase("the-stealth-warrior")); 
    console.log(toCamelCase("The_Stealth_Warrior")); 
    console.log(toCamelCase("")); 
}



// 5-masala
//Introduction
//The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

//Task
//Given a year, return the century it is in.
{
    function century(year) {
        const century = Math.ceil(year / 100); 
        return century;
    }
    
    console.log(century(1));    
    console.log(century(100));  
    console.log(century(101));  
    console.log(century(200)); 
    console.log(century(2024));
}



//6-masala
//Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

//Note: a and b are not ordered!
{
    function getSum(a, b) {
        if (a === b) {
            return a;
        }
    
        const start = Math.min(a, b);
        const end = Math.max(a, b);
        
        const n = end - start + 1; 
        return (n * (start + end)) / 2;
    }
    
    console.log(getSum(1, 5));    
    console.log(getSum(5, 1));  
    console.log(getSum(-1, 1));   
    console.log(getSum(3, 3));  
    console.log(getSum(-3, -1)); 
}