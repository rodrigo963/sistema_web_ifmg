

function cadastro() {
    import { baseApiUrl } from '@/global'
    import axios from 'axios'

    export default {
        data: function () {
            return {
                user: {},
                users: []
            }
        },
        methods: {
            loadUsers() {
                const url = `${baseApiUrl}/user`
                axios.get(url).then(res => {
                    this.users = res.data
                    console.log(this.users)
                })
            }
        },
        mounted() {
            this.loadUsers()
        }
    }
}
   // axios['post'](`${baseApiUrl}/user`, this.user)
  //}
