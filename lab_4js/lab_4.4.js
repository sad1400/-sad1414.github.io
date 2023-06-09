 "use strict";
        let obj = {
            className: 'open menu',

            addClass(cls) {
                let classes = this.className.split(' ');
                if (!classes.includes(cls)) {
                    classes.push(cls);
                    this.className = classes.join(' ');
                }
                return this;
            },

            removeClass(cls) {
                let classes = this.className.split(' ');
                let index = classes.indexOf(cls);
                if (index !== -1) {
                    classes.splice(index, 1);
                    this.className = classes.join(' ');
                }
                return this;
            }
        };
        console.log(obj.addClass('new'));
        console.log(obj.removeClass('open'));
        console.log(obj.removeClass('menu'));
