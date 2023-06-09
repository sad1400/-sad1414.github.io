 function formatDate(date) {
            let day = date.getDate();
            let month = date.getMonth();
            let year = date.getFullYear().toString().slice(2);

            if (day < 10) day = '0' + day;
            if (month < 10) month = '0' + month;

            return day + '.' + month + '.' + year;
        }

        let date = new Date(2023, 06, 3);
        console.log(formatDate(date)); 
