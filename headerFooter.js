class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<navbar>
        <ul class="nav-list" id="nav-list">
            <li class="nav-item" id="logo">
                <img src="https://cdn.discordapp.com/attachments/1193230272792100957/1193275255645556746/logo.jpg?ex=65ac1f2e&is=6599aa2e&hm=571d31876a93a59a8996d211787cbcf85ff46ac6a9744f68d9e0a73487d60e76&">
            </li>
            <li class="nav-item">
                <div class="dropdown">
                    <button class="dropbtn">Movies 
                      <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                      <a href="#">Top 10</a>
                      <a href="#">Link 2</a>
                      <a href="#">Link 3</a>
                </div>
            </li>
            <li class="nav-item">
                <div class="dropdown">
                    <button class="dropbtn">TV Shows 
                      <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                      <a href="#">Link 1</a>
                      <a href="#">Link 2</a>
                      <a href="#">Link 3</a>
                </div>

            </li>
            <li class="nav-item">
                <div class="dropdown">
                    <button class="dropbtn">Anime 
                      <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                      <a href="#">Link 1</a>
                      <a href="#">Link 2</a>
                      <a href="#">Link 3</a>
                </div>

            </li>
            <li class="nav-item">
                <input type="text" id="search" name="search" placeholder="Search">
            </li>
            <li class="nav-item">
                <a href="signin.html"><button class="sign-in-btn">Sign In</button></a>
            </li>
        </ul>
        
    </navbar>`
    }
}

class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="footer">
        <a href="signin.html"><button class="footer-button">Sign in for more access</button></a>
        
        <div class="social-media-icons"> 
          <img class="tiktok-icon" src="">
          <img class="instagram-icon" src="icons/instagram.jpg">
          <img class="youtube-icon" src="icons/youtube.png">
          <img class="twitter-icon" src="icons/twitter.jpg">
          <img class="facebook-icon" src="icons/facebook.png">
        </div>
  
        <div class="affiliate-links">
          <div class="individual-link" >Get the IMDb App <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--launch-inline ipc-icon--inline ipc-link__launch-icon" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M21.6 21.6H2.4V2.4h7.2V0H0v24h24v-9.6h-2.4v7.2zM14.4 0v2.4h4.8L7.195 14.49l2.4 2.4L21.6 4.8v4.8H24V0h-9.6z"></path></svg></div>
          <div class="individual-link" >Help <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--launch-inline ipc-icon--inline ipc-link__launch-icon" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M21.6 21.6H2.4V2.4h7.2V0H0v24h24v-9.6h-2.4v7.2zM14.4 0v2.4h4.8L7.195 14.49l2.4 2.4L21.6 4.8v4.8H24V0h-9.6z"></path></svg></div>
          <div class="individual-link" >Site Index <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--launch-inline ipc-icon--inline ipc-link__launch-icon" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M21.6 21.6H2.4V2.4h7.2V0H0v24h24v-9.6h-2.4v7.2zM14.4 0v2.4h4.8L7.195 14.49l2.4 2.4L21.6 4.8v4.8H24V0h-9.6z"></path></svg></div>
          <div class="individual-link" >IMDbPro <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--launch-inline ipc-icon--inline ipc-link__launch-icon" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M21.6 21.6H2.4V2.4h7.2V0H0v24h24v-9.6h-2.4v7.2zM14.4 0v2.4h4.8L7.195 14.49l2.4 2.4L21.6 4.8v4.8H24V0h-9.6z"></path></svg></div>
          <div class="individual-link" >Box Office Mojo <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--launch-inline ipc-icon--inline ipc-link__launch-icon" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M21.6 21.6H2.4V2.4h7.2V0H0v24h24v-9.6h-2.4v7.2zM14.4 0v2.4h4.8L7.195 14.49l2.4 2.4L21.6 4.8v4.8H24V0h-9.6z"></path></svg></div>
          <div class="individual-link" >IMDb Developer <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--launch-inline ipc-icon--inline ipc-link__launch-icon" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M21.6 21.6H2.4V2.4h7.2V0H0v24h24v-9.6h-2.4v7.2zM14.4 0v2.4h4.8L7.195 14.49l2.4 2.4L21.6 4.8v4.8H24V0h-9.6z"></path></svg></div>
        </div>
  
        <div class="other-links">
          <div class="individual-link" >Press Room</div>
          <div class="individual-link" >Advertising <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--launch-inline ipc-icon--inline ipc-link__launch-icon" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M21.6 21.6H2.4V2.4h7.2V0H0v24h24v-9.6h-2.4v7.2zM14.4 0v2.4h4.8L7.195 14.49l2.4 2.4L21.6 4.8v4.8H24V0h-9.6z"></path></svg></div>
          <div class="individual-link" >Jobs <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--launch-inline ipc-icon--inline ipc-link__launch-icon" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M21.6 21.6H2.4V2.4h7.2V0H0v24h24v-9.6h-2.4v7.2zM14.4 0v2.4h4.8L7.195 14.49l2.4 2.4L21.6 4.8v4.8H24V0h-9.6z"></path></svg></div>
          <div class="individual-link" >Conditions of Use</div>
          <div class="individual-link" >Privary Policy</div>
          <div class="individual-link" >Your Ads Privacy Choices <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--launch-inline ipc-icon--inline ipc-link__launch-icon" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M21.6 21.6H2.4V2.4h7.2V0H0v24h24v-9.6h-2.4v7.2zM14.4 0v2.4h4.8L7.195 14.49l2.4 2.4L21.6 4.8v4.8H24V0h-9.6z"></path></svg></div>
        </div>
  
        <div class="amazon-logo-container">
          <img class="amazon-logo" src="icons/amazon-logo.png">
        </div>
  
        <div class="copyright">
          © 1990-2024 by IMDb.com, Inc.
        </div>
      
      </footer>
        `
    }
}

customElements.define('special-header', SpecialHeader)
customElements.define('special-footer', SpecialFooter)
