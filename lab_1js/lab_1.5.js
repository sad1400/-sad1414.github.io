  "use strict"
        "use strict";
        let n = prompt("Введите число строк");
        let s1 = "dog dog dog cat cat dog";
        let s2 = "dog dog cat cat dog dog";
        let s3 = "dog cat cat dog dog dog";
        let s4 = "cat cat dog dog dog cat";
        let s5 = "cat dog dog dog cat cat";
        var str = [s1, s2, s3, s4, s5];
        for (let i = 0; i < n; i++) {
            console.log(str[i % 5]);
        }
