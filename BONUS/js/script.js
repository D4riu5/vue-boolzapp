// VUE JS
  const { createApp } = Vue;

  createApp({
    data() {
      return {
        appLoaded: false,
        choosingAvatar: false,
        activeAvatar: 0,
        darkTheme: false,
        emojiOpen: false,
        onHomePage: true,
        userDefaultName: 'Darius',
        isEditing: false,
        time: '',
        searchBarInput: '',
        activeContact: null,
        activeSettings: false,
        newInput: '',
        userProfile: {
          name: 'Darius',
          avatar: '',
        },
        contacts: [
          // Michele
          {
          name: 'Michele',
          avatar: '_1',
          visible: true,
          active: false,
          messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Hai portato a spasso il cane?',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Ricordati di stendere i panni',
            status: 'sent'
            },
            {
            date: '10/01/2020 16:15:22',
            message: 'Tutto fatto!',
            status: 'received'
            }
          ],
          },
          // Fabio
          {
          name: 'Fabio',
          avatar: '_2',
          visible: true,
          active: false,
          messages: [
            {
            date: '20/03/2020 16:30:00',
            message: 'Ciao come stai?',
            status: 'sent'
            },
            {
            date: '20/03/2020 16:30:55',
            message: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
            },
            {
            date: '20/03/2020 16:35:00',
            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent'
          }
          ],
          },
          // Samuele
          {
          name: 'Samuele',
          avatar: '_3',
          visible: true,
          active: false,
          messages: [
            {
            date: '28/03/2020 10:10:40',
            message: 'La Marianna va in campagna',
            status: 'received'
            },
            {
            date: '28/03/2020 10:20:10',
            message: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
            },
            {
            date: '28/03/2020 16:15:22',
            message: 'Ah scusa!',
            status: 'received'
            }
          ],
          },
          // Alessandro B
          {
          name: 'Alessandro B.',
          avatar: '_4',
          visible: true,
          active: false,
          messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Si, ma preferirei andare al cinema',
            status: 'received'
            }
          ],
          },
          // Alessandro L
          {
          name: 'Alessandro L.',
          avatar: '_5',
          visible: true,
          active: false,
          messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Ricordati di chiamare la nonna',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Va bene, stasera la sento',
            status: 'received'
            }
          ],
          },
          // Claudia
          {
          name: 'Claudia',
          avatar: '_6',
          visible: true,
          active: false,
          messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Ciao Claudia, hai novità?',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Non ancora',
            status: 'received'
            },
            {
            date: '10/01/2020 15:51:00',
            message: 'Nessuna nuova, buona nuova',
            status: 'sent'
            }
          ],
          },
          // Federico
          {
          name: 'Federico',
          avatar: '_7',
          visible: true,
          active: false,
          messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Fai gli auguri a Martina che è il suo compleanno!',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Grazie per avermelo ricordato, le scrivo subito!',
            status: 'received'
            }
          ],
          },
          // Davide
          {
          name: 'Davide',
          avatar: '_8',
          visible: true,
          active: false,
          messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Ciao, andiamo a mangiare la pizza stasera?',
            status: 'received'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:51:00',
            message: 'OK!!',
            status: 'received'
            }
          ],
          }
        ],
        emojis: [
          "😀","😁","😂","😃","😄","😅","😆","😇","😈","😉","😊","😋","😌","😍","😎","😏","😐","😑","😒","😓","😔","😢","👍","👎","💪","🙏","🚶‍♀️","🐶","🌺","🍔","🌞","🍋","⭐","🚗","🎵","🌹","❤️"
        ],
        avatars: [
          // avatar 01
          {
            selected: false,
            picture: 'img/my_avatar_01.jpg'
          },
          // avatar 02
          {
            selected: true,
            picture: 'img/my_avatar_02.jpg'
          },
          // avatar 03
          {
            selected: false,
            picture: 'img/my_avatar_03.jpg'
          },
          // avatar 04
          {
            selected: false,
            picture: 'img/my_avatar_04.jpg'
          },
          // avatar 05
          {
            selected: false,
            picture: 'img/my_avatar_05.jpg'
          },
          // avatar 06
          {
            selected: false,
            picture: 'img/my_avatar_06.jpg'
          },
          // avatar 07
          {
            selected: false,
            picture: 'img/my_avatar_07.jpg'
          },
          // avatar 08
          {
            selected: false,
            picture: 'img/my_avatar_08.jpg'
          }
        ]
        }
    },
    computed:{
      lastMessage() {
        return this.contacts[this.activeContact].messages[this.contacts[this.activeContact].messages.length - 1];
       },
    },
    methods:{
      toggleActive(contact) {
        contact.active = !contact.active
      },
      setActiveContact(index) {
        this.activeContact = index;
        this.searchBarInput = '';
        this.findContacts();
        this.getLocalTime();
        this.onHomePage = false;
        this.closeEmojiCanvas()
      },
      addNewMessage(index){
        let messageIndexes = [];
        this.contacts[index].messages.push({date: 'now', message: this.newInput, status: 'sent'});
        messageIndexes.push(this.contacts[index].messages.length -1);
        this.newInput = '';

        // reply
        setTimeout(() => {
          console.log("Delayed for 1 second.");
          this.contacts[index].messages.push({date: 'now', message: this.getRandomMessage(), status: 'received'});
          messageIndexes.push(this.contacts[index].messages.length -1);
        }, 1000)
        
        // update date time from now to current time -1 minute
        setTimeout(() => {
          messageIndexes.forEach((i) => {
            this.contacts[index].messages[i].date = this.getLocalTime();
          });
        }, 60000)
      },
      findContacts(){
        this.contacts.forEach(contact => {
          if (contact.name.toLowerCase().includes(this.searchBarInput.toLowerCase())) {
            contact.visible = true;
          } else {
            contact.visible = false;
          }
          
        });
      },
      scrollUp() {
        let myLastMessage = this.$refs.messagesContainer;
        myLastMessage.scrollTop = myLastMessage.scrollHeight;
      },
      getRandomMessage() {
        messages = [
          "Sono così felice oggi 😊",
          "Come va la tua giornata?",
          "Credi in te stesso! 👍",
          "Ok.",
          "Siamo tutti unici e speciali ❤️",
          "Scusa, non ho capito.",
          "Siamo in grado di fare grandi cose! 🌟",
          "Hai intenzione di uscire stasera?",
          "Non posso rispondere adesso, mi dispiace.",
          "Hai bisogno di aiuto?",
          "La positività è contagiosa! 😁",
          "Qual è il tuo piatto preferito?",
          "Siamo capaci di superare qualsiasi ostacolo! 💪",
          "Hai programmi per il fine settimana?",
          "La gratitudine è la chiave della felicità! 🙏",
          "Come mai mi chiedi questo?",
          "La vita è un regalo, godiamola! 🎁",
          "Va bene..",
          "Siamo tutti connessi! 🌎",
          "Hai bisogno di parlare?",
          "Siamo qui per sostenerci a vicenda! 😭😭😭",
          "Il lavoro di squadra 🤝 è fondamentale per ottenere successo in ogni progetto, lavoriamo insieme con impegno e determinazione.",
          "La generosità 🤝 e la gentilezza 💕 sono le chiavi per costruire un mondo migliore, facciamo la nostra parte!🌟",
          "Mi dispiace, non posso partecipare alla riunione di oggi perché ho un impegno improrogabile 🤕",
          "Cosa ne dici di uscire a fare una passeggiata nel parco questo fine settimana? ☀️🍁",
          "No"
          ]
        return messages[Math.floor(Math.random() * messages.length)];
      },
      removeMessage(activeChat, msgIndex){
        this.contacts[activeChat].messages[msgIndex].message = "This message was deleted";

        if (this.contacts[activeChat].messages[msgIndex].status == 'received') {
          this.contacts[activeChat].messages[msgIndex].status = 'received'
        } else{
          this.contacts[activeChat].messages[msgIndex].status = 'sent'
        }
      },
      getLocalTime(){

        let date = new Date();
        // removing 1 minute from minutes
        date.setMinutes(date.getMinutes() - 1);

        return date.toLocaleString('it-IT', {
          // day: '2-digit',
          // month: '2-digit',
          // year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          // second: '2-digit'
        });
      },
      changeTimeFormat(){
        this.contacts.forEach((contact) => {
          contact.messages.forEach((message) => {
           message.date = message.date.substring(0, message.date.indexOf(' '));
          });
      });
      },
      editUserName() {
        this.isEditing = true;
        this.$refs.changeName.removeAttribute("disabled");
        this.$refs.changeName.focus();
      },
      disableInput(){
        this.$refs.changeName.setAttribute("disabled", true);
        this.$refs.changeName.blur();
        this.userProfile.name = this.userDefaultName;
        this.isEditing = false;
      },
      saveNewName(){
        this.userDefaultName = this.userProfile.name;
        this.$refs.changeName.blur();
        this.$refs.changeName.setAttribute("disabled", true);
        this.isEditing = false;
      },
      openEmojiCanvas(){
        if (this.emojiOpen == true) {
          this.closeEmojiCanvas();
        } else {
          setTimeout(() => {
            this.scrollUp();
          }, 1)
          this.emojiOpen = true;
        };
      },
      closeEmojiCanvas(){
        setTimeout(() => {
          this.scrollUp();
        }, 1)
        this.emojiOpen = false;
      },
      addEmoji(singleEmoji){
        this.newInput += singleEmoji
        this.$refs.msgInput.focus();
      },
      switchTheme(){
        if (!this.darkTheme) {
          this.darkTheme = true;
        } else{
          this.darkTheme = false;
        }
      },
      selectNewAvatar(i){
        this.activeAvatar = i;
        if (this.avatars[this.activeAvatar].selected === true) {
          this.avatars[this.activeAvatar].selected = false;
        } else {
          this.avatars.forEach(avatar => {
            avatar.selected = false;
        });
          this.avatars[this.activeAvatar].selected = true;
        }
      },
      assignAvatar() {
        this.avatars.forEach(avatar => {
            if (avatar.selected === true) {
                this.userProfile.avatar = avatar.picture;
            }
        });
      },
      resetAvatarSelection(){
        // when called, search if selected true is the same as avatar.picture 
        this.avatars.forEach(avatar => {
          if (avatar.selected == true) {
            if (avatar.picture !== this.userProfile.picture) {
              avatar.selected = false;
              this.avatars.forEach(avatar => {
                if (avatar.picture == this.userProfile.avatar) {
                  avatar.selected = true;
                }
              })
            }
          }
        })
      }
    },
    created() {
      this.changeTimeFormat();
      this.assignAvatar();
      this.appLoaded = true;
    },
    updated(){
      if (this.onHomePage == false) {
        this.scrollUp();
      };
    },
    mounted() {
      // event on ESC button to reset activeContact, and go back to homepage
      window.addEventListener('keydown', (e) => {
        if (e.keyCode === 27) {
          if (this.choosingAvatar == true) {
            this.resetAvatarSelection();
            this.choosingAvatar = !this.choosingAvatar;
            

          } else if (this.isEditing == false && !this.emojiOpen && !this.activeSettings) {
            this.activeContact = null;
            this.searchBarInput = '';
            this.findContacts();
            this.activeSettings = false;
            this.onHomePage = true;

          } else if(this.isEditing){
            this.userProfile.name = this.userDefaultName;
            this.disableInput();

          } else if (this.activeSettings) {
            this.activeSettings = false;

          } else if (this.emojiOpen) {
            this.closeEmojiCanvas();


          } 
        }
    });
  
  }
  }).mount('#app')