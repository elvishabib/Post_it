import { createRouter, createWebHistory} from 'vue-router'
import Home from '@/components/Home.vue'
import Note from '@/components/Note.vue'
import AddNote from '@/components/AddNote.vue'
import EditNote from '@/components/EditNote.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            name: 'note',
            path: '/note/:_id/',
            component: Note, 
            props: true,
        },
        {
            name: 'addNote',
            path: '/addNote',
            component: AddNote,
        },
        {
            name: 'editNote',
            path: '/editNote/:_id/',
            component: EditNote,
            props: true,
        }
    ]
})

export default router;