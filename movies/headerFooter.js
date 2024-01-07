class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<navbar>
        <ul class="nav-list" id="nav-list">
            <li class="nav-item" id="logo">
                <a href="index.html">
                    <img src="https://cdn.discordapp.com/attachments/1193230272792100957/1193275255645556746/logo.jpg?ex=65ac1f2e&is=6599aa2e&hm=571d31876a93a59a8996d211787cbcf85ff46ac6a9744f68d9e0a73487d60e76&" alt="Logo">
                </a>
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
        <footer>
        <div class="footer-container">
  
          <div class="signin-button-container">
            <a href="signin.html"><button class="signin-button">Sign in for more access</button></a>
          </div>
  
          <div class="social-media-icons">
            <img class="tiktok-icon" src="https://lh3.googleusercontent.com/drive-viewer/AEYmBYSVr-HhhD2bUi0rxQU8rx-it1v-BJZtBZT77K0AN9xvZiW9sbn_1CcjfzZL96AKxdbCbWxNZ4wIAcvgJjANy1WOmRhPIQ=s2560">
            <img class="instagram-icon" src="https://lh3.googleusercontent.com/drive-viewer/AEYmBYR6dMf3nEqL_XnvJJWwJiJxnJkUHicUzzpzCFIqwPT2g8yoAAhF_w0pWugGrjramgYk_Yrmr5c3dskClaoAmZZwDLaMoA=s2560">
            <img class="youtube-icon" src="https://lh3.googleusercontent.com/drive-viewer/AEYmBYQcb6-4uzbiw9U7sA3ErwchNfV-qREYpKLUAubaXXg-hbw3rFCdRECLQ-0mMrGIyUtpd5U4jand1Cc4V36GIT1rXoYQNQ=s2560">
            <img class="twitter-icon" src="https://lh3.googleusercontent.com/drive-viewer/AEYmBYQZIU8r3Ymw1QrMw6qam2HICICPhCpFobrC6BN6EFfT9IfRAPqLZBH-2yAeoHjL0cr-Bes77V_zKygW-5KSTHaWBqASeg=s2560">
            <img class="facebook-icon" src="https://lh3.googleusercontent.com/drive-viewer/AEYmBYTPnXD4T_N-tYSdQt2GXzUzuvAAcE-GwBXh_MUH9vgSfCauXd2-xle5Wl-oFlFSLo-Rdl0_LQWq8bYx2rJSeukTMuZy4A=s2560">
          </div>
    
          <div class="affiliate-links"> 
            <ul>
              <li>Get the Cinemeter App <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--launch-inline ipc-icon--inline ipc-link__launch-icon" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M21.6 21.6H2.4V2.4h7.2V0H0v24h24v-9.6h-2.4v7.2zM14.4 0v2.4h4.8L7.195 14.49l2.4 2.4L21.6 4.8v4.8H24V0h-9.6z"></path></svg></li>
              <li>Help <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--launch-inline ipc-icon--inline ipc-link__launch-icon" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M21.6 21.6H2.4V2.4h7.2V0H0v24h24v-9.6h-2.4v7.2zM14.4 0v2.4h4.8L7.195 14.49l2.4 2.4L21.6 4.8v4.8H24V0h-9.6z"></path></svg></li>
              <li>Site Index <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--launch-inline ipc-icon--inline ipc-link__launch-icon" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M21.6 21.6H2.4V2.4h7.2V0H0v24h24v-9.6h-2.4v7.2zM14.4 0v2.4h4.8L7.195 14.49l2.4 2.4L21.6 4.8v4.8H24V0h-9.6z"></path></svg></li>
              <li>Box Office Mojo <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--launch-inline ipc-icon--inline ipc-link__launch-icon" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M21.6 21.6H2.4V2.4h7.2V0H0v24h24v-9.6h-2.4v7.2zM14.4 0v2.4h4.8L7.195 14.49l2.4 2.4L21.6 4.8v4.8H24V0h-9.6z"></path></svg></li>
              <li>Cintemeter Developer <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--launch-inline ipc-icon--inline ipc-link__launch-icon" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M21.6 21.6H2.4V2.4h7.2V0H0v24h24v-9.6h-2.4v7.2zM14.4 0v2.4h4.8L7.195 14.49l2.4 2.4L21.6 4.8v4.8H24V0h-9.6z"></path></svg></li>
            </ul>
          </div>
    
          <div class="other-links">
            <ul>
              <li>Press Room</li>
              <li>Advertising <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--launch-inline ipc-icon--inline ipc-link__launch-icon" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M21.6 21.6H2.4V2.4h7.2V0H0v24h24v-9.6h-2.4v7.2zM14.4 0v2.4h4.8L7.195 14.49l2.4 2.4L21.6 4.8v4.8H24V0h-9.6z"></path></svg></li>
              <li>Jobs <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--launch-inline ipc-icon--inline ipc-link__launch-icon" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M21.6 21.6H2.4V2.4h7.2V0H0v24h24v-9.6h-2.4v7.2zM14.4 0v2.4h4.8L7.195 14.49l2.4 2.4L21.6 4.8v4.8H24V0h-9.6z"></path></svg></li>
              <li>Conditions of Use</li>
              <li>Privacy Policy</li>
              <li>Your Ads Privacy Choices <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--launch-inline ipc-icon--inline ipc-link__launch-icon" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M21.6 21.6H2.4V2.4h7.2V0H0v24h24v-9.6h-2.4v7.2zM14.4 0v2.4h4.8L7.195 14.49l2.4 2.4L21.6 4.8v4.8H24V0h-9.6z"></path></svg></li>
            </ul>
          </div>
    
          <div class="footer-bottom">
            <p>© 1990-2024 by IMDb.com, Inc.</p>
          </div>
    
        </div>
      </footer>
        `
    }
}

customElements.define('special-header', SpecialHeader)
customElements.define('special-footer', SpecialFooter)
