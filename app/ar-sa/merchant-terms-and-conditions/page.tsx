import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/ar-sa-merchant-terms-and-conditions-header.html';
import body from '@/components/exact/ar-sa-merchant-terms-and-conditions-body.html';
import footer from '@/components/exact/ar-sa-merchant-terms-and-conditions-footer.html';

const htmlAttrs = {"lang":"ar-SA","dir":"rtl","data-wf-domain":"tamara.co","data-wf-page":"69f31bdc7c1c78345dbbbfc4","data-wf-site":"67c184892f7a84b971ff49d9"};

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} htmlAttrs={htmlAttrs} />;
}
