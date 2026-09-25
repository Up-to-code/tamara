import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-stores-homebox-header.html';
import body from '@/components/exact/en-sa-stores-homebox-body.html';
import footer from '@/components/exact/en-sa-stores-homebox-footer.html';
import inline from '@/components/exact/en-sa-stores-homebox.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="en-SA" dir="ltr" />;
}
