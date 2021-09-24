<template>
  <div class="grid grid-cols-1 md:grid-cols-2">
    <div class="contact-text md:text-base text-sm p-2.5">
      <p class="mb-4">ご連絡は、右のフォームよりお願いします。</p>
      <p>1~2日以内に折り返しご返信させて頂きます。</p>
      <p class="mb-4">ご相談やご要望など、お気軽にお問い合わせください！</p>
    </div>
    <div class="front-contact">
      <form name="contact" method="POST" class="front-contact_form"  data-netlify-honeypot="bot-field" netlify>
        <input type="hidden" name="mifaform" value="contact" />
        <div class="p-2.5">
          <p>
            <label>お名前<span class="mandatory">*</span></label>
          </p>
          <div>
            <input type="text" name="name" autocomplete="name" placeholder="Your Name" class="trans" required>
          </div>
        </div>
        <div class="p-2.5">
          <p>
            <label>メールアドレス<span class="mandatory">*</span></label>
          </p>
          <div>
            <input type="email" name="email" autocomplete="email" placeholder="E-mail Address" class="trans focus" required>
          </div>
        </div>
        <div class="p-2.5">
          <p>
            <label>お問い合わせ内容<span class="mandatory">*</span></label>
          </p>
          <div>
            <textarea name="message" placeholder="Please enter a message..." class="trans" required rows="3"></textarea>
          </div>
        </div>
        <div v-show="false" class="p-contact__item">
          <label for="message">スパムでない場合は空欄</label>
          <input type="text" name="bot-field"/>
        </div>
        <button type="submit" class="font-nsans btn">SEND</button>
      </form>
    </div>
  </div>
</template>
