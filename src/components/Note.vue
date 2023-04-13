<template>
    <div class="monPost">

        <router-link style="text-decoration: none; color: inherit; margin-top: 5vh" to="/"><img
                src="../assets/fleche-gauche.png" alt="">BACK TO MY POSTIT</router-link>
        <div class="post1">
            <h2>{{ post?.title }}</h2>
            <p v-for="content in post?.content" :key="content">
                {{ content }}
            </p>
            <router-link :to="{ name: 'editNote', params: { id: _id } }"><img src="../assets/pencil.png"></router-link>
            <button class="delete" @click.prevent="deletePost()"><img src="../assets/trash.png"></button>
        </div>

    </div>
</template>
<style>
.monPost {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    height: 100vh;
}

.post1 {
    padding: 1rem;
    background-color: rgb(240, 230, 140);
    box-shadow: 0px 10px 10px 10px grey;
    height: 50vh;
    margin-top: 25vh;
    margin-right: 8%;
    width: 40%;
    display: flex;
    flex-direction: column;
    word-wrap: break-word;
}

.delete {
    margin-top: 4vh;
}
</style>
<script>
import axios from 'axios'
export default {
    props: ['_id'],
    data() {
        return {
            post: null,
        }
    },
    mounted() {
        const headers = { "Content-Type": "application/json" };
        axios.get("https://post-it-7m1i.onrender.com/notes/" + this.$route.params._id, { headers })
            .then((reponse) => {
                this.post = reponse.data;
            });
    },
    methods: {
        deletePost() {
            const deleted = {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                }
            };
            fetch("https://post-it-7m1i.onrender.com/notes/" + this.$route.params._id, deleted)
            this.$router.push('/');
        }
    }
}
</script>