import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/ar-sa-blog-landing-header.html';
import body from '@/components/exact/ar-sa-blog-landing-body.html';
import footer from '@/components/exact/ar-sa-blog-landing-footer.html';

const htmlAttrs = {"lang":"ar-SA","dir":"rtl","data-wf-domain":"tamara.co","data-wf-page":"6874d40d01376bc6a9a76419","data-wf-site":"67c184892f7a84b971ff49d9"};

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} htmlAttrs={htmlAttrs} />;
}
