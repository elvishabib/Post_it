<template>
   <div class="container">
    <h2>Modify your Postit</h2>
    <router-link style="text-decoration: none; color: inherit;" to ="/"> <img src="../assets/la-fleche.png"><h3>My Post-it</h3></router-link>
    <div class="c-note">
        <input  v-model="title" class="note" > 
       <textarea cols="30" rows="10" v-model="content" class="note"></textarea>
       <button  class="note"  @click.prevent="modifyPost()"><img src="../assets/pencil.png"></button>
    </div>
</div>
</template>
<script>
import axios from 'axios';
export default {
    props: ['_id'],
    data() {
        return {
            post: this.post,
            title: this.title,
            content: this.content
        }
    },
    mounted() {
        const headers = { "Content-Type": "application/json" };
        axios.get("https://post-it-7m1i.onrender.com/notes/" + this.$route.params._id, { headers })
            .then((reponse) => {
                this.post = reponse.data;
                this.title = reponse.data.title;
                this.content = reponse.data.content;
            });
    },
    methods:{
        modifyPost(){
        const posts = {title: this.title, content: this.content };
        const headers = {
            "Content-Type": "application/json"
            };
            axios.put("https://post-it-7m1i.onrender.com/notes/" + this.$route.params._id, posts, {headers})
            .then(response => this.note_id = response.data.note_id);
            this.$router.push('/');
        }
        
    }
    
}
</script>
