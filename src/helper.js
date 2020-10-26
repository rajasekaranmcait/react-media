export const storageHandler = {

    setLocalStorage: function (name, value) {
        localStorage.setItem(name, value);
    },

    getLocalStorage: function (name) {
        if (localStorage.getItem(name) == null) {
            return '';
        } else {
            try {
                return JSON.parse(localStorage.getItem(name));
            }
            catch (err) {
                return localStorage.getItem(name);
            }

        }
    },

    eraseLocalStorage: function (name) {
        localStorage.removeItem(name);
    },

    deleteAllLocalStorage: function () {
        localStorage.clear();
    }
}