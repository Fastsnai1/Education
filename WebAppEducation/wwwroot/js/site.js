// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
const { createApp, ref } = Vue

const app = createApp({
    data() {
        return {
            day: ref(13),
            month: ref(8),
            year: ref(2024),
            drow: ref([]),
        }
    },
    watch: {
        //'day': function (newValue, oldvalue) {
        //    this.day = newValue;
        //    this.weekDay = this.getWeekDay();
        //},
    },
    methods: {
        getWeekDay() {
            let date = new Date(this.year, this.month, this.day);
            let days = [
                'Воскресенье',
                'Понедельник',
                'Вторник',
                'Среда',
                'Четверг',
                'Пятница',
                'Суббота'];

            return days[date.getDay()];
        },
        isLeapYear() {
            if (this.year % 4 == 0 & this.year % 100 != 0) {
                return "Да!";
            }
            if (this.year % 400 == 0) {
                return "Да!";
            }
            return "Нет";
        },
        getOldUser() {
            let year = new Date().getFullYear();
            var result = year - this.year;
            return result;
        },
        showTablo() {
            var date = `${this.day}_${this.month}_${this.year}`
            var drow = ["","","","",""]
            for (var i = 0; i < date.length; i++) {

                switch (date[i]) {
                    case "0":
                        drow[0] += "***_";
                        drow[1] += "*_*_";
                        drow[2] += "*_*_";
                        drow[3] += "*_*_";
                        drow[4] += "***_";
                        break;
                    case "1":
                        drow[0] += "_*__";
                        drow[1] += "**__";
                        drow[2] += "_*__";
                        drow[3] += "_*__";
                        drow[4] += "***_";
                        break;
                    case "2":
                        drow[0] += "***_";
                        drow[1] += "__*_";
                        drow[2] += "_*__";
                        drow[3] += "*___";
                        drow[4] += "***_";
                        break;
                    case "3":
                        drow[0] += "***_";
                        drow[1] += "__*_";
                        drow[2] += "***_";
                        drow[3] += "__*_";
                        drow[4] += "***_";
                        break;
                    case "4":
                        drow[0] += "*_*_";
                        drow[1] += "*_*_";
                        drow[2] += "***_";
                        drow[3] += "__*_";
                        drow[4] += "__*_";
                        break;
                    case "5":
                        drow[0] += "***_";
                        drow[1] += "*___";
                        drow[2] += "*_*_";
                        drow[3] += "__*_";
                        drow[4] += "***_";
                        break;
                    case "6":
                        drow[0] += "***_";
                        drow[1] += "*___";
                        drow[2] += "*_*_";
                        drow[3] += "*_*_";
                        drow[4] += "***_";
                        break;
                    case "7":
                        drow[0] += "***_";
                        drow[1] += "__*_";
                        drow[2] += "__*_";
                        drow[3] += "__*_";
                        drow[4] += "__*_";
                        break;
                    case "8":
                        drow[0] += "***_";
                        drow[1] += "*_*_";
                        drow[2] += "***_";
                        drow[3] += "*_*_";
                        drow[4] += "***_";
                        break;
                    case "9":
                        drow[0] += "***_";
                        drow[1] += "*_*_";
                        drow[2] += "***_";
                        drow[3] += "__*_";
                        drow[4] += "***_";
                        break;
                    case "_":
                        drow[0] += "___";
                        drow[1] += "___";
                        drow[2] += "___";
                        drow[3] += "___";
                        drow[4] += "___";
                        break;
                    default:
                }
            }
            for (var i = 0; i < drow.length; i++) {
                console.log(drow[i])
            }
            this.drow = drow;
        }
    }

})

app.mount('#app')