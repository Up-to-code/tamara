import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-buyer-protection-terms-customers-header.html';
import body from '@/components/exact/en-sa-buyer-protection-terms-customers-body.html';
import footer from '@/components/exact/en-sa-buyer-protection-terms-customers-footer.html';

const htmlAttrs = {"lang":"en-SA","data-wf-domain":"tamara.co","data-wf-page":"6885ea11dce166d66c78ca33","data-wf-site":"67c184892f7a84b971ff49d9"};

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} htmlAttrs={htmlAttrs} />;
}
