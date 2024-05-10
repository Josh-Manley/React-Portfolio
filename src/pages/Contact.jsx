export default function Contact() {
  return (
    <div>
      <div class="mb-3 w-50">
        <label for="Name" class="form-label col-form-label-lg">
          Name
        </label>
        <input type="email" class="form-control form-control-lg" id="exampleFormControlInput1" placeholder="" />
      </div>
      <div class="mb-3 w-50">
        <label for="Email" class="form-label col-form-label-lg">
          Email address
        </label>
        <input
          type="email"
          class="form-control form-control-lg"
          id="exampleFormControlInput1"
          placeholder="email@example.com"
        />
      </div>
      <div class="mb-3 w-50">
        <label for="Message" class="form-label col-form-label-lg">
          Message
        </label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
      </div>
      <button className="btn btn-primary">Submit</button>
    </div>
  );
}
