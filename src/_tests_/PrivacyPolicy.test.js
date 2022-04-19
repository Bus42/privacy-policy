import { render, screen } from '@testing-library/react';
import PrivacyPolicy from '../components/PrivacyPolicy';

describe("Privacy Policy component", () => {
    it("renders Privacy Policy component", async () => {
        render(<PrivacyPolicy />);
        const privacyPolicy = screen.getByText(/Studio42 Dev Privacy Policy/i);
        expect(privacyPolicy).toBeInTheDocument();
    });

    it("Renders the Studio42 logo", () => {
        render(<PrivacyPolicy />);
        const logo = screen.getByAltText(/Studio42 rocket logo/i);
        expect(logo).toBeInTheDocument();
    })

    it("contains a contact link", async () => {
        render(<PrivacyPolicy />);
        const contactLink = screen.getByText(/greg@studio42dev.com/i, { selector: "a" });
        expect(contactLink).toHaveAttribute("href", "mailto:greg@studio42dev.com");
    })

})