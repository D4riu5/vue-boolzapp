# vue-boolzapp
Es. Boolean 35 (25/01/23) 

check pdf file for project directive


BONUSES implemented:

- App Homepage, instead of chat.
- Contacts reply with a random message from a set of 26 pre-set replies.
- Last message under contact name gets truncated if too long, and displays full message on mousehover as a tooltip.
- If last message was sent by 'User', display a check icon before message. (only on contact list, not in the actual chat)
- Search bar resets when you open a chat: when searching for a specific contact, when clicked chat opens and the searchbar resets to empty. 
- Chat bubble next to the moon icon focuses the Search input on click. 
- Chat auto scrolls to the bottom automatically and older messages get pushed up. So no manual scroll to see last chat. 
- Each chat shows a chevron-down icon on mouseover, that opens a dropdown with a delete option. When message is deleted, text content gets replaced with: This message was deleted, in italics.
- Chatting activity under Contact name inside the chat. I.e. when a message is sent, these are shown under contact name in order: Online (for 2 seconds) -> typing... (for 2.5 seconds) -> Today at "HH:mm" (if chat is spammed by user, sometimes the "typing..." wont show up)
- Added User page on user image click. (the image on top left of screen). 
- Can change the User Name: Click on the pencil icon. Name changes only if Enter key is pressed. (a small text explains this when editing is started). 
- Can change the User Avatar: Click on the User image to open a modal with 8 pre-set avatars. Can also upload your own image. The avatar changes only when the save changes button is pressed, if not it resets to the last avatar selected.
- Added Escape button functionability: press ESC to go back to homepage, close modals, close emoji/sticker/gif tab. 
- Added Theme selection through Button on top of the screen (sun/moon). Dark-theme set as default. 
- Added images sharing: moved the attachment icon next to the emoji icon, when press can import image from pc, 
- Added Emojis. Open emoji tab with smiley emoji next to chat input. When Emoji is clicked it gets added in the chat input, and chat input gets focused, meaning you can type without clicking the input with the mouse. 
and it will be sent as a message in chat. 
- Added stickers. Sticker tab can be selected from emoji tab.
- Added gifs. Gif tab can be selected from emoji tab.
- Added voice messages:  
  - webpage asks for mic permision on page access. 
  - when Microphone icon is pressed, recording starts 
  - A "recording.." text is show to its left.
  - The recording button gets switched for a stop icon. 
  - Chat input gets disabled
  - When stop icon is pressed the recording stops, chat input gets abled, and a "send" icon shows up.
  - When send icon is pressed the voice message gets sent in chat.
  - chat emoji and image sharing are all disabled while recording a message.
  - Voice messages can be deleted like normal messages.
  - ---> Isues found <---: 
    1. Cant cancel the recording, meaning you cannot stop and not send the audio recorded. only fix: refresh the page. 
    2. Voice recording is not specific, i.e. if chat is switched with another contact's the recording still goes on and every chat shows the stop button, as if it was started in every chat.


