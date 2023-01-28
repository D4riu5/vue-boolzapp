# vue-boolzapp
Es. Boolean 35 (25/01/23) 

check pdf file for project directive


BONUSES implemented:

- App Homepage, instead of chat. (no issues)
- Last message under contact name gets truncated if too long. (no issues)
- Display full message under contact on mouseover. (no issues)
- If last message was sent by User, display a check icon before message. (only on contact list, not in the actual chat)
- Search bar resets when you open a chat. e.g. im searching for a specific contact, i click on it, chat opens and the searchbar resets to emtpy. (no issues)
- Chat auto scrolls to the bottom automatically and older messages get pushed up. i.e no manual scroll to see last chat. (no issues)
- Each chat shows a chevron-down icon on mouseover, that opens a dropdown with a delete option. When message is deleted, text gets replaced by: This message was deleted, in italics. (Date still shows up under the "This message was deleted")
- Chatting activity under Contact name inside the chat. I.e. when a message is sent, these are shown under contact name in order: Online (for 2 seconds) -> typing... (for 2.5 seconds) -> now (for a minute) -> Today at "HH:mm" (if chat is spammed by user, sometimes the "typing..." wont show up)
- The above descriptions under contact Name inside the chat is specific to the contact. only the contact youre chatting with shows these "descriptions" meaning, if chat is switched, other contacts wont have the same description, unless chat is initiated. (no issues)
- In the contacts section only the original date of the last message format is shown, i.e. "dd/mm/yyyy", "now" and "Today at 'hh:mm'" (no issues)
- Added Emojis selection when Smiley face Icon next to chat input. When Emoji is clicked it gets added in the chat input, and chat input gets focused, meaning you can type without clicking the input with the mouse. (no issues)
- Added User page on user image click. (the image on top left of screen). (no issues)
- Can change the User Name: Click on the pencil icon. Name changes only if Enter key is pressed. (a small text explains this when editing is started). (no issues)
- Can change the User Avatar: Click on the User image to open a modal with 8 avatars. The avatar changes only when the save changes button is pressed, if not it resets to the last avatar selected. (cannot upload your own image)
- Added Escape button functionability: if Esc is pressed inside a chat it closes and homepage is shown. Same for settings page, emoji menu open, editing name, avatar change modal. (no issues)
- Added voice messages:  
  - webpage asks for mic permision on page access. 
  - when Microphone icon is pressed, recording starts 
  - A "recording.." text is show to its left.
  - The recording button gets switched for a stop icon. 
  - Chat input gets disabled
  - When stop icon is pressed the recording stops, chat input gets abled, and a "send" icon shows up.
  - When send icon is pressed the voice message gets sent in chat. (can also type a text and send it with Enter key")
  - Voice messages can be deleted like normal messages.
  - ISSUES: 
    1. Cant cancel the recording, meaning you cannot stop and not send the audio recorded. only fix: refresh the page. 
    2. Voice recording is not specific, i.e. if chat is switched with another contact's the recording still goes on and every chat shows the stop button, as if it was started in every chat.
- Added Theme selection through Button on top of the screen (sun/moon). Set Dark-theme as default. (no issues)
- Chat bubble next to the moon icon focuses the Search input on click. (no issues)


Planned BONUSES: 
- sort contact list by last message date
- button to sort contact list by oldest message date
- Mobile version of website
- Settings dropdown: 
  - add new contact from a list of names?
  - settings page
- in chat settings dropdown:
  - block contact
  - delete chat
- attachments button, i.e send pictures, files etc as a text message
- search message in chat button. i.e. F ctrl + f, but only searches for messages in chat 
  
