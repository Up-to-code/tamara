import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/ar-sa-rise-with-tamara-header.html';
import body from '@/components/exact/ar-sa-rise-with-tamara-body.html';
import footer from '@/components/exact/ar-sa-rise-with-tamara-footer.html';

const htmlAttrs = {"lang":"ar-SA","dir":"rtl","data-wf-domain":"tamara.co","data-wf-page":"6a0fe15cd8675377efef7c0d","data-wf-site":"67c184892f7a84b971ff49d9"};

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} htmlAttrs={htmlAttrs} />;
}
