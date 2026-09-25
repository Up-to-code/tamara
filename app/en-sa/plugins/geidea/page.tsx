import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-plugins-geidea-header.html';
import body from '@/components/exact/en-sa-plugins-geidea-body.html';
import footer from '@/components/exact/en-sa-plugins-geidea-footer.html';

const htmlAttrs = {"lang":"en-SA","data-wf-domain":"tamara.co","data-wf-page":"69e0b1e4af78873a57c815ae","data-wf-site":"67c184892f7a84b971ff49d9"};

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} htmlAttrs={htmlAttrs} />;
}
