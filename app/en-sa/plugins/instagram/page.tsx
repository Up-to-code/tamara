import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-plugins-instagram-header.html';
import body from '@/components/exact/en-sa-plugins-instagram-body.html';
import footer from '@/components/exact/en-sa-plugins-instagram-footer.html';
import inline from '@/components/exact/en-sa-plugins-instagram.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="en-SA" dir="ltr" />;
}
