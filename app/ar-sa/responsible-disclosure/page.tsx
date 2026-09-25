import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/ar-sa-responsible-disclosure-header.html';
import body from '@/components/exact/ar-sa-responsible-disclosure-body.html';
import footer from '@/components/exact/ar-sa-responsible-disclosure-footer.html';

const htmlAttrs = {"lang":"ar-SA","dir":"rtl","data-wf-domain":"tamara.co","data-wf-page":"68848a47ef3624273ac24526","data-wf-site":"67c184892f7a84b971ff49d9"};

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} htmlAttrs={htmlAttrs} />;
}
