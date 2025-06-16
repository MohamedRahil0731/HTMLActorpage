export default function Footer() {
  return (
    <footer className="border-t bg-gray-50 py-8">
      <div className="container grid gap-8 md:grid-cols-3">
        <div>
          <h4 className="mb-4 text-lg font-semibold">Customer Service</h4>
          <ul className="space-y-2 text-sm">
            <li>Contact us</li>
            <li>My orders</li>
            <li>Returns & exchanges</li>
            <li>Shipping info</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-lg font-semibold">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>About H&M Group</li>
            <li>Career at H&M</li>
            <li>Sustainability</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-lg font-semibold">Follow Us</h4>
          <ul className="space-y-2 text-sm">
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>
      <div className="container mt-8 text-center text-xs text-primary-light">
        © 2025 – This clone is for educational purposes only and not affiliated with H&M.
      </div>
    </footer>
  );
}
