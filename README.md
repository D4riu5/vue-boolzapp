# vue-boolzapp
Es. Boolean 35 (25/01/23) 

check pdf file for project directive


BONUSES implemented:

- App Homepage, instead of open-chat on page load.
- Contacts reply with a random message from a list of 26 pre-set replies.
- Last message under contact name gets truncated if too long and displays full message on mousehover as a tooltip.
- If last message was sent by 'User', display a check icon before message. (only on contact list, not in the actual chat)
- Search bar resets when you open a chat: when searching for a specific contact, if clicked, chat opens and searchbar resets. 
- Chat bubble next to 'User' image (top left) focuses the Search input on click. 
- Chat auto-scrolls to bottom of screen. No more manual scroll to see last message sent/received in chat. 
- Each chat shows a chevron-down icon on mouseover that opens a dropdown menu with a delete option. When message is deleted, text content gets replaced with: This message was deleted, in italics.
- Chatting activity under contact name inside the chat. I.e. when a message is sent, these are shown under contact name in order: Online (for 2 seconds) -> typing... (for 2.5 seconds) -> Today at "HH:mm". (if chat is spammed by user, sometimes the "typing..." wont show up)
- Added User page on User image click. (the image on top left of screen). 
- Can change the User Name by clicking on the pencil icon. Name changes only if Enter key is pressed.
- Can change the User Avatar by clicking on the User image to open a modal with 8 pre-set avatars. Can also upload your own image. The avatar changes only when the save changes button is pressed, if not it resets to the last avatar selected.
- Added Theme selection through button (top left -> sun/moon). Dark-theme set as default. 
- Added image sharing: moved the attachment icon next to the emoji icon. When pressed, can import images from pc. 
- Added Emojis. Open emoji tab with smiley emoji next to chat input. When Emoji is clicked it gets added in the chat input, and chat input gets focused.
- Added stickers. Sticker tab can be selected from emoji tab.
- Added gifs. Gif tab can be selected from emoji tab.
- Added Escape button functionability: press ESC to go back to homepage, close modals, close emoji/sticker/gif tabs. 
- Added voice messages:  
  - webpage asks for mic permission on page access. 
  - recording starts when the microphone icon is pressed.
  - "recording.." text is show to its left.
  - The recording button gets switched for a stop icon. 
  - Chat input gets disabled
  - When stop icon is pressed the recording stops and a "send" icon shows up.
  - When send icon is pressed the voice message gets sent in chat.
- Voice messages, images, stickers and gifs can be deleted like normal messages.

  ---> Isues found (couldnt fix) <--- 
  1. Cant cancel the recording, meaning you cannot stop and not send the audio recorded. only fix: refresh the page. 
  2. Voice recording is not specific, i.e. if chat is switched with another contact's the recording still goes on and every chat shows the stop button, as if it was started in every chat.


