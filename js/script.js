// VUE JS
  const { createApp } = Vue;

  createApp({
    data() {
      return {
        searchBarInput: '',
        activeContact: null,
        newInput: '',
        userProfile: {
          name: 'Darius',
          avatar: '_me',
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
          ]
      }
    },
    methods:{
      toggleActive(contact) {
        contact.active = !contact.active
      },
      setActiveContact(index) {
        // with this the searchBarInput resets, but the contacts dont update
        // this.searchBarInput = '';
        this.activeContact = index;
      },
      addNewMessage(index){
        this.contacts[index].messages.push({date: 'placeholder date', message: this.newInput, status: 'sent'});
        this.newInput = '';

        setTimeout(() => {
          console.log("Delayed for 1 second.");
          this.contacts[index].messages.push({date: 'placeholder date', message: this.getRandomMessage(), status: 'recieved'});
        }, 1000)
        
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
          "Siamo qui per sostenerci a vicenda! 😭😭😭"
          ]
        return messages[Math.floor(Math.random() * messages.length)];
      }
    },
    mounted() {
      // event on ESC button to reset activeContact, and go back to homepage
      window.addEventListener('keydown', (e) => {
        if (e.keyCode === 27) {
            this.activeContact = null;
            this.searchBarInput = '';
        }
    });
    console.log(`the component is now mounted.`);
  }
  }).mount('#app')

