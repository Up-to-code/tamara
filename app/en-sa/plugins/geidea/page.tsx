import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-plugins-geidea-header.html';
import body from '@/components/exact/en-sa-plugins-geidea-body.html';
import footer from '@/components/exact/en-sa-plugins-geidea-footer.html';
import inline from '@/components/exact/en-sa-plugins-geidea.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="en-SA" dir="ltr" />;
}
