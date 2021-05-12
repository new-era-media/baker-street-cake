export const state = () => ({});

export const getters = {};

export const mutations = {};

export const actions = {
  ajax: async (context, { data }) => {
    console.log(1)
    fetch("send.php", {
      method: "post",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body: "&data=" + data
    })
      .then(function(data) {
        console.log("Данные успешно отправлены", data);
      })
      .catch(function(error) {
        console.log("Ошибка отправки данных", error);
      });
  }
};
