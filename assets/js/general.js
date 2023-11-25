// Year
const year = 2023;
// Your Name
const author = "LucaBn";
// Your image URLs list
const imgUrlList = [
  "https://raw.githubusercontent.com/maxogden/cats/master/cat_photos/kublai1.jpg",
  "https://raw.githubusercontent.com/maxogden/cats/master/cat_photos/kublai2.jpg",
  "https://raw.githubusercontent.com/maxogden/cats/master/cat_photos/kublai3.jpg",
  "https://raw.githubusercontent.com/maxogden/cats/master/cat_photos/kublai4.jpg",
  "https://raw.githubusercontent.com/maxogden/cats/master/cat_photos/kublai5.jpg",
  "https://raw.githubusercontent.com/maxogden/cats/master/cat_photos/kublai6.jpg",
  "https://raw.githubusercontent.com/maxogden/cats/master/cat_photos/kublai7.jpg",
  "https://raw.githubusercontent.com/maxogden/cats/master/cat_photos/kublai8.jpg",
  "https://raw.githubusercontent.com/maxogden/cats/master/cat_photos/kublai9.jpg",
  "https://raw.githubusercontent.com/maxogden/cats/master/cat_photos/kublai10.jpg",
  "https://raw.githubusercontent.com/maxogden/cats/master/cat_photos/kublai11.jpg",
  "https://raw.githubusercontent.com/maxogden/cats/master/cat_photos/kublai12.jpg",
  "https://raw.githubusercontent.com/maxogden/cats/master/cat_photos/kublai13.jpg",
  "https://raw.githubusercontent.com/maxogden/cats/master/cat_photos/kublai14.jpg",
  "https://raw.githubusercontent.com/maxogden/cats/master/cat_photos/kublai15.jpg",
  "https://raw.githubusercontent.com/maxogden/cats/master/cat_photos/kublai16.jpg",
  "https://raw.githubusercontent.com/maxogden/cats/master/cat_photos/kublai17.jpg",
  "https://raw.githubusercontent.com/maxogden/cats/master/cat_photos/kublai18.jpg",
  "https://raw.githubusercontent.com/maxogden/cats/master/cat_photos/kublai19.jpg",
  "https://raw.githubusercontent.com/maxogden/cats/master/cat_photos/kublai20.jpg",
  "https://raw.githubusercontent.com/maxogden/cats/master/cat_photos/kublai21.jpg",
  "https://raw.githubusercontent.com/maxogden/cats/master/cat_photos/kublai22.jpg",
  "https://raw.githubusercontent.com/maxogden/cats/master/cat_photos/kublai23.jpg",
  "https://raw.githubusercontent.com/maxogden/cats/master/cat_photos/kublai24.jpg",
];

const localStorageKey = `ca-${author}-${year}`;
const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();
const currentDay = new Date().getDate();
const pendingBoxes = (() => {
  if (currentYear > year) {
    return 24;
  }
  if (currentYear === year && currentMonth === 11) {
    return currentDay;
  }
  return 0;
})();

const openedBoxes = {
  _value: JSON.parse(localStorage.getItem(localStorageKey)),
  get value() {
    return this._value;
  },
  set value(newValue) {
    this._value = newValue;
  },
};

const modalPictureUrl = {
  _value: "",
  get value() {
    return this._value;
  },
  set value(newValue) {
    this._value = newValue;
  },
};

const updateStore = (values) => {
  const stringifiedArray = JSON.stringify(values);
  localStorage.setItem(localStorageKey, stringifiedArray);
};

const storeValue = (value) => {
  const storedValues = localStorage.getItem(localStorageKey);

  if (!storedValues) {
    const values = [value];
    updateStore(values);
    openedBoxes.value = values;
  } else {
    const values = JSON.parse(storedValues);

    if (values.indexOf(value) === -1) {
      values.push(value);
      updateStore(values);
      openedBoxes.value = values;
    }
  }
};

const handleModal = (imgUrl) => {
  modalPictureUrl.value = imgUrl;

  if (imgUrl === "") {
    document.body.classList.remove("overflow-hidden");
  } else {
    document.body.classList.add("overflow-hidden");
  }
};

new Vue({
  el: "#app",
  data: {
    year: year,
    author: author,
    imgUrlList: imgUrlList,
    pendingBoxes: pendingBoxes,
    openedBoxes: openedBoxes,
    modalPictureUrl: modalPictureUrl,
  },
  methods: {
    openBox: function (index) {
      storeValue(index);
    },
    showBigPicture: function (imgUrl) {
      handleModal(imgUrl);
    },
  },
});

new Snowflakes({
  color: "#CEF2FD",
  count: 15,
});
