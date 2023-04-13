<!-- eslint-disable vue/no-parsing-error -->
<template>
  <h1>POST-IT</h1>
  <router-link style="text-decoration: none; color: inherit" to="/addNote">CREATE A POSTIT<img
      src="../assets/plus.png" /></router-link>
  <div class="posts">
    <div v-for="post in posts" :key="post" class="post">
      <div class="title">
        <h3>{{ truncate(post.title, 20) }}</h3>
      </div>
      <p v-for="content in post.content" :key="content">
        {{ truncate(content, 200) }}
      </p>
      <router-link :to="{ name: 'note', params: { _id: post._id } }">
        <img src="../assets/fleche.png" alt="" /></router-link>
    </div>
  </div>
  <div class="btn-wrapper">
      <button class="btn" type="button" :disabled="currentPage === 1" @click="changePage(-1)"> &lt&lt Prev</button>
      <button class="btn" type="button" :disabled="currentPage === 4" @click="changePage(1)">Next >></button>
    </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      prePage: 2,
      currentPage: 1,
      posts: [],
    };
  },
  mounted() {
    const headers = { "Content-Type": "application/json" };
    axios
      .get("https://post-it-7m1i.onrender.com/notes/", { headers })
      .then((reponse) => {
        this.posts = reponse.data.notes;
      //   console.log(this.posts);
      //   const star = (this.currentPage - 1) * this.prePage
      // const end = this.currentPage * this.prePage
      // const result = this.posts.slice(star, end)
      // return result
      });
  },
  changePage(num){
    this.currentPage = this.currentPage + num
  },
  updated() {
    const headers = { "Content-Type": "application/json" };
    axios
      .get("https://post-it-7m1i.onrender.com/notes/", { headers })
      .then((reponse) => {
        this.posts = reponse.data.notes;
      });
  },
  methods: {
    truncate(string, len) {
      if (string.length > len) {
        string = string.substring(0, len);
        return string + "...";
      } else
        return string;
    },
  }
};
</script>
<style>
.posts {
  padding-top: 10vh;
  display: grid;
  margin: 0 auto;
  gap: 1rem;
}

.posts :nth-child(3n) {
  background-color: bisque;
}

.posts :nth-child(4n) {
  background-color: azure;
}

.post {
  padding: 1rem;
  background-color: rgb(240, 230, 140);
  box-shadow: 0px 10px 10px 10px grey;
  height: 35vh;
  margin: 10%;
  word-wrap: break-word;
}

.btn-wrapper {
  margin: 20px;
}

.btn {
  color: white;
  font-size: 20px;
  font-weight: 700;
  background-color: #ffa2a2;
  border: none;
  padding: 14px 28px;
  border-radius: 22px;
  cursor: pointer;
}

.btn:hover {
  background-color: #fdadad;
}

.btn:focus {
  outline: none;
}

.btn:active {
  background-color: #ef8c8c;
}

.btn:disabled {
  background: #dddddd;
}


/*RESPONSIVE*/
@media (min-width: 600px) {
  .posts {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 950px) {
  .posts {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>